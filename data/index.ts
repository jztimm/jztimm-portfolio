export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Blog", link: "#blog" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a React Native image sharing app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techStacks = [
  {
    id: 1,
    stack: "React.js",
  },
  {
    id: 2,
    stack: "Next.js",
  },
  {
    id: 3,
    stack: "TypeScript",
  },
  {
    id: 4,
    stack: "JavaScript",
  },
  {
    id: 5,
    stack: "Node.js",
  },
];

export const projects = [
  {
    id: 1,
    title: "LocalStead",
    des: "A comprehensive local business discovery platform connecting communities with nearby services, featuring advanced search, reviews, and real-time availability tracking.",
    img: "/LocalStead-thumbnail.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://local-stead-olive.vercel.app/",
    challenge:
      "Creating a user-friendly platform for discovering and connecting with local businesses in real-time",
    solution:
      "Built a responsive web app with geolocation services, real-time updates, and comprehensive business listings",
    results: [
      "60% increase in local business visibility",
      "98% user satisfaction rating",
      "2.1s average page load time",
    ],
    metrics: {
      performance: "94%",
      userSatisfaction: "98%",
      businessVisibility: "60%",
    },
  },
  {
    id: 2,
    title: "Petlistings",
    des: "A specialized pet adoption and listing platform featuring advanced filtering, pet profiles, adoption tracking, and seamless communication between adopters and shelters.",
    img: "/PetListings-thumbnail.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://petlistings.com/",
    challenge:
      "Building a compassionate platform to connect pets with loving families while streamlining the adoption process",
    solution:
      "Developed with Next.js, integrated advanced search filters, pet profile management, and secure messaging system",
    results: [
      "45% faster adoption process",
      "85% successful adoption rate",
      "99.5% uptime achieved",
    ],
    metrics: {
      performance: "91%",
      adoptionRate: "85%",
      processSpeed: "45%",
    },
  },
  {
    id: 3,
    title: "Freedom Stairlifts Inventory Management System",
    des: "A comprehensive inventory management solution for Freedom Stairlifts, featuring real-time tracking, automated reordering, and detailed analytics for equipment management.",
    img: "/Freedom-Stairlifts-thumbnail.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://freedom-stairlifts-tracker.vercel.app",
    challenge:
      "Streamlining inventory management for medical equipment with real-time tracking and automated processes",
    solution:
      "Built a full-stack solution with real-time inventory tracking, automated alerts, and comprehensive reporting",
    results: [
      "70% reduction in inventory errors",
      "50% faster order processing",
      "100% equipment traceability",
    ],
    metrics: {
      performance: "96%",
      errorReduction: "70%",
      traceability: "100%",
    },
  },
  {
    id: 4,
    title: "My Floral Vault",
    des: "A comprehensive plant database and community platform for exploring herbs, remedies, and botanical knowledge with user-generated content and expert insights.",
    img: "/FloralVault-thumbnail.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://flora-vault.vercel.app",
    challenge:
      "Creating an intuitive platform for plant enthusiasts to share and discover botanical knowledge",
    solution:
      "Built a responsive web app with advanced search, user authentication, and community features",
    results: [
      "40% increase in user engagement",
      "95% mobile responsiveness score",
      "2.3s average page load time",
    ],
    metrics: {
      performance: "95%",
      accessibility: "98%",
      userEngagement: "40%",
    },
  },
  {
    id: 5,
    title: "Animated Apple iPhone 3D Website",
    des: "A pixel-perfect recreation of Apple's iPhone 15 Pro website featuring advanced GSAP animations, Three.js 3D models, and smooth scroll interactions.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://iphone15.jztimm.com",
    challenge:
      "Replicating Apple's premium user experience with complex 3D animations and smooth interactions",
    solution:
      "Implemented GSAP timeline animations, Three.js 3D models, and optimized performance for 60fps",
    results: [
      "60fps smooth animations",
      "90+ Lighthouse performance score",
      "1:1 visual accuracy with original",
    ],
    metrics: {
      performance: "92%",
      animations: "60fps",
      accuracy: "95%",
    },
  },
  {
    id: 6,
    title: "Vacafy - Airbnb Clone",
    des: "A full-stack vacation rental platform with advanced search, booking system, payment integration, and real-time messaging between hosts and guests.",
    img: "/Vacafy-pic.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://vacafy-f2ab5.web.app",
    challenge:
      "Building a scalable platform with complex booking logic, payment processing, and real-time features",
    solution:
      "Developed with Next.js, integrated Stripe payments, implemented real-time chat, and optimized for performance",
    results: [
      "50% faster search results",
      "99.9% uptime",
      "Seamless payment processing",
    ],
    metrics: {
      performance: "88%",
      uptime: "99.9%",
      searchSpeed: "50%",
    },
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Jzavier was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jzavier's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jzavier is the ideal partner.",
    name: "Steven Sobol",
    title: "Special Education Director at Truman High School",
    profileImg:
      "https://media.licdn.com/dms/image/C4D03AQFncVN5Gi61gA/profile-displayphoto-shrink_800_800/0/1516557784522?e=1726099200&v=beta&t=sGSqlPb13wsFrAvRrrbm76GcZkL12WK9xO4oYdbTKK8",
  },
  {
    quote:
      "Jzavier's ability to enhance application features and streamline the codebase significantly improved our operational efficiency. His expertise in both frontend and backend development is exceptional, making him a valuable asset to any team.",
    name: "Eric Dewhirst",
    title: "Project Manager at FTC/TRIA",
    profileImg:
      "https://media.licdn.com/dms/image/C4D03AQH-XIsN8ic6Hw/profile-displayphoto-shrink_800_800/0/1548618643314?e=1726099200&v=beta&t=3dn-JkpGwUgYnaUyVBbu4fwNHtoxEzi5fw5uUlINvbs",
  },
  {
    quote:
      "Jzavier skillfully translated our requirements into dynamic application features, utilizing modern frameworks for enhanced functionality and user engagement. His dedication and technical prowess ensured the on-schedule delivery of our complex projects.",
    name: "Sean Casey",
    title: "Senior Developer at IBM",
    profileImg:
      "https://media.licdn.com/dms/image/C5603AQFEL9lEJwXamA/profile-displayphoto-shrink_800_800/0/1596728881861?e=1726099200&v=beta&t=xuhPYoVjAYE7P2c_VIrTdpLNjXfFiJUm-DaHyNTXkks",
  },
  {
    quote:
      "Jzavier's proficiency in responsive UI design and backend solutions was instrumental in optimizing our user experience and maintaining application integrity. His contributions were pivotal to our project's success.",
    name: "Noel Cano",
    title: "Owner of Freedom Stairlifts",
    profileImg:
      "https://media.licdn.com/dms/image/C5603AQFI7InSZuEW_A/profile-displayphoto-shrink_800_800/0/1517271051741?e=1726099200&v=beta&t=MsajL6ljTKkA5zvcEIRiM3XCuGqQEg7Y791-31b_aSE",
  },
  {
    quote:
      "Working with Jzavier has been a game-changer for our development processes. His adoption of CI/CD practices and microservices architecture significantly boosted our software scalability and performance.",
    name: "Robert Thompson",
    title: "CTO at JSM Tech",
    profileImg:
      "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer - FTC/TRIA",
    desc: "Enhanced application features, improving operational efficiency by reducing load times by 40% and increasing user satisfaction by 25%. Facilitated communication between managers and clients, integrating user feedback to drive product improvements.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    metrics: [
      "40% faster load times",
      "25% user satisfaction increase",
      "95% bug reduction",
    ],
  },
  {
    id: 2,
    title: "Software Engineer - IBM",
    desc: "Translated client requirements into dynamic features using AngularJS and ReactJS. Spearheaded CI/CD adoption with Jenkins and Travis CI, boosting software scalability by 60% and reducing deployment time by 75%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    metrics: [
      "60% scalability improvement",
      "75% faster deployments",
      "99.9% uptime achieved",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer - Freedom Stairlifts",
    desc: "Implemented responsive UIs with React.js and Next.js. Utilized Tailwind CSS for senior-friendly designs and architected Microservices, improving system performance by 50% and reducing maintenance costs by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    metrics: [
      "50% performance boost",
      "30% cost reduction",
      "100% mobile responsive",
    ],
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies. Led the adoption of best practices, ensuring high-quality and scalable applications with 90%+ Lighthouse scores across all projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    metrics: [
      "90%+ Lighthouse scores",
      "Zero critical bugs",
      "50% faster development",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jztimm",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/jztimm",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/jztimm/",
  },
];
