/**
 * ============================================================================
 * UDAAR FOUNDATION - INTERACTIVE PORTAL APPLICATION LOGIC (js/app.js)
 * Domain: udaarfoundation.org
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function openMobileMenu() {
    if (!mobileMenuOverlay) return;
    mobileMenuOverlay.classList.remove("hidden");
    requestAnimationFrame(() => {
      mobileMenuOverlay.classList.add("open");
    });
    mobileMenuBtn?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    if (!mobileMenuOverlay) return;
    mobileMenuOverlay.classList.remove("open");
    mobileMenuBtn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    setTimeout(() => {
      mobileMenuOverlay.classList.add("hidden");
    }, 250);
  }

  mobileMenuBtn?.addEventListener("click", openMobileMenu);
  mobileMenuCloseBtn?.addEventListener("click", closeMobileMenu);
  mobileMenuOverlay?.addEventListener("click", (e) => {
    if (e.target === mobileMenuOverlay) closeMobileMenu();
  });
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // 3. Scroll-Spy for Sticky Navigation Links
  const sections = document.querySelectorAll("main section[id]");
  const desktopNavLinks = document.querySelectorAll(".nav-link[data-section]");

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 160;
    let currentSectionId = "home";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute("id");
      }
    });

    desktopNavLinks.forEach((link) => {
      const target = link.getAttribute("data-section");
      if (target === currentSectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // 4. Focus Programs "Learn More" Inline Expandable Drawer + Modal Support
  const programToggleBtns = document.querySelectorAll(".program-learn-more-btn");
  programToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const programKey = btn.getAttribute("data-program");
      const drawer = document.getElementById(`program-drawer-${programKey}`);
      const labelSpan = btn.querySelector(".btn-label");
      const iconEl = btn.querySelector(".btn-icon");

      if (!drawer) return;
      const isOpen = drawer.classList.contains("open");

      if (isOpen) {
        drawer.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        if (labelSpan) labelSpan.textContent = "Learn More";
        if (iconEl) iconEl.style.transform = "rotate(0deg)";
      } else {
        drawer.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        if (labelSpan) labelSpan.textContent = "Show Less";
        if (iconEl) iconEl.style.transform = "rotate(180deg)";
      }
    });
  });

  // Program Deep-Dive Modal Trigger
  const programModalBtns = document.querySelectorAll(".open-program-modal-btn");
  programModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const programKey = btn.getAttribute("data-program");
      openProgramDetailModal(programKey);
    });
  });

  // 5. Work With Us / Engagement Hub View Switcher (Split View vs Tabbed Focus)
  const engagementTabBtns = document.querySelectorAll(".engagement-tab-btn");
  const volunteerCol = document.getElementById("engagement-col-volunteer");
  const csrCol = document.getElementById("engagement-col-csr");
  const engagementGrid = document.getElementById("engagement-hub-grid");

  engagementTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.getAttribute("data-view");
      engagementTabBtns.forEach((b) => {
        b.classList.remove("bg-[#1E5631]", "text-white", "shadow-sm");
        b.classList.add("text-gray-700", "hover:text-[#1E5631]");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("bg-[#1E5631]", "text-white", "shadow-sm");
      btn.classList.remove("text-gray-700", "hover:text-[#1E5631]");
      btn.setAttribute("aria-selected", "true");

      if (!volunteerCol || !csrCol || !engagementGrid) return;

      if (view === "both") {
        volunteerCol.classList.remove("hidden");
        csrCol.classList.remove("hidden");
        engagementGrid.classList.add("lg:grid-cols-2");
        engagementGrid.classList.remove("max-w-3xl", "mx-auto");
      } else if (view === "volunteer") {
        volunteerCol.classList.remove("hidden");
        csrCol.classList.add("hidden");
        engagementGrid.classList.remove("lg:grid-cols-2");
        engagementGrid.classList.add("max-w-3xl", "mx-auto");
      } else if (view === "csr") {
        volunteerCol.classList.add("hidden");
        csrCol.classList.remove("hidden");
        engagementGrid.classList.remove("lg:grid-cols-2");
        engagementGrid.classList.add("max-w-3xl", "mx-auto");
      }
    });
  });

  // 6. Quick Donation Amount Selector Chips & Custom Amount Logic
  const donationChips = document.querySelectorAll(".donation-chip");
  const customAmountContainer = document.getElementById("custom-amount-wrapper");
  const customAmountInput = document.getElementById("custom-donation-input");
  const selectedAmountDisplay = document.getElementById("selected-donation-amount");
  const selectedImpactTitle = document.getElementById("selected-impact-title");
  const selectedImpactDesc = document.getElementById("selected-impact-desc");
  const qrAmountBadge = document.getElementById("qr-selected-amount-badge");

  function formatINR(num) {
    const parsed = parseInt(num, 10);
    if (isNaN(parsed) || parsed <= 0) return "₹500";
    return "₹" + parsed.toLocaleString("en-IN");
  }

  function updateDonationSelection(amountVal, titleText, descText) {
    const formatted = formatINR(amountVal);
    if (selectedAmountDisplay) selectedAmountDisplay.textContent = formatted;
    if (selectedImpactTitle) selectedImpactTitle.textContent = titleText;
    if (selectedImpactDesc) selectedImpactDesc.textContent = descText;
    if (qrAmountBadge) qrAmountBadge.textContent = `Selected Contribution: ${formatted}`;
  }

  donationChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      donationChips.forEach((c) => {
        c.classList.remove("active");
        c.setAttribute("aria-pressed", "false");
      });
      chip.classList.add("active");
      chip.setAttribute("aria-pressed", "true");

      const rawAmount = chip.getAttribute("data-amount");
      const title = chip.getAttribute("data-title");
      const desc = chip.getAttribute("data-desc");

      if (rawAmount === "custom") {
        customAmountContainer?.classList.remove("hidden");
        customAmountInput?.focus();
        const customVal = customAmountInput?.value || 2000;
        updateDonationSelection(customVal, title, desc);
      } else {
        customAmountContainer?.classList.add("hidden");
        updateDonationSelection(rawAmount, title, desc);
      }
    });
  });

  customAmountInput?.addEventListener("input", (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) {
      let dynamicImpact =
        "Every rupee directly supports our Sector 115 classroom learning centers, school kits, and health camps.";
      if (val >= 5000) {
        dynamicImpact = `Sponsors comprehensive education, study kits, and healthcare support for ${Math.floor(
          val / 1200
        )}+ children in Noida.`;
      } else if (val >= 1200) {
        dynamicImpact =
          "Covers full monthly remedial tuition, learning materials, and nutritional snacks for a child.";
      }
      updateDonationSelection(val, "Custom Impact Contribution", dynamicImpact);
    } else {
      if (selectedAmountDisplay) selectedAmountDisplay.textContent = "Custom";
      if (qrAmountBadge) qrAmountBadge.textContent = "Enter any amount in your UPI app";
    }
  });

  // 7. 1-Click Copy Buttons (UPI ID & Bank Account Details)
  const copyButtons = document.querySelectorAll(".copy-clipboard-btn");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-copy");
      const label = btn.getAttribute("data-label") || "Details";
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`${label} copied to clipboard!`, "success");
      } catch {
        // Fallback for restricted clipboard contexts
        const tempInput = document.createElement("textarea");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        showToast(`${label} copied to clipboard!`, "success");
      }

      const originalHTML = btn.innerHTML;
      btn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-[#1E5631]"></i><span>Copied!</span>`;
      if (window.lucide) window.lucide.createIcons();
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        if (window.lucide) window.lucide.createIcons();
      }, 2000);
    });
  });

  // Copy All Bank Details Button
  const copyAllBankBtn = document.getElementById("copy-all-bank-btn");
  copyAllBankBtn?.addEventListener("click", async () => {
    const cfg = window.UDAAR_CONFIG?.donation?.bankDetails;
    const bankSummary = `Account Name: ${cfg?.accountName || "Udaar Foundation"}
Account Number: ${cfg?.accountNumber || "50200023379155"}
Bank Name: ${cfg?.bankName || "Bandhan Bank"}
IFSC Code: ${cfg?.ifscCode || "BDBL0001983"}
Branch: ${cfg?.branchName || "Bandhan Bank Plot No.18, B-1/A, Sector 51, Noida, Uttar Pradesh 201303"}
Account Type: ${cfg?.accountType || "Current Account"}`;

    try {
      await navigator.clipboard.writeText(bankSummary);
    } catch {
      const temp = document.createElement("textarea");
      temp.value = bankSummary;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    showToast("Complete Bank Transfer details copied!", "success");
  });

  // 8. Gallery Filter & Lightbox Modal
  const galleryFilterBtns = document.querySelectorAll(".gallery-filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item-card");

  galleryFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      galleryFilterBtns.forEach((b) => {
        b.classList.remove("bg-[#1E5631]", "text-white");
        b.classList.add("bg-white", "text-gray-700", "border-gray-200");
      });
      btn.classList.add("bg-[#1E5631]", "text-white");
      btn.classList.remove("bg-white", "text-gray-700", "border-gray-200");

      galleryItems.forEach((card) => {
        const itemCat = card.getAttribute("data-category");
        if (filter === "all" || itemCat === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Gallery Lightbox
  let currentGalleryIndex = 0;
  const galleryData = window.UDAAR_CONFIG?.gallery || [];
  const lightboxModal = document.getElementById("gallery-lightbox-modal");
  const lightboxTag = document.getElementById("lightbox-placeholder-tag");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCategory = document.getElementById("lightbox-category");
  const lightboxLocation = document.getElementById("lightbox-location");
  const lightboxDesc = document.getElementById("lightbox-description");
  const lightboxCounter = document.getElementById("lightbox-counter");

  function renderLightboxItem(index) {
    if (!galleryData.length) return;
    currentGalleryIndex = (index + galleryData.length) % galleryData.length;
    const item = galleryData[currentGalleryIndex];
    if (lightboxTag) lightboxTag.textContent = item.tag;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxCategory) lightboxCategory.textContent = item.category;
    if (lightboxLocation) lightboxLocation.textContent = item.location;
    if (lightboxDesc) lightboxDesc.textContent = item.description;
    if (lightboxCounter)
      lightboxCounter.textContent = `Photo ${currentGalleryIndex + 1} of ${galleryData.length}`;
  }


  document.getElementById("lightbox-prev-btn")?.addEventListener("click", () => {
    renderLightboxItem(currentGalleryIndex - 1);
  });
  document.getElementById("lightbox-next-btn")?.addEventListener("click", () => {
    renderLightboxItem(currentGalleryIndex + 1);
  });

  // 9. Universal Modal Dialog System
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove("hidden");
    requestAnimationFrame(() => {
      modal.classList.add("open");
    });
    document.body.style.overflow = "hidden";
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 250);
  }

  function closeAllModals() {
    document.querySelectorAll(".modal-backdrop.open").forEach((modal) => {
      modal.classList.remove("open");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 250);
    });
    document.body.style.overflow = "";
  }

  // Bind data-modal-open and data-modal-close triggers
  document.querySelectorAll("[data-modal-open]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const targetModal = trigger.getAttribute("data-modal-open");
      openModal(targetModal);
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      const targetModal = closeBtn.getAttribute("data-modal-close");
      if (targetModal) {
        closeModal(targetModal);
      } else {
        closeAllModals();
      }
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  // Keyboard Escape & Left/Right for Lightbox
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
      closeMobileMenu();
    }
    if (lightboxModal && lightboxModal.classList.contains("open")) {
      if (e.key === "ArrowLeft") renderLightboxItem(currentGalleryIndex - 1);
      if (e.key === "ArrowRight") renderLightboxItem(currentGalleryIndex + 1);
    }
  });

  // Program Deep-Dive Modal Population
  function openProgramDetailModal(programKey) {
    const prog = window.UDAAR_CONFIG?.programs?.[programKey];
    if (!prog) return;
    const titleEl = document.getElementById("program-modal-title");
    const catEl = document.getElementById("program-modal-category");
    const tagEl = document.getElementById("program-modal-tag");
    const metricsEl = document.getElementById("program-modal-metrics");
    const listEl = document.getElementById("program-modal-highlights");
    const benEl = document.getElementById("program-modal-beneficiaries");

    if (titleEl) titleEl.textContent = prog.title;
    if (catEl) catEl.textContent = prog.category;
    if (tagEl) tagEl.textContent = prog.placeholderTag;
    if (metricsEl) metricsEl.textContent = prog.metrics;
    if (benEl) benEl.textContent = prog.beneficiaries;
    if (listEl) {
      listEl.innerHTML = prog.highlights
        .map(
          (item) => `
        <li class="flex items-start gap-2.5 text-sm text-gray-700">
          <span class="mt-1 w-2 h-2 rounded-full bg-[#52B788] shrink-0"></span>
          <span>${item}</span>
        </li>`
        )
        .join("");
    }
    openModal("program-detail-modal");
  }

  // Legal & Governance Modal Population
  document.querySelectorAll(".open-legal-modal-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const docKey = btn.getAttribute("data-doc");
      const doc = window.UDAAR_CONFIG?.legalDocs?.[docKey];
      if (!doc) return;

      const titleEl = document.getElementById("legal-modal-title");
      const updatedEl = document.getElementById("legal-modal-updated");
      const bodyEl = document.getElementById("legal-modal-body");

      if (titleEl) titleEl.textContent = doc.title;
      if (updatedEl) updatedEl.textContent = doc.updated;
      if (bodyEl) bodyEl.innerHTML = doc.content;

      openModal("legal-governance-modal");
    });
  });

  // 10. Client-Side Form Validation & Confirmation States
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
  }

  function validatePhone(phone) {
    const cleaned = String(phone).replace(/[\s\-\+\(\)]/g, "");
    return cleaned.length >= 10 && /^\d+$/.test(cleaned);
  }

  function showFormFieldError(inputEl, message) {
    if (!inputEl) return;
    inputEl.classList.add("border-red-500", "ring-1", "ring-red-500");
    let errEl = inputEl.parentElement.querySelector(".field-error-msg");
    if (!errEl) {
      errEl = document.createElement("p");
      errEl.className = "field-error-msg text-xs text-red-600 mt-1 font-medium";
      inputEl.parentElement.appendChild(errEl);
    }
    errEl.textContent = message;
  }

  function clearFormErrors(formEl) {
    formEl.querySelectorAll(".border-red-500").forEach((el) => {
      el.classList.remove("border-red-500", "ring-1", "ring-red-500");
    });
    formEl.querySelectorAll(".field-error-msg").forEach((el) => el.remove());
  }

  function showSubmissionSuccessModal(heading, message, referenceNote) {
    const titleEl = document.getElementById("confirmation-modal-title");
    const msgEl = document.getElementById("confirmation-modal-message");
    const refEl = document.getElementById("confirmation-modal-ref");

    if (titleEl) titleEl.textContent = heading;
    if (msgEl) msgEl.textContent = message;
    if (refEl) refEl.textContent = referenceNote;

    openModal("submission-confirmation-modal");
  }

  // A. Main Volunteer Application Form & Modal Volunteer Form
  function handleVolunteerFormSubmit(formEl, isFromModal = false) {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      clearFormErrors(formEl);

      const nameInput = formEl.querySelector('[name="volunteer_name"]');
      const phoneInput = formEl.querySelector('[name="volunteer_phone"]');
      const emailInput = formEl.querySelector('[name="volunteer_email"]');
      const availabilityInput = formEl.querySelector('[name="volunteer_availability"]');
      const checkedSkills = formEl.querySelectorAll('input[name="volunteer_skills"]:checked');

      let valid = true;
      if (!nameInput?.value.trim() || nameInput.value.trim().length < 2) {
        showFormFieldError(nameInput, "Please enter your full name.");
        valid = false;
      }
      if (!validatePhone(phoneInput?.value)) {
        showFormFieldError(phoneInput, "Please enter a valid 10-digit phone number.");
        valid = false;
      }
      if (!validateEmail(emailInput?.value)) {
        showFormFieldError(emailInput, "Please enter a valid email address.");
        valid = false;
      }
      if (!availabilityInput?.value) {
        showFormFieldError(availabilityInput, "Please select your availability.");
        valid = false;
      }

      if (!valid) {
        showToast("Please check the highlighted fields.", "error");
        return;
      }

      const skillsList = Array.from(checkedSkills)
        .map((cb) => cb.value)
        .join(", ") || "General Community Support";

      const applicantName = nameInput.value.trim();
      formEl.reset();
      if (isFromModal) closeModal("volunteer-apply-modal");

      showSubmissionSuccessModal(
        `Welcome to the Udaar Family, ${applicantName}!`,
        `Thank you for applying to volunteer with Udaar Foundation. Our Volunteer Coordinator at Sector 115, Noida will reach out to you within 48 hours regarding orientation for: ${skillsList}.`,
        `Application Ref: UDF-VOL-${Math.floor(100000 + Math.random() * 900000)}`
      );
      showToast("Volunteer application submitted successfully!", "success");
    });
  }

  const mainVolunteerForm = document.getElementById("volunteer-application-form");
  if (mainVolunteerForm) handleVolunteerFormSubmit(mainVolunteerForm, false);

  const modalVolunteerForm = document.getElementById("modal-volunteer-form");
  if (modalVolunteerForm) handleVolunteerFormSubmit(modalVolunteerForm, true);

  // B. General Contact Inquiry Form
  const contactForm = document.getElementById("general-contact-form");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearFormErrors(contactForm);

    const nameInput = contactForm.querySelector('[name="contact_name"]');
    const emailInput = contactForm.querySelector('[name="contact_email"]');
    const phoneInput = contactForm.querySelector('[name="contact_phone"]');
    const subjectInput = contactForm.querySelector('[name="contact_subject"]');
    const messageInput = contactForm.querySelector('[name="contact_message"]');

    let valid = true;
    if (!nameInput?.value.trim()) {
      showFormFieldError(nameInput, "Please enter your name.");
      valid = false;
    }
    if (!validateEmail(emailInput?.value)) {
      showFormFieldError(emailInput, "Please enter a valid email address.");
      valid = false;
    }
    if (!validatePhone(phoneInput?.value)) {
      showFormFieldError(phoneInput, "Please enter a valid 10-digit phone number.");
      valid = false;
    }
    if (!subjectInput?.value.trim()) {
      showFormFieldError(subjectInput, "Please select or enter a subject.");
      valid = false;
    }
    if (!messageInput?.value.trim() || messageInput.value.trim().length < 10) {
      showFormFieldError(messageInput, "Please enter a message (at least 10 characters).");
      valid = false;
    }

    if (!valid) {
      showToast("Please complete all required inquiry fields.", "error");
      return;
    }

    const senderName = nameInput.value.trim();
    contactForm.reset();

    showSubmissionSuccessModal(
      `Thank You for Contacting Us, ${senderName}!`,
      "Your inquiry has been logged with our Noida office desk (info@udaarfoundation.org). A team member will respond within 1–2 working days.",
      `Inquiry ID: UDF-INQ-${Math.floor(100000 + Math.random() * 900000)}`
    );
    showToast("Message sent successfully!", "success");
  });

  // C. CSR Partnership Inquiry Modal Form
  const csrForm = document.getElementById("csr-inquiry-form");
  csrForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearFormErrors(csrForm);

    const orgInput = csrForm.querySelector('[name="csr_company"]');
    const personInput = csrForm.querySelector('[name="csr_contact_person"]');
    const emailInput = csrForm.querySelector('[name="csr_email"]');
    const phoneInput = csrForm.querySelector('[name="csr_phone"]');

    let valid = true;
    if (!orgInput?.value.trim()) {
      showFormFieldError(orgInput, "Please enter your company or foundation name.");
      valid = false;
    }
    if (!personInput?.value.trim()) {
      showFormFieldError(personInput, "Please enter the contact person's name.");
      valid = false;
    }
    if (!validateEmail(emailInput?.value)) {
      showFormFieldError(emailInput, "Please enter an official email address.");
      valid = false;
    }
    if (!validatePhone(phoneInput?.value)) {
      showFormFieldError(phoneInput, "Please enter a valid phone number.");
      valid = false;
    }

    if (!valid) {
      showToast("Please fill in all required CSR fields.", "error");
      return;
    }

    const companyName = orgInput.value.trim();
    csrForm.reset();
    closeModal("csr-partnership-modal");

    showSubmissionSuccessModal(
      `CSR Partnership Request Received`,
      `Thank you for representing ${companyName}. Our CSR & Institutional Partnerships team (csr@udaarfoundation.org) will send our Schedule VII proposal deck and 80G/12A/CSR-1 compliance dossier shortly.`,
      `CSR Ref: UDF-CSR-${Math.floor(100000 + Math.random() * 900000)}`
    );
    showToast("CSR partnership inquiry submitted!", "success");
  });

  // D. 80G Receipt / Donation UTR Notification Form
  const receiptForm = document.getElementById("receipt-request-form");
  receiptForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearFormErrors(receiptForm);

    const donorName = receiptForm.querySelector('[name="donor_name"]');
    const donorEmail = receiptForm.querySelector('[name="donor_email"]');
    const donorPan = receiptForm.querySelector('[name="donor_pan"]');
    const donorUtr = receiptForm.querySelector('[name="donor_utr"]');
    const donorAmount = receiptForm.querySelector('[name="donor_amount"]');

    let valid = true;
    if (!donorName?.value.trim()) {
      showFormFieldError(donorName, "Please enter the donor's full legal name.");
      valid = false;
    }
    if (!validateEmail(donorEmail?.value)) {
      showFormFieldError(donorEmail, "Please enter a valid email for the 80G certificate.");
      valid = false;
    }
    if (!donorPan?.value.trim() || donorPan.value.trim().length < 10) {
      showFormFieldError(donorPan, "Please enter your 10-character PAN number for 80G filing.");
      valid = false;
    }
    if (!donorUtr?.value.trim()) {
      showFormFieldError(donorUtr, "Please enter your UPI / NEFT UTR transaction number.");
      valid = false;
    }

    if (!valid) {
      showToast("Please provide UTR and PAN details for your 80G receipt.", "error");
      return;
    }

    const nameVal = donorName.value.trim();
    const amtVal = donorAmount?.value ? `₹${donorAmount.value}` : "your contribution";
    receiptForm.reset();
    closeModal("eighty-g-receipt-modal");

    showSubmissionSuccessModal(
      `Thank You for Your Generosity, ${nameVal}!`,
      `We have recorded your transaction notification for ${amtVal}. Our accounts team (accounts@udaarfoundation.org) will verify the UTR and email your 80G Tax Exemption Certificate.`,
      `Receipt Request Ref: UDF-80G-${Math.floor(100000 + Math.random() * 900000)}`
    );
    showToast("80G receipt request submitted!", "success");
  });

  // E. Footer Newsletter Subscription Form
  const newsletterForm = document.getElementById("newsletter-form");
  newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (!validateEmail(emailInput?.value)) {
      showToast("Please enter a valid email address to subscribe.", "error");
      emailInput?.focus();
      return;
    }
    const subEmail = emailInput.value.trim();
    newsletterForm.reset();
    showToast(`Subscribed ${subEmail} to our monthly impact digest!`, "success");
  });

  // 11. Toast Notification Helper
  let toastTimeout = null;
  function showToast(message, type = "success") {
    const toast = document.getElementById("global-toast");
    const toastText = document.getElementById("global-toast-text");
    const toastIconWrap = document.getElementById("global-toast-icon");

    if (!toast || !toastText) return;
    toastText.textContent = message;

    if (toastIconWrap) {
      if (type === "error") {
        toastIconWrap.className =
          "w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0";
        toastIconWrap.innerHTML = `<i data-lucide="alert-circle" class="w-4 h-4"></i>`;
      } else {
        toastIconWrap.className =
          "w-8 h-8 rounded-full bg-[#D8F3DC] text-[#1E5631] flex items-center justify-center shrink-0";
        toastIconWrap.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4"></i>`;
      }
      if (window.lucide) window.lucide.createIcons();
    }

    toast.classList.add("show");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3800);
  }

  window.showUdaarToast = showToast;
});
