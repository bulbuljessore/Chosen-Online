/* CHOSEN site content: single source the Zola helper reads. In production, generate this from the jobs/FAQ database so it updates automatically. */
window.CHOSEN_DATA = {
  jobs: [
    { title: 'Junior Data Analyst', co: 'DHL Supply Chain', loc: 'Sandton, GP', type: 'Full-time', mode: 'Hybrid', pay: 'R 28 000 – R 35 000 pm', ini: 'DH' },
    { title: 'Senior Accountant', co: 'Standard Bank', loc: 'Johannesburg, GP', type: 'Full-time', mode: 'On-site', pay: 'R 48 000 pm', ini: 'SB' },
    { title: 'Sales Representative', co: 'Toyota SA', loc: 'Pretoria, GP', type: 'Full-time', mode: 'On-site', pay: 'R 18 000 + commission', ini: 'TY' },
    { title: 'UX Designer', co: 'Takealot', loc: 'Remote, SA', type: 'Contract', mode: 'Remote', pay: 'R 52 000 pm', ini: 'TA' },
    { title: 'Graduate Trainee, Finance', co: 'Standard Bank', loc: 'Johannesburg, GP', type: 'Graduate', mode: 'On-site', pay: 'R 15 000 pm', ini: 'SB' },
    { title: 'Warehouse Supervisor', co: 'Shoprite', loc: 'Midrand, GP', type: 'Full-time', mode: 'On-site', pay: 'R 21 000 pm', ini: 'SR' },
    { title: 'Receptionist', co: 'Mediclinic', loc: 'Centurion, GP', type: 'Part-time', mode: 'On-site', pay: 'R 9 000 pm', ini: 'MC' },
    { title: 'DevOps Engineer', co: 'Takealot', loc: 'Johannesburg, GP', type: 'Full-time', mode: 'Hybrid', pay: 'R 65 000 pm', ini: 'TA' },
    { title: 'Registered Nurse, ICU', co: 'Mediclinic', loc: 'Durban, KZN', type: 'Full-time', mode: 'On-site', pay: 'R 42 000 pm', ini: 'MC' },
    { title: 'Frontend Developer', co: 'Takealot', loc: 'Cape Town, WC', type: 'Full-time', mode: 'Remote', pay: 'R 55 000 – R 70 000 pm', ini: 'TA' },
    { title: 'Maintenance Engineer', co: 'Checkers', loc: 'Polokwane, LP', type: 'Full-time', mode: 'On-site', pay: 'R 60 000 pm', ini: 'CH' },
    { title: 'Call Centre Agent', co: 'Vodacom', loc: 'Gqeberha, EC', type: 'Full-time', mode: 'On-site', pay: 'R 9 500 pm', ini: 'VC' },
    { title: 'Bookkeeper', co: 'PwC South Africa', loc: 'Bloemfontein, FS', type: 'Full-time', mode: 'On-site', pay: 'R 22 000 pm', ini: 'PW' },
    { title: 'Customer Success Lead', co: 'Takealot', loc: 'Remote, SA', type: 'Full-time', mode: 'Remote', pay: 'R 38 000 pm', ini: 'TA' },
    { title: 'Chef de Partie', co: 'Tsogo Sun', loc: 'Cape Town, WC', type: 'Full-time', mode: 'On-site', pay: 'R 16 500 pm', ini: 'TS' },
    { title: 'Foundation Phase Teacher', co: 'Sunridge Primary', loc: 'Mbombela, MP', type: 'Contract', mode: 'On-site', pay: 'R 24 000 pm', ini: 'SP' },
    { title: 'Payroll Administrator', co: 'Shoprite', loc: 'Remote, SA', type: 'Contract', mode: 'Remote', pay: 'R 21 000 pm', ini: 'SR' },
    { title: 'IT Support Technician', co: 'Kimberley Tech', loc: 'Kimberley, NC', type: 'Full-time', mode: 'On-site', pay: 'R 19 000 pm', ini: 'KT' }
  ],
  companies: [
    { name: 'DHL Supply Chain', key: ['dhl'], ind: 'Logistics', city: 'Johannesburg' },
    { name: 'Standard Bank', key: ['standard bank'], ind: 'Banking', city: 'Johannesburg' },
    { name: 'Toyota SA', key: ['toyota'], ind: 'Automotive', city: 'Durban' },
    { name: 'Takealot', key: ['takealot'], ind: 'E-commerce', city: 'Cape Town' },
    { name: 'Shoprite', key: ['shoprite'], ind: 'Retail', city: 'Cape Town' },
    { name: 'Mediclinic', key: ['mediclinic'], ind: 'Healthcare', city: 'Stellenbosch' },
    { name: 'PwC South Africa', key: ['pwc'], ind: 'Professional services', city: 'Johannesburg' },
    { name: 'Tsogo Sun', key: ['tsogo'], ind: 'Hospitality', city: 'Johannesburg' },
    { name: 'Vodacom', key: ['vodacom'], ind: 'Telecoms', city: 'Midrand' },
    { name: 'Checkers', key: ['checkers'], ind: 'Retail', city: 'Cape Town' }
  ],
  pricing: [
    { name: 'Starter', price: 'Free for 30 days', detail: '1 active job, applicant tracking' },
    { name: 'Growth', price: 'R 1 450 per listing (or R 11 900 a year)', detail: 'up to 10 jobs, featured on the homepage, company page' },
    { name: 'Recruiter', price: 'R 3 900 a month (or R 34 900 a year)', detail: 'unlimited jobs, CV database search, invite candidates' }
  ],
  contact: { email: 'hello@chosen.co.za', phone: '+27 10 000 0000', hours: 'Mon–Fri, 08:00–17:00', offices: 'Sandton and Woodstock, Cape Town' },
  faq: [
    ['Is CHOSEN free for job seekers?', 'Yes. Creating a profile, uploading your CV, setting job alerts and applying are all free.'],
    ['How do I upload my CV?', 'Go to your profile and choose “Upload CV”. PDF or Word, up to 5 MB. You can keep up to three versions.'],
    ['Why do all jobs show a salary?', 'Employers must add a salary or range before a listing goes live, so you only apply for jobs that fit.'],
    ['How do I know if an employer has seen my application?', 'Each application has a status in your dashboard: Applied, Viewed, Shortlisted, Interview or Not selected. You get an email when it changes.'],
    ['Can I apply from my phone?', 'Yes. The site works on any phone, and the Android and iOS apps let you apply with one tap.'],
    ['How much does it cost to post a job?', 'Your first listing is free for 30 days. After that, plans start at R 1 450 per listing.'],
    ['How do you verify employers?', 'We check CIPC registration and confirm a business phone number and email. It usually takes under one working day.'],
    ['Can I see candidates before they apply?', 'With a Recruiter plan you can search the CV database and invite candidates to apply.'],
    ['How do I delete my account?', 'Go to Profile → Settings → Delete account. Your data is removed within 30 days, in line with POPIA.'],
    ['Who can see my CV?', 'Only employers you apply to. Switch on “Visible to recruiters” to let verified recruiters find you.'],
    ['Which payment methods do you accept?', 'Card, EFT and instant EFT. Monthly plans can also pay by debit order.'],
    ['Can I get a VAT invoice?', 'Yes. Every payment creates a VAT invoice in your employer dashboard.']
  ]
};
