import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Luca",
  lastName: "Petini",
  name: `Luca Petini`,
  role: "WordPress Developer",
  avatar: "/images/avatar-2026.jpg",
  email: "dev@lucapetini.com",
  location: "Europe/Rome", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Italian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://www.github.com/lucapetini",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lucapetini",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>WordPress Development for Businesses & Agencies</>,
  featured: {
  display: true,
  title: (
    <Row gap="12" vertical="center">
      <strong className="ml-4">Portfolio</strong>{" "}
      <Line background="brand-alpha-strong" vert height="20" />
      <Text marginRight="4" onBackground="brand-medium">
        View My Work
      </Text>
    </Row>
  ),
  href: "/work/",
},
  subline: (
    <>
    I help companies and digital teams build, optimize, and maintain high-performance websites that generate real results.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `Contact Me`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/lucapetini/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a WordPress developer based in Italy, working with businesses and digital agencies across Europe.
        I build fast, reliable, and scalable websites focused on performance and long-term growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "WordPress & Web Developer",
        timeframe: "2018 – Present",
        role: "Independent Consultant",
        achievements: [
          <>
            Design, development, and optimization for businesses and agencies.
          </>,
          <>
            Independent projects alongside other professional roles.
          </>,
          <>
            WooCommerce implementation and conversion-focused improvements.
          </>,
          <>
            SEO, performance optimization, and technical maintenance.
          </>,
          <>
            Development of scalable, easy-to-manage digital solutions.
          </>,
        ],
        images: [],
      },
      {
        company: "Retail & Operations",
        timeframe: "2021 – 2024",
        role: "",
        achievements: [
          <>
            Customer service, operations management, and workflow optimization in high-volume retail environments.
          </>,
          ],
        images: [],
      },
      {
        company: "Logistics & Market Operations",
        timeframe: "2018 – 2021",
        role: "",
        achievements: [
          <>
            Goods handling, transport coordination, and warehouse support in fast-paced logistics environments.
          </>,
        ],
        images: [],
      },
      {
        company: "Wholesale & Digital Commerce",
        timeframe: "2015 – 2018",
        role: "",
        achievements: [
          <>
            Computer repair, online sales, and early experience with digital tools and e-commerce systems.
          </>,
        ],
        images: [],
      },
      {
        company: "Warehouse Operator",
        timeframe: "2010 – 2013",
        role: "",
        achievements: [
          <>
            Inventory management and logistics support.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Certifications",
    institutions: [
      {
        name: "Data Protection Officer (DPO/RPD)",
        description: ( <>Professional certification validating expertise in data protection, GDPR compliance, and personal data management for public and private organizations. <br /><br /> <small><a href="https://idcert.io/idfy/PIW5X2AK0V" target="_blank" rel="noopener noreferrer" className="accent"> View certificate </a></small></> ),
      },
      {
        name: "IT Security",
        description: ( <>Professional certification validating expertise in cybersecurity, malware protection, network security, and safe data management practices. <br /><br /> <small><a href="https://idcert.io/idfy/3SSFIISA0X" target="_blank" rel="noopener noreferrer" className="accent"> View certificate </a></small></> ),
      },
      {
        name: "Artificial Intelligence",
        description: ( <>Professional certification validating knowledge of artificial intelligence fundamentals, machine learning concepts, and practical business applications. <br /><br /> <small><a href="https://idcert.io/idfy/RZHZHCCJPQ" target="_blank" rel="noopener noreferrer" className="accent"> View certificate </a></small></> ),
      },
      {
        name: "Coding & Computational Thinking",
        description: ( <>Professional certification validating solid foundations in programming, computational thinking, and software development principles. <br /><br /> <small><a href="https://idcert.io/idfy/PQDZP8GJXG" target="_blank" rel="noopener noreferrer" className="accent"> View certificate </a></small></> ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "WordPress Development",
        description: (
          <>Development of custom, scalable, and high-performance WordPress websites for businesses and agencies.</>
        ),
        tags: [
         { name: "WooCommerce", icon: "woocommerce" },
         { name: "PHP", icon: "php" },
         { name: "MySQL", icon: "mysql" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "UI/UX to WordPress Implementation",
        description: (
          <>Conversion of Figma and Adobe XD designs into responsive, pixel-perfect WordPress and Elementor websites.</>
        ),
        tags: [
         { name: "Figma", icon: "figma" },
         { name: "AdobeXd", icon: "adobexd" },
         { name: "Elementor", icon: "elementor" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Performance, SEO/GEO & Security",
        description: (
          <>Optimization of website speed, search visibility, and generative engine discoverability, with a strong focus on security and long-term reliability.</>
        ),
        tags: [
         { name: "Analytics", icon: "analytics" },
         { name: "PageSpeed", icon: "pagespeed" },
         { name: "Semrush", icon: "semrush" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "AI & Automation",
        description: (
          <>Integration of AI tools and automation workflows to improve productivity and business processes.</>
        ),
        tags: [
         { name: "Zapier", icon: "zapier" },
         { name: "OpenAI", icon: "openai" },
         { name: "N8N", icon: "n8n" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Selected Projects`,
  description: `A selection of websites and digital products built for businesses and agencies by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
