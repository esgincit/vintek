// All content migrated from the original vint3k.com website.

export const CONTACT = {
  phone: '+1 (908) 239-7305',
  altPhone: '+1 (214) 471-3412',
  email: 'info@vint3k.com',
  address: '291 S Preston rd, Suite 1040, Prosper, TX 75078',
  linkedin: 'https://www.linkedin.com/company/vintekllc',
}

export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Why Choose Us', to: '/why-choose-us' },
      { label: 'We Support', to: '/we-support' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Business Evolution Roadmap', to: '/services/business-evolution-roadmap' },
      { label: 'Staff Augmentation', to: '/services/staff-augmentation' },
      { label: 'Managed Services', to: '/services/managed-services' },
      { label: 'Value Added Services', to: '/services/value-added-services' },
      { label: 'Trainings', to: '/services/trainings' },
      { label: 'IT Staffing / Consulting', to: '/services/it-staffing-consulting' },
    ],
  },
  {
    label: 'Technologies',
    to: '/technologies',
    children: [
      { label: 'SAP', to: '/technologies/sap' },
      { label: 'Oracle', to: '/technologies/oracle' },
      { label: 'Microsoft', to: '/technologies/microsoft' },
      { label: 'Cloud', to: '/technologies/cloud' },
      { label: 'Big Data', to: '/technologies/big-data' },
      { label: 'BI Technologies', to: '/technologies/bi-technologies' },
      { label: 'UI Technologies', to: '/technologies/ui-technologies' },
      { label: 'RPA', to: '/technologies/rpa' },
    ],
  },
  { label: 'Clients', to: '/clients' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const SERVICES = [
  {
    slug: 'business-evolution-roadmap',
    title: 'Business Evolution Roadmap',
    tagline: 'Align technology with strategy',
    icon: 'map',
    color: 'cyan',
    body: `A business evolution roadmap is a plan that organizations use to align their technology implementations with their business goals, which help them mitigate risk, reduce costs, improve efficiencies and react fast in response to the changes in the market place. Business Technology Services help customers realize high business value by incorporating business strategy, business integration and managing IT risk, across the value chain of the organization. We provide implementation, production support and enhancement services in .NET and Java frameworks. Our solutions enable organizations to drive critical business outcomes leveraging information technology.`,
    points: ['Business & technology alignment', 'Risk mitigation and cost reduction', 'Improved operational efficiencies', 'Rapid response to market change'],
  },
  {
    slug: 'staff-augmentation',
    title: 'Staff Augmentation',
    tagline: 'Scale your team on demand',
    icon: 'users',
    color: 'violet',
    body: `Companies manage their growth by adding employees and contractors wherever needed to increase output. Our augmentation model plugs proven specialists directly into your organization, so you keep full control of delivery while extending your capacity in days — not months.`,
    points: [
      'Organization retains the ability to control all its resources in-house.',
      'It is a simple, quick and effective means for addressing support deficiencies.',
      'It offers added flexibility.',
    ],
  },
  {
    slug: 'managed-services',
    title: 'Managed Services',
    tagline: 'Run SAP, worry-free',
    icon: 'shield',
    color: 'fuchsia',
    body: `We help businesses uncover opportunities and manage risks in ways that help their management create more value every step of the way. We manage the overall cost incurred towards core business applications by incorporating variable IT costs for SAP application and operations, thereby protecting investment. Customers mitigate risk by relying on us for assured continuous operation of SAP while increasing the quality and agility of SAP services delivered to the business. Our managed services offer an alternative to in-house operational planning, implementation, staffing, training and on-going operations of SAP applications. Our extensive SAP experience and industry-specific knowledge bridges what resources the customer needs and what it can afford.`,
    points: ['Assured continuous SAP operations', 'Variable, protected IT cost model', 'Higher quality and agility of services', 'Industry-specific SAP expertise'],
  },
  {
    slug: 'value-added-services',
    title: 'Value Added Services',
    tagline: 'Knowledge that compounds',
    icon: 'gem',
    color: 'cyan',
    body: `Enterprises everywhere are beginning to see knowledge as the foundation upon which business grows. Along with our Application Maintenance Support services, we also initiate creating and sharing knowledge across the organization. Our knowledge base for application maintenance gains advantage of collective experience and reduces the time taken for maintenance activities.`,
    points: ['Structured knowledge management', 'Collective-experience advantage', 'Faster maintenance cycles', 'Shared learning across teams'],
  },
  {
    slug: 'trainings',
    title: 'Trainings',
    tagline: 'Build tomorrow\u2019s expertise',
    icon: 'graduation',
    color: 'violet',
    body: `Our strength lies in our employees and their extensive knowledge of various business software. We constantly strive to provide support, training sessions, knowledge sharing and career development sessions to build upon expertise levels.`,
    points: [
      'Web Applications',
      'Storage: SanDisk',
      'Data Warehousing',
      'Reporting: Hyperion, Informatica, OBIEE',
      'Data Analysis & Networking',
      'Business Analysis',
      'Testing',
    ],
  },
  {
    slug: 'it-staffing-consulting',
    title: 'IT Staffing / Consulting',
    tagline: 'The right people, the right plan',
    icon: 'briefcase',
    color: 'fuchsia',
    body: `IT Staffing: The key to success in today's complex IT environment is the ability to staff and manage projects efficiently and effectively. This takes strong skills and experience from people and teams that have succeeded in taking projects to completion regardless of the situation. IT Consulting: Our technology consultants uncover technology barriers to business growth and use their unique blend of business and technology experience to solve your unique challenges. Our proven methodologies, tools and best practices fast-track your digital business transformation. We offer full-service IT consulting, addressing not only the technology transformation but, equally as important, the impact of new technology on your organization — refining processes, workflows and management systems for a smooth transition.`,
    points: ['Efficient, effective project staffing', 'Technology barrier discovery', 'Proven methodologies & best practices', 'Smooth transformation transitions'],
  },
]

export const TECHNOLOGIES = [
  {
    slug: 'sap',
    name: 'SAP',
    body: `The business world is transforming at a fast pace. To sustain competitive advantage in this changing environment, it is imperative for companies to connect the entire enterprise together. We have extensive experience across SAP solutions and consulting, end-to-end implementations, upgrades, maintenance and support — helping customers implement, optimize and enhance value from their SAP investments.`,
    casePoints: ['Simplified technology landscapes', 'Integrated processes', 'Streamlined operations'],
  },
  {
    slug: 'oracle',
    name: 'Oracle',
    body: `In today's evolving business landscape, enterprises need to do more than just adapt; they need to predict change and respond proactively. This requires effective alignment of people, processes, data and technology in a way that enables enterprises to keep pace with existing demands while preparing for the future.`,
    casePoints: ["Oracle's E-Business Suite", 'PeopleSoft', 'JD Edwards'],
  },
  {
    slug: 'microsoft',
    name: 'Microsoft',
    body: `In order to remain competitive, enterprises today seek to gain more value from existing IT investments and adopt new applications to meet changing business needs. Our Microsoft platform-based solutions and service offerings provide the necessary infrastructure, products and tools to build and deploy innovative business solutions that help adopt newer technologies, enhance employee productivity and provide deeper insights into business performance — increasing ROI while minimizing TCO.`,
    casePoints: [
      'Lack of actionable insight into business processes',
      'Sub-optimal utilization of IT infrastructure',
    ],
  },
  {
    slug: 'cloud',
    name: 'Cloud Computing',
    body: `On-demand IT has reached a tipping point and organizations of all sizes and sectors are using cloud computing services to run and develop their businesses. But where does the cloud go next — and what are the interesting use cases that will help take cloud to the next level?`,
    casePoints: [
      'Overcoming legacy concerns to leave the internal data centre.',
      'Using on-demand IT for almost everything.',
    ],
  },
  {
    slug: 'big-data',
    name: 'Big Data',
    body: `While the topic of Big Data is broad and encompasses many trends and new technology developments, a very good overview exists of the top few emerging technologies that are helping users handle Big Data in a cost-effective manner. Big Data and cloud computing go hand-in-hand: cloud enables companies of all sizes to get more value from their data than ever before, with blazing-fast analytics at a fraction of previous costs — driving a virtuous circle of more data, more processing power, more insight.`,
    casePoints: ['Cost-effective data handling', 'Blazing-fast cloud analytics', 'A virtuous circle of data value'],
  },
  {
    slug: 'bi-technologies',
    name: 'BI Technologies',
    body: `Businesses today must be able to glean insight and understand the value from every purchase, tweet, and customer-care interaction. We can help you unlock this business value from mountains of data. Our cost-effective and comprehensive Business Intelligence (BI) and Analytics services provide a foundation for insight and analysis to help you make more insightful business decisions, take bold action, and execute quickly.`,
    casePoints: ['Insight from every interaction', 'Foundation for analysis', 'Bold, fast execution'],
  },
  {
    slug: 'ui-technologies',
    name: 'UI Technologies',
    body: `Modern cloud platforms are a growing collection of integrated cloud services which developers and IT professionals use to build, deploy and manage applications through a global network of datacenters. You get the freedom to build and deploy wherever you want, using the tools, applications and frameworks of your choice.`,
    casePoints: ['Integrated cloud services', 'Global datacenter reach', 'Freedom of tooling'],
  },
  {
    slug: 'rpa',
    name: 'RPA',
    body: `Robotic process automation (RPA) is the application of technology that allows employees in a company to configure computer software or a "robot" to capture and interpret existing applications for processing a transaction, manipulating data, triggering responses and communicating with other digital systems. Any company that uses labor at scale for general knowledge process work — where people perform high-volume, highly transactional process functions — will boost capabilities and save money and time with RPA software.`,
    casePoints: ['Automate high-volume processes', 'Interpret existing applications', 'Save money and time'],
  },
]

// Shared delivery process shown on every technology detail page.
export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discover Idea',
    text: 'Nothing illustrates the race to the top more categorically than the search engine industry. We have worked hard to remain at the forefront for more than eleven years now — we discuss the scope of the challenge and consult on the most suitable approach.',
    bullets: ['Perform extensive market and industry research', 'Define scope and consult on approach', 'Map opportunity to business goals', 'Translate vision into a delivery plan'],
  },
  {
    num: '02',
    title: 'Planning & Wireframing',
    text: 'Structured planning converts discovery into an actionable blueprint. We sequence work, estimate effort, and wireframe the experience so every stakeholder knows exactly what ships and when.',
    bullets: ['Detailed solution blueprint', 'Milestones, effort and cost modelling', 'Wireframes and experience maps', 'Risk register and mitigation plan'],
  },
  {
    num: '03',
    title: 'Designing',
    text: 'Design is where strategy becomes tangible. We craft interfaces and architectures that are beautiful to users and sound under the hood — scalable, secure and maintainable.',
    bullets: ['Experience and interface design', 'Architecture and integration design', 'Security and scalability review', 'Stakeholder design validation'],
  },
  {
    num: '04',
    title: 'Development',
    text: 'Engineering teams build in iterative sprints with continuous integration, automated testing and transparent progress reporting — no black boxes, no surprises.',
    bullets: ['Sprint-based iterative delivery', 'Continuous integration & testing', 'Transparent progress reporting', 'Quality gates at every stage'],
  },
  {
    num: '05',
    title: 'User Test & Launch',
    text: 'We validate with real users, harden the release, and launch with a support plan behind it — then measure outcomes against the goals we set in discovery.',
    bullets: ['User acceptance testing', 'Performance & security hardening', 'Zero-downtime launch plan', 'Post-launch outcome measurement'],
  },
]

export const WHY_CHOOSE = {
  headline: 'What is so unique about our services?',
  items: [
    'Post-implementation support',
    'Guaranteed service levels',
    'Expertise at various levels of service',
    'Transition of key personnel to priority initiatives',
    'Technical aspects of implementation',
    'New custom development support',
    'Business enhancements',
  ],
  slaIntro: 'Each of these activities can be governed and monitored by an SLA framework.',
  slaItems: ['Request management', 'Management of incidents', 'Processing of requests', 'Work-around', 'Resolution', 'Root cause analysis'],
}

export const WE_SUPPORT = {
  challenges: [
    'Adapt to the changing market conditions',
    'Innovate continuously',
    'Align IT with business goals',
    'Accelerate time-to-market for new products and services',
    'Meet industry standards and compliance requirements',
    'Leverage emerging technologies effectively',
    'Build and manage complex customer information',
  ],
  approach: `We partner with you to understand and address your unique transformation initiative. We work in transparent consultation with you to devise a best-in-class solution and define the best course of action to implement it across your organization. Our integrated consulting and IT services bring continuity and consistency to your strategic programs. Achieving instrumental improvements through technology is no longer enough: companies must find ways to make quantum leaps in business performance.`,
}

export const CLIENTS = [
  { name: 'Polypipe', desc: 'One of the largest polyethylene producers in North America, offering products through distribution networks and direct sales throughout the United States and Canada — the long-term, cost-effective answer for medium and high-density polyethylene piping system solutions.' },
  { name: 'Sempra Energy', desc: 'A Fortune 500 energy services company based in San Diego, California. With more than 17,500 employees, Sempra Energy companies develop energy infrastructure, operate utilities, and provide related products and services to more than 31 million customers worldwide.' },
  { name: 'Boler Consulting', desc: "Asia's leading Transition Consulting Company focusing on SAP upgrade and platform migration, with operations across Asia including Singapore, Malaysia, India, Indonesia, Thailand and the Philippines." },
  { name: 'Copart', desc: 'Headquartered in Dallas, Texas, a provider of online vehicle auction and remarketing services in the U.S., Canada, the U.K., Germany, Brazil, Spain, India and the UAE — using patented virtual auction technology to process and sell salvage and clean title vehicles online.' },
  { name: 'Cognizant', desc: 'An American multinational corporation providing digital, technology, consulting, and operations services. Headquartered in Teaneck, New Jersey, and listed in the NASDAQ-100 and the S&P 500 indices.' },
  { name: 'Wipro', desc: 'An Indian IT services corporation headquartered in Bangalore, India. In 2013, Wipro demerged its non-IT businesses into separate companies to bring more focus to independent businesses.' },
  { name: 'Coty Inc.', desc: 'A North American beauty products manufacturer based in New York, founded in Paris, France by François Coty in 1904. Main products are fragrances, colour cosmetics, and skin and body care products.' },
  { name: 'Bramasol', desc: 'The Revenue Recognition leader and a recognized SAP Revenue Recognition services partner. SAP-certified experts assisted in the majority of SAP Revenue Accounting and Reporting Ramp-Up projects, driving successful workshops, proofs of concept, and implementations throughout the U.S.' },
  { name: 'Applied Materials', desc: 'The leader in materials engineering solutions used to produce virtually every new chip and advanced display in the world — modifying materials at atomic levels and on an industrial scale.' },
  { name: 'Kiewit Corporation', desc: 'An employee-owned Fortune 500 contractor based in Omaha, Nebraska. Privately held, it is one of the largest contractors in the world.' },
  { name: 'CenturyLink', desc: 'An American telecommunications company headquartered in Monroe, Louisiana, providing communications and data services to residential, business, governmental, and wholesale customers in 37 states.' },
  { name: 'McKesson', desc: 'An American company distributing pharmaceuticals at a retail-sale level and providing health information technology, medical supplies, and care management tools.' },
  { name: 'Alliance One', desc: 'An agricultural company delivering value-added products and services — a trusted provider of responsibly sourced, independently verified, sustainable and traceable products and ingredients.' },
  { name: 'BorgWarner', desc: 'An American worldwide automotive industry components and parts supplier, known for powertrain products including transmissions, control components, turbochargers, and four-wheel-drive system components.' },
  { name: 'Cardinal Health', desc: 'Headquartered in Dublin, Ohio — a global, integrated healthcare services and products company providing customized solutions for hospitals, health systems, pharmacies, ambulatory surgery centers, clinical laboratories and physician offices worldwide.' },
  { name: 'MBSi Corp.', desc: 'Headquartered in Phoenix, AZ — the foremost provider of software solutions for the auto repossession industry, connecting auto lenders, vendors and third parties with best-in-class technology, security and analytics.' },
  { name: 'HCL Technologies', desc: 'A next-generation global technology company helping enterprises reimagine their businesses for the digital age — with 137,000+ Ideapreneurs in 44 countries serving 250 of the Fortune 500 and 650 of the Global 2000.' },
  { name: 'LORD Corporation', desc: 'A diversified technology and manufacturing company developing adhesives, coatings, motion management devices and sensing technologies. With ~3,100 employees in 26 countries, 19 manufacturing facilities and 10 R&D centers worldwide.' },
]

export const JOBS = [
  { id: 7, title: 'Full Stack Developer', location: 'Frisco, Texas, 75035', type: 'Full-time', skills: ['React', 'Node.js', 'Cloud'] },
  { id: 8, title: 'Software Developer', location: 'Frisco, Texas, 75035', type: 'Full-time', skills: ['Java', '.NET', 'SQL'] },
  { id: 9, title: 'Senior Oracle Fusion Financials Consultant', location: 'Frisco, Texas, 75035', type: 'Contract', skills: ['Oracle Fusion', 'GL', 'AP/AR'] },
  { id: 10, title: 'Data Engineer', location: 'Frisco, Texas, 75035', type: 'Full-time', skills: ['Python', 'ETL', 'Big Data'] },
  { id: 11, title: 'Software Developer', location: '291 S Preston rd., Suite 1040, Prosper, TX 75078', type: 'Full-time', skills: ['C#', 'Azure', 'APIs'] },
  { id: 12, title: 'Software Developer', location: '291 S Preston rd., Suite 1040, Prosper, TX 75078', type: 'Full-time', skills: ['JavaScript', 'React', 'REST'] },
  { id: 13, title: 'Software Engineer', location: '291 S Preston rd, Suite 1040, Prosper, TX 75078', type: 'Full-time', skills: ['SAP', 'ABAP', 'Integration'] },
  { id: 14, title: 'Data Engineer', location: '291 S Preston rd, Suite 1040, Prosper, TX 75078', type: 'Full-time', skills: ['SQL', 'Databricks', 'Pipelines'] },
]

export const NEWS = [
  { title: 'High cost of sustaining legacy applications and technologies', date: 'Posted on 12 June 2019', tag: 'Legacy' },
  { title: 'Lack of actionable insight into business processes', date: 'Posted on 12 June 2019', tag: 'Insight' },
  { title: 'Sub-optimal utilization of IT infrastructure', date: 'Posted on 12 June 2019', tag: 'Infrastructure' },
]

export const CASE_STUDIES = [
  { title: 'SAP', to: '/technologies/sap', points: ['Simplified technology landscapes', 'Integrated processes', 'Streamlined operations'], hue: 'from-cyan-500 to-blue-600', glyph: 'SAP' },
  { title: 'Oracle', to: '/technologies/oracle', points: ["Oracle's E-Business Suite", 'PeopleSoft', 'JD Edwards'], hue: 'from-rose-500 to-red-600', glyph: 'ORA' },
  { title: 'Microsoft', to: '/technologies/microsoft', points: ['Actionable insight into business processes', 'Optimal utilization of IT infrastructure'], hue: 'from-sky-500 to-indigo-600', glyph: 'MS' },
  { title: 'Cloud Computing', to: '/technologies/cloud', points: ['Leave the internal data centre behind', 'On-demand IT for almost everything'], hue: 'from-blue-400 to-cyan-600', glyph: 'CLD' },
  { title: 'Planning & Marketing Strategy for MOC Business', to: '/contact', points: ['200% Increased Total Site Traffic', '340% Organic Search Traffic', '80% Referral Traffic'], hue: 'from-violet-500 to-purple-600', glyph: 'MOC' },
  { title: 'Branding & Identity for COL Business', to: '/contact', points: ['200% Increased Total Site Traffic', '340% Organic Search Traffic', '80% Referral Traffic'], hue: 'from-fuchsia-500 to-pink-600', glyph: 'COL' },
  { title: 'Ecommerce Sale Increase from Startup Shop', to: '/contact', points: ['200% Increased Total Site Traffic', '340% Organic Search Traffic', '80% Referral Traffic'], hue: 'from-amber-500 to-orange-600', glyph: 'ECM' },
  { title: 'Web Development for Creative Brand', to: '/contact', points: ['200% Increased Total Site Traffic', '340% Organic Search Traffic', '80% Referral Traffic'], hue: 'from-emerald-500 to-teal-600', glyph: 'WEB' },
]

export const LEGAL = {
  disclaimer: `The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, VINTEK makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. Through this website you may be able to link to other websites; we have no control over their nature, content and availability.`,
  companyTerms: `These Company Terms govern your access to and use of the VINTEK website and the consulting, staffing and managed services described herein. By using this website you agree to these terms. All engagements are governed by individually executed agreements. Services, deliverables and timelines described publicly are indicative and may vary per engagement. VINTEK, its officers and employees shall not be liable for any indirect or consequential loss arising from use of this website. These terms are governed by the laws of the State of Texas, United States.`,
  privacyPolicy: `VINTEK respects your privacy. We collect only the information you voluntarily provide through our contact and application forms — such as your name, email address, and message — solely to respond to your inquiry or process a job application. We do not sell or share your personal information with third parties. Standard, privacy-respecting analytics may be used to improve the site. You may request access to, correction of, or deletion of your personal data at any time by contacting info@vint3k.com.`,
}
