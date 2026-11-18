/**
 * ============================================================================
 * UDAAR FOUNDATION - CENTRAL CONFIGURATION & CONTENT DATA (js/config.js)
 * Domain: udaarfoundation.org
 * ============================================================================
 * Instructions for Maintainers:
 * You can replace image paths, UPI IDs, and Bank Transfer details directly in
 * index.html (look for <!-- [REPLACE_...] --> comments) OR update them below.
 */

window.UDAAR_CONFIG = {
  organization: {
    name: "Udaar Foundation",
    domain: "udaarfoundation.org",
    tagline: "Nurturing Potential, Inspiring Hope, Transforming Lives.",
    addressShort: "Village Sorkha, Sector 115, Noida, UP",
    addressFull: "Udaar Foundation, Opposite Unitech Homes, Village Sorkha, Sector 115, Noida, UP - 201301",
    phonePrimary: "+91-8882110806",
    phoneDisplay: "+91 88821 10806",
    phoneAlternative: "+91 [ALTERNATIVE_PHONE]",
    emailContact: "contact@udaarfoundation.org",
    emailInfo: "info@udaarfoundation.org",
    emailGmail: "udaarfoundation@gmail.com",
    emailCSR: "csr@udaarfoundation.org",
    emailAccounts: "udaarfoundation@gmail.com",
    workingHours: "Mon – Sat: 9:00 AM – 6:00 PM",
    taxStatus: "Donations eligible under Section 80G & 12A Certified"
  },

  donation: {
    upiId: "udaarfoundation@upi", // [REPLACE_UPI_ID]
    upiPayeeName: "Udaar Foundation",
    qrCodePlaceholderTag: "[IMG_UPI_QR_CODE]",
    bankDetails: {
      accountName: "Udaar Foundation",
      accountNumber: "50200023379155",
      bankName: "Bandhan Bank",
      ifscCode: "BDBL0001983",
      branchName: "Bandhan Bank Plot No.18, B-1/A, Sector 51, Noida, Uttar Pradesh 201303",
      accountType: "Current Account"
    },
    presets: [
      {
        amount: 500,
        label: "₹500 - School Supplies",
        title: "School Supplies & Stationery Kit",
        impactText: "Provides 1 underprivileged child with notebooks, geometry box, pens, pencils, and art supplies for an entire term.",
        badge: "Most Popular Starter"
      },
      {
        amount: 1200,
        label: "₹1,200 - 1 Month Child Education",
        title: "1 Month Holistic Child Education",
        impactText: "Sponsors 1 full month of daily remedial tutoring, digital literacy classes, homework mentoring, and nutritional snacks for a student.",
        badge: "High Impact"
      },
      {
        amount: 3500,
        label: "₹3,500 - Health & Nutrition Sponsor",
        title: "Health Camp & Nutrition Sponsor",
        impactText: "Supports preventive health checkups, dental/eye screening, hygiene kits, and 30+ nutritious meals for children in Sector 115.",
        badge: "Community Care"
      },
      {
        amount: "custom",
        label: "Custom Amount",
        title: "Custom Impact Contribution",
        impactText: "Every rupee goes directly toward classroom learning centers, school bag drives, healthcare camps, and women's vocational skilling.",
        badge: "Flexible"
      }
    ]
  },

  programs: {
    literacy: {
      id: "literacy",
      title: "Slum Literacy & Remedial Learning",
      category: "Core Education",
      placeholderTag: "[IMG_PROGRAM_LITERACY]",
      summary: "Dedicated learning centers, school enrollment drives, homework clubs, and daily mentoring.",
      metrics: "350+ First-Generation Learners • 6 Days/Week Classes • 92% Formal School Retention",
      highlights: [
        "Bridge & Remedial Courses to bring out-of-school children up to age-appropriate grade levels in Hindi, English, Mathematics, and Science.",
        "Annual 'Chalo School' Enrollment Drives facilitating admission of slum children into nearby government and recognized schools in Noida.",
        "Daily afternoon Homework Clubs & Mentoring Circles in Village Sorkha (Sector 115) led by trained educators and community volunteers.",
        "Foundational values, communication confidence, and creative expression sessions every Saturday."
      ],
      beneficiaries: "Children aged 5–16 years from migrant labor and daily-wage families across Noida & Delhi-NCR."
    },
    kits: {
      id: "kits",
      title: "\"Equipping Dreams\" School Bag & Kit Drives",
      category: "Student Welfare",
      placeholderTag: "[IMG_PROGRAM_SCHOOL_KITS]",
      summary: "Distributing sturdy bags, stationery sets, books, and uniforms to keep children motivated.",
      metrics: "1,500+ School Kits Distributed • Weather-Resistant Bags • Complete Academic Year Supplies",
      highlights: [
        "Distribution of ergonomic, weather-proof school bags that restore pride and dignity to children attending learning centers and formal schools.",
        "Comprehensive stationery kits containing ruled/unruled notebooks, pens, pencils, erasers, geometry boxes, crayons, and water bottles.",
        "Seasonal uniform, footwear, and winter sweater distribution drives so harsh weather or lack of attire never interrupts attendance.",
        "Storybook & library corners setup within slum pockets to cultivate reading habits."
      ],
      beneficiaries: "Underprivileged primary and middle-school students across urban villages and construction settlements."
    },
    health: {
      id: "health",
      title: "Healthcare & Nutrition Camps",
      category: "Health & Nutrition",
      placeholderTag: "[IMG_PROGRAM_HEALTH_CAMP]",
      summary: "Regular health checkups, dental/eye screenings, and adolescent hygiene/menstrual awareness workshops.",
      metrics: "10,000+ Nutrition Meals & Supplements • Monthly Medical Camps • 800+ Girls Reached",
      highlights: [
        "Periodic pediatric checkups, growth & BMI tracking, deworming drives, and micronutrient supplementation to combat childhood malnutrition.",
        "Free dental hygiene and vision screening camps in collaboration with local doctors and partner healthcare institutions.",
        "Adolescent girls' health & menstrual hygiene management (MHM) workshops with free biodegradable sanitary pad distribution.",
        "Community sanitation, safe drinking water, and preventive seasonal illness (dengue/malaria/winter care) awareness sessions."
      ],
      beneficiaries: "Children, pregnant/lactating mothers, and elderly residents in underserved Noida clusters."
    },
    skilling: {
      id: "skilling",
      title: "Youth Skilling & Women Empowerment",
      category: "Livelihood & Dignity",
      placeholderTag: "[IMG_PROGRAM_WOMEN_YOUTH]",
      summary: "Vocational workshops, digital literacy, and entrepreneurship guidance for mothers and youth.",
      metrics: "180+ Women & Youth Trained • Computer & Spoken English • Financial Literacy & SHGs",
      highlights: [
        "Vocational tailoring, stitching, handicrafts, and eco-friendly bag-making workshops enabling mothers to earn sustainable income from home.",
        "Basic computer applications, internet safety, MS Office, and spoken English courses for underprivileged youth aged 16–24.",
        "Financial literacy, bank account linkage, government welfare scheme facilitation, and micro-entrepreneurship mentoring.",
        "Career counseling, resume building, and interview preparation for first-job seekers."
      ],
      beneficiaries: "Adolescent girls, unemployed youth, and women from low-income households in Sector 115 & surrounding areas."
    }
  },

  gallery: [
    {
      id: 1,
      tag: "[IMG_GALLERY_CLASSROOM]",
      caption: "Interactive weekend reading circles in Sector 115",
      category: "Education",
      location: "Village Sorkha Learning Center, Sector 115, Noida",
      date: "Weekend Mentoring Session",
      description: "Children engaged in interactive bilingual storytelling and phonics reading circles led by Udaar Foundation volunteers."
    },
    {
      id: 2,
      tag: "[IMG_GALLERY_KIT_DISTRIBUTION]",
      caption: "Equipping 200+ students with school bags and study kits",
      category: "Kit Drives",
      location: "Sector 115 Community Ground, Noida",
      date: "Equipping Dreams Drive",
      description: "Distribution of sturdy backpacks, notebooks, geometry boxes, and water bottles to motivate young learners for the new school term."
    },
    {
      id: 3,
      tag: "[IMG_GALLERY_HEALTH_CAMP]",
      caption: "Preventive health and dental screening camp",
      category: "Healthcare",
      location: "Udaar Community Center, Sector 115",
      date: "Monthly Health Outreach",
      description: "Volunteer physicians and dentists conducting comprehensive pediatric checkups, eye screenings, and nutrition consultations."
    },
    {
      id: 4,
      tag: "[IMG_GALLERY_SPORTS_DAY]",
      caption: "Annual sports day and leadership games",
      category: "Holistic Growth",
      location: "Noida Community Playfield",
      date: "Annual Sports Meet",
      description: "Fostering teamwork, physical fitness, and leadership spirit through relay races, football, and outdoor team-building games."
    },
    {
      id: 5,
      tag: "[IMG_GALLERY_WOMEN_WORKSHOP]",
      caption: "Skill training & menstrual health awareness",
      category: "Empowerment",
      location: "Women's Resource Hub, Sorkha",
      date: "Livelihood & Wellness Workshop",
      description: "Vocational tailoring demonstration paired with a safe, interactive workshop on women's health, nutrition, and menstrual dignity."
    },
    {
      id: 6,
      tag: "[IMG_GALLERY_COMMUNITY_DRIVE]",
      caption: "Winter clothing and ration distribution",
      category: "Community Relief",
      location: "Delhi-NCR Slum Clusters",
      date: "Seasonal Relief Drive",
      description: "Providing warm blankets, winter sweaters for children, and essential dry ration kits to daily-wage families."
    }
  ],

  legalDocs: {
    privacy: {
      title: "Privacy Policy",
      updated: "Effective Year: 2026",
      content: `
        <p class="mb-3"><strong>Udaar Foundation</strong> ("we", "our", "us") respects the privacy of every donor, volunteer, corporate partner, and visitor to <strong>udaarfoundation.org</strong>.</p>
        <h4 class="font-semibold text-[#1E5631] mt-4 mb-1">1. Information We Collect</h4>
        <p class="mb-3">We collect personal details voluntarily submitted by you via our volunteer forms, contact inquiries, newsletter sign-ups, or donation notifications—including Name, Email Address, Phone Number, Postal Address, and PAN Number (mandatory under Income Tax regulations for issuing 80G tax-exemption certificates).</p>
        <h4 class="font-semibold text-[#1E5631] mt-4 mb-1">2. How We Use Your Data</h4>
        <p class="mb-3">Your information is strictly used to process donations, issue statutory Form 10BE / 80G tax receipts, coordinate volunteer schedules, and share periodic impact updates. We <strong>never</strong> sell, rent, or trade donor or volunteer lists with any third party.</p>
        <h4 class="font-semibold text-[#1E5631] mt-4 mb-1">3. Data Security & Contact</h4>
        <p>All financial transfers happen directly through secured banking channels (UPI / NEFT / RTGS / IMPS). For privacy requests or data removal, contact <a href="mailto:contact@udaarfoundation.org" class="text-[#1E5631] underline">contact@udaarfoundation.org</a>.</p>
      `
    },
    terms: {
      title: "Terms of Use",
      updated: "Effective Year: 2026",
      content: `
        <p class="mb-3">Welcome to the official web portal of <strong>Udaar Foundation</strong> (<strong>udaarfoundation.org</strong>). By accessing or using this website, you agree to comply with the following terms:</p>
        <h4 class="font-semibold text-[#1E5631] mt-4 mb-1">1. Purpose of Content</h4>
        <p class="mb-3">All content, photographs, impact metrics, and program descriptions on this website are published for public awareness, transparency, and charitable engagement.</p>
        <h4 class="font-semibold text-[#1E5631] mt-4 mb-1">2. Intellectual Property & Child Safeguarding</h4>
        <p class="mb-3">The Udaar Foundation name, emblem, and original field media are protected. In accordance with our Child Safeguarding Policy, images of children may not be downloaded, reproduced, or repurposed without written authorization.</p>
        <h4 class="font-semibold text-[#1E5631] mt-4 mb-1">3. Lawful Use</h4>
        <p>Users agree to provide truthful information when applying as volunteers or submitting CSR/donor inquiries. All disputes are subject to the jurisdiction of courts in Gautam Buddha Nagar (Noida), Uttar Pradesh.</p>
      `
    },
    refund: {
      title: "Donation & Refund Policy",
      updated: "Effective Year: 2026",
      content: `
        <p class="mb-3"><strong>Udaar Foundation</strong> follows a transparent and donor-friendly policy for all charitable contributions made via UPI or Bank Transfer (NEFT/RTGS/IMPS).</p>
        <h4 class="font-semibold text-[#1E5631] mt-4 mb-1">1. Allocation of Donations</h4>
        <p class="mb-3">Contributions are deployed directly toward our grassroots programs in slum education, school kit distribution, healthcare camps, and women/youth skilling. Once an 80G tax-exemption certificate has been generated and filed against a contribution, it cannot be refunded under Income Tax rules.</p>
        <h4 class="font-semibold text-[#1E5631] mt-4 mb-1">2. Erroneous or Duplicate Transactions</h4>
        <p class="mb-3">If you have accidentally made a duplicate transaction or entered an incorrect amount, please write to <a href="mailto:accounts@udaarfoundation.org" class="text-[#1E5631] underline">accounts@udaarfoundation.org</a> within <strong>7 working days</strong> along with your UTR/transaction reference and proof of debit.</p>
        <h4 class="font-semibold text-[#1E5631] mt-4 mb-1">3. Refund Processing</h4>
        <p>Verified erroneous transfers are refunded to the original source bank account within 7–10 business days.</p>
      `
    },
    certificates: {
      title: "80G & 12A Tax Exemption & Compliance Details",
      updated: "Statutory Governance Disclosures",
      content: `
        <div class="bg-[#F0FDF4] border border-[#74C69D] rounded-xl p-4 mb-4">
          <p class="text-sm font-semibold text-[#1E5631]">100% Statutory Compliance & Transparency</p>
          <p class="text-xs text-gray-700 mt-1">All donations to Udaar Foundation are eligible for 50% tax deduction under Section 80G of the Income Tax Act, 1961.</p>
        </div>
        <ul class="space-y-2.5 text-sm text-gray-700">
          <li><strong>Registered Entity Name:</strong> Udaar Foundation</li>
          <li><strong>Registered Office:</strong> Opposite Unitech Homes, Village Sorkha, Sector 115, Noida, UP - 201301</li>
          <li><strong>12A Registration Status:</strong> Certified under Section 12A of the Income Tax Act</li>
          <li><strong>80G Approval Status:</strong> Certified under Section 80G (Form 10AC / 10BE Issued to Donors)</li>
          <li><strong>CSR Eligibility:</strong> Eligible for Corporate Social Responsibility partnerships under Schedule VII of the Companies Act, 2013</li>
        </ul>
        <p class="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-200">To request certified copies of our 80G, 12A, PAN, or CSR-1 documents for institutional due diligence, please email <a href="mailto:csr@udaarfoundation.org" class="text-[#1E5631] font-medium underline">csr@udaarfoundation.org</a> or <a href="mailto:accounts@udaarfoundation.org" class="text-[#1E5631] font-medium underline">accounts@udaarfoundation.org</a>.</p>
      `
    }
  }
};
