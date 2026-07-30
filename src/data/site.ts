export const site = {
  name: "The O.P Institute",
  tagline: "Best Computer Institute In Najafgarh",
  phone: "+91 98110 00000",
  whatsapp: "919811000000",
  email: "info@theopinstitute.in",
  address: "Main Najafgarh Road, Near Metro Station, Najafgarh, New Delhi 110043",
  hours: "Mon – Sat: 8:00 AM – 8:00 PM",
  established: 2009,
};

export const nav = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Courses", to: "/courses" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact", to: "/contact" as const },
];

export const stats = [
  { value: "15+", label: "Years of Teaching" },
  { value: "12,000+", label: "Students Trained" },
  { value: "24", label: "Certified Courses" },
  { value: "96%", label: "Placement Support" },
];

export type Course = {
  slug: string;
  title: string;
  short: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  fee: string;
  category: "Basics" | "Programming" | "Design" | "Accounting" | "Career";
  outcomes: string[];
  syllabus: { module: string; topics: string[] }[];
};

export const courses: Course[] = [
  {
    slug: "basic-computer-course",
    title: "Basic Computer Course (BCC)",
    short:
      "Start from zero. Windows, typing, internet, email and everyday digital skills taught in Hindi and English.",
    duration: "3 Months",
    level: "Beginner",
    fee: "₹3,500",
    category: "Basics",
    outcomes: [
      "Operate Windows confidently",
      "Type 30+ WPM in Hindi & English",
      "Use email, UPI and government portals safely",
    ],
    syllabus: [
      {
        module: "Computer Fundamentals",
        topics: ["Hardware & software", "Windows 11 basics", "File management", "Printing & scanning"],
      },
      {
        module: "Internet & Communication",
        topics: ["Browsers & safe search", "Gmail & attachments", "Video calling", "Online forms"],
      },
      {
        module: "Typing & Practice",
        topics: ["Hindi Kruti Dev / Mangal", "English touch typing", "Speed tests"],
      },
    ],
  },
  {
    slug: "advanced-ms-office",
    title: "Advanced MS Office",
    short:
      "Word, Excel, PowerPoint and Outlook to a professional office standard, including formulas, pivot tables and dashboards.",
    duration: "4 Months",
    level: "Intermediate",
    fee: "₹5,500",
    category: "Basics",
    outcomes: [
      "Build Excel dashboards with pivot tables",
      "Automate reports with formulas & macros",
      "Design polished decks and documents",
    ],
    syllabus: [
      {
        module: "MS Word",
        topics: ["Styles & templates", "Mail merge", "Tables & references"],
      },
      {
        module: "MS Excel",
        topics: ["VLOOKUP / XLOOKUP", "Pivot tables & charts", "Conditional formatting", "Intro to macros"],
      },
      {
        module: "PowerPoint & Outlook",
        topics: ["Slide masters", "Animation & transitions", "Mailbox management"],
      },
    ],
  },
  {
    slug: "tally-prime-gst",
    title: "Tally Prime with GST",
    short:
      "Complete computerised accounting: ledgers, inventory, payroll, GST returns and real business case studies.",
    duration: "3 Months",
    level: "Intermediate",
    fee: "₹6,500",
    category: "Accounting",
    outcomes: [
      "Maintain full company books in Tally Prime",
      "File GSTR-1 and GSTR-3B confidently",
      "Handle payroll, TDS and inventory",
    ],
    syllabus: [
      {
        module: "Accounting Foundations",
        topics: ["Journal & ledger", "Trial balance", "Final accounts"],
      },
      {
        module: "Tally Prime",
        topics: ["Company setup", "Vouchers & inventory", "Banking & reconciliation"],
      },
      { module: "GST & Payroll", topics: ["GST masters", "GSTR filing", "Payroll & PF/ESI"] },
    ],
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    short:
      "From first `print()` to real projects — data structures, OOP, files, APIs and automation scripts.",
    duration: "5 Months",
    level: "Intermediate",
    fee: "₹9,000",
    category: "Programming",
    outcomes: [
      "Write clean, tested Python programs",
      "Automate Excel, files and web tasks",
      "Ship 3 portfolio projects",
    ],
    syllabus: [
      { module: "Core Python", topics: ["Syntax & types", "Control flow", "Functions", "Error handling"] },
      { module: "Data & OOP", topics: ["Lists, dicts, sets", "Classes & objects", "Modules & packages"] },
      { module: "Applied Python", topics: ["File & Excel automation", "REST APIs", "Capstone project"] },
    ],
  },
  {
    slug: "web-development",
    title: "Full Stack Web Development",
    short:
      "HTML, CSS, JavaScript, React and Node — build and deploy responsive, production-ready websites.",
    duration: "6 Months",
    level: "Advanced",
    fee: "₹15,000",
    category: "Programming",
    outcomes: [
      "Build responsive UIs with React & Tailwind",
      "Create REST APIs with Node and Express",
      "Deploy live projects with a custom domain",
    ],
    syllabus: [
      { module: "Frontend Foundations", topics: ["Semantic HTML", "CSS layout & Flex/Grid", "Responsive design"] },
      { module: "JavaScript & React", topics: ["ES6+", "DOM & events", "React components & hooks", "Routing"] },
      { module: "Backend & Deploy", topics: ["Node & Express", "Databases", "Auth", "Hosting & CI"] },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design & Video Editing",
    short:
      "Photoshop, Illustrator, CorelDRAW and Premiere Pro for print, social media and reels.",
    duration: "4 Months",
    level: "Beginner",
    fee: "₹8,000",
    category: "Design",
    outcomes: [
      "Design logos, posters and social creatives",
      "Edit reels and promotional videos",
      "Build a client-ready design portfolio",
    ],
    syllabus: [
      { module: "Photoshop & Illustrator", topics: ["Layers & masking", "Retouching", "Vector logos"] },
      { module: "CorelDRAW", topics: ["Print layouts", "Visiting cards & flex", "Colour management"] },
      { module: "Premiere Pro", topics: ["Timeline editing", "Transitions & titles", "Reels export"] },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short:
      "SEO, Google Ads, Meta Ads, content and analytics — with live campaigns on real budgets.",
    duration: "4 Months",
    level: "Intermediate",
    fee: "₹11,000",
    category: "Career",
    outcomes: [
      "Rank local businesses on Google",
      "Run profitable Meta & Google ad campaigns",
      "Read GA4 and report on ROI",
    ],
    syllabus: [
      { module: "Search", topics: ["Keyword research", "On-page & technical SEO", "Google Business Profile"] },
      { module: "Paid Ads", topics: ["Google Search & Display", "Meta Ads Manager", "Budgeting & bidding"] },
      { module: "Analytics", topics: ["GA4", "Reporting dashboards", "Conversion tracking"] },
    ],
  },
  {
    slug: "o-level-nielit",
    title: "NIELIT 'O' Level",
    short:
      "Government-recognised diploma covering IT tools, programming, web design and IoT with exam preparation.",
    duration: "12 Months",
    level: "Advanced",
    fee: "₹18,000",
    category: "Career",
    outcomes: [
      "Government-recognised O Level certificate",
      "Eligibility for government IT posts",
      "Full exam-oriented practice papers",
    ],
    syllabus: [
      { module: "M1 – IT Tools", topics: ["Office suite", "Internet & e-governance"] },
      { module: "M2 – Web Design", topics: ["HTML/CSS", "JavaScript basics"] },
      { module: "M3 – Programming", topics: ["Python", "Data structures"] },
      { module: "M4 – IoT & Practical", topics: ["IoT basics", "Project & viva"] },
    ],
  },
];

export const features = [
  {
    title: "Small Batches, Real Attention",
    body: "Maximum 12 students per batch so every learner gets one-on-one time on the machine.",
  },
  {
    title: "One Student, One Computer",
    body: "Modern lab with i5 systems, licensed software, inverter backup and high-speed fibre internet.",
  },
  {
    title: "Government-Valid Certificates",
    body: "ISO-certified institute with NIELIT O Level and recognised course certification.",
  },
  {
    title: "Placement & Interview Support",
    body: "Resume building, mock interviews and a hiring network of 120+ Delhi NCR employers.",
  },
  {
    title: "Flexible Morning & Evening Batches",
    body: "Timings built around school, college and job schedules — including Sunday doubt classes.",
  },
  {
    title: "Bilingual Teaching",
    body: "Every concept explained in Hindi and English so nothing is lost in translation.",
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    course: "Tally Prime with GST",
    quote:
      "I joined without any accounting background. Within four months I was handling GST filing for a Najafgarh trading firm. The practice files made all the difference.",
  },
  {
    name: "Rahul Yadav",
    course: "Full Stack Web Development",
    quote:
      "The project-first teaching style is what got me hired. I walked into my interview with three live websites and a GitHub profile.",
  },
  {
    name: "Sunita Devi",
    course: "Basic Computer Course",
    quote:
      "At 42 I thought computers were not for me. Sir taught in Hindi, patiently, again and again. Now I manage my shop billing myself.",
  },
  {
    name: "Aman Khatri",
    course: "Digital Marketing",
    quote:
      "We ran real ad campaigns with real budgets in class. That experience is why I now freelance for four local brands.",
  },
];

export const faqs = [
  {
    q: "Do I need to know anything about computers before joining?",
    a: "No. Our Basic Computer Course starts from switching on the machine. Every concept is taught in Hindi and English, at your pace.",
  },
  {
    q: "Are the certificates valid for government jobs?",
    a: "Yes. The O.P Institute is an ISO-certified centre and our NIELIT 'O' Level programme carries government recognition accepted for eligible IT posts.",
  },
  {
    q: "What are the batch timings?",
    a: "Batches run from 8:00 AM to 8:00 PM, Monday to Saturday, in one-hour slots. You choose the slot that fits your schedule and can change it with a week's notice.",
  },
  {
    q: "Can I pay the fee in instalments?",
    a: "Yes. All courses can be paid monthly. There is no registration charge and no hidden material fee.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "We provide resume preparation, mock interviews and referrals to our network of 120+ Delhi NCR employers. Placement support continues for six months after course completion.",
  },
  {
    q: "Is there a demo class?",
    a: "Yes, a free demo class is available for every course. Call or WhatsApp us to reserve a seat.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "which-computer-course-after-12th",
    title: "Which Computer Course Should You Do After 12th?",
    excerpt:
      "A practical comparison of O Level, Tally, web development and digital marketing — with honest salary expectations for Delhi NCR.",
    date: "2026-06-18",
    readTime: "7 min read",
    category: "Career Guidance",
    body: [
      "Every June our counselling desk fills with the same question: which course will actually get me a job? The honest answer depends on three things — how much time you have, whether you enjoy logic or design, and what the local job market is hiring for right now.",
      "If you want the fastest route to employment, Tally Prime with GST is still unbeaten in Najafgarh. Every trading firm, chemist and wholesaler needs someone who can pass an entry correctly. Three months of serious practice is enough to be useful on day one.",
      "If you enjoy building things and can commit six months, Full Stack Web Development pays substantially more over a five-year horizon. Starting salaries are lower than people expect, but the ceiling is far higher and freelance work begins during the course itself.",
      "For government aspirants, NIELIT 'O' Level remains the only certificate that appears by name in recruitment notifications. It takes a year, but it is the credential that unlocks eligibility.",
      "Whatever you choose, judge a course by the work you produce, not the certificate you receive. Ask any institute to show you student projects before you pay.",
    ],
  },
  {
    slug: "excel-shortcuts-that-save-hours",
    title: "12 Excel Shortcuts That Save Our Students Hours Every Week",
    excerpt:
      "The keyboard habits we drill into every Advanced MS Office batch, and why they matter more than knowing 200 formulas.",
    date: "2026-05-02",
    readTime: "5 min read",
    category: "Tutorials",
    body: [
      "Speed in Excel comes from your hands, not your memory. A student who knows twenty formulas but works entirely with the mouse will always be slower than one who knows ten and never leaves the keyboard.",
      "Start with Ctrl + Arrow to jump to the edge of a data range, and add Shift to select as you go. Combined with Ctrl + Shift + L for filters, this alone removes most scrolling from your day.",
      "Alt + = inserts a SUM over the range above. F4 repeats your last action and, while editing a formula, cycles absolute references. Ctrl + T converts a range into a structured table so formulas fill down automatically.",
      "For cleanup, Ctrl + E runs Flash Fill and will often split names or extract numbers without a single formula. Ctrl + ; stamps today's date as a static value — essential for audit-friendly sheets.",
      "We ask every batch to work mouse-free for one full class. It feels slow for twenty minutes and permanently faster after that.",
    ],
  },
  {
    slug: "gst-filing-mistakes",
    title: "Five GST Filing Mistakes We See in Every New Tally Batch",
    excerpt:
      "Wrong tax ledgers, mismatched invoice dates, ignored reverse charge — and how to catch each one before filing.",
    date: "2026-03-24",
    readTime: "6 min read",
    category: "Accounting",
    body: [
      "GST is not difficult, but it is unforgiving. Most notices we help students understand come from small, repeated errors rather than complex interpretation.",
      "The most common mistake is creating a single 'GST' ledger instead of separate CGST, SGST and IGST ledgers. Tally will happily accept it and your returns will never reconcile.",
      "Second: recording an interstate sale with intrastate tax. Always set the party's state correctly in the ledger master; Tally derives the tax type from it.",
      "Third: ignoring reverse charge entries on freight and legal services. These must be self-invoiced and shown separately in GSTR-3B.",
      "Fourth: filing GSTR-3B without first reconciling GSTR-2B. Input credit claimed that your supplier never filed becomes your liability.",
      "Fifth: back-dating invoices after a return is filed. Amend properly instead — it takes ten minutes and avoids a mismatch that follows you for years.",
    ],
  },
  {
    slug: "learning-computers-after-40",
    title: "Learning Computers After 40: A Guide for Late Starters",
    excerpt:
      "Why our most determined students are often our oldest, and the study method that works best for adult learners.",
    date: "2026-02-11",
    readTime: "4 min read",
    category: "Student Life",
    body: [
      "A third of our Basic Computer Course seats are taken by learners over forty — shopkeepers, homemakers, retired staff and small business owners. They arrive nervous and finish confident, almost without exception.",
      "The method that works is repetition on your own machine, not note-taking. We ask adult learners to repeat the previous day's task at home before starting anything new. Twenty minutes of repetition beats two hours of new material.",
      "We also teach in Hindi first and introduce English terminology second, so the concept lands before the vocabulary does.",
      "The fear of 'breaking something' is the real barrier. In week one we deliberately show students how to undo, restore and recover files, because confidence follows from knowing nothing is permanent.",
    ],
  },
];
