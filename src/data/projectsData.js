import profileImg from '../assets/Screenshot from 2025-07-19 18-44-01.png';
import Eco from '../assets/ec.png';
import xml from '../assets/xml.webp';
import comme from '../assets/ecommerce-online-shopping-vector-illustration_677179-93.webp';
import back from '../assets/Gemini_Generated_Image_hfkfoghfkfoghfkf.png';
import wallet from '../assets/wallet.png';
import bmi from '../assets/bmi.png';
import wea from '../assets/wea.png';
import cr from '../assets/cr.png';
import ais from '../assets/ais.png';
import mara from '../assets/mara.png';
import scr from '../assets/scr.png';

export const projects = [
  {
    id: 'real-estate-saas',
    title: 'SaaS Platform for Real Estate Investors',
    description: 'A scalable real estate investment platform connecting investors with high-return opportunities. Features investor onboarding, dynamic forms, lead management, and an admin dashboard for tracking interactions and managing workflows.',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/real-estate-saas',
    image: cr,
    category: 'web',
    features: [
      'Investor Onboarding Flow',
      'Admin Dashboard',
      'Lead Management System',
      'Dynamic Forms & Data Collection',
      'Responsive UI/UX',
      'Scalable SaaS Architecture',
      'CRM-Ready Structure'
    ],
    challenges: 'Designing a scalable architecture and building flexible lead management workflows',
    github: 'https://github.com/yourusername/real-estate-saas'
  },
  {
    id: 'medical-platform',
    title: 'Medical Website with Product Catalog & Quote System',
    description: 'A full-stack medical implant platform featuring a responsive landing page, advanced product catalog, dynamic quote request system, and scalable admin-ready architecture.',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/medical-platform',
    image: ais,
    category: 'web',
    features: [
      'Dynamic Product Catalog',
      'Quote Request System',
      'Technical Product Pages',
      'Responsive Design',
      'Structured Navigation',
      'Modern UI/UX',
      'Admin-Ready Architecture'
    ],
    challenges: 'Building scalable product management and creating an intuitive quote request workflow',
    github: 'https://github.com/yourusername/medical-platform'
  },
  {
    id: 'real-estate-landing',
    title: 'Modern SaaS Landing Page for Real Estate Management',
    description: 'A modern SaaS landing page focused on conversion, clean UI/UX, reusable components, and responsive design for a real estate management platform.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Express.js', 'PostgreSQL'],
    link: 'https://github.com/yourusername/real-estate-landing',
    image: mara,
    category: 'web',
    features: [
      'Modern SaaS UI',
      'Responsive Design',
      'Reusable Components',
      'Smooth Animations',
      'Optimized Conversion Flow',
      'CTA-Focused Layout',
      'Clean User Experience'
    ],
    challenges: 'Creating a high-converting layout while maintaining performance and scalability',
    github: 'https://github.com/yourusername/real-estate-landing'
  },
  {
    id: 'universal-web-scraper',
    title: 'Universal Web Scraper – Automated Data Extraction System',
    description: 'A powerful automated web scraping system capable of extracting structured data from static and dynamic websites using only a URL.',
    technologies: ['Python', 'Requests', 'BeautifulSoup', 'Selenium', 'JSON'],
    link: '#',
    image: scr,
    category: 'web',
    features: [
      'Static & Dynamic Website Support',
      'Automated Data Extraction',
      'Image & Media Collection',
      'Table & Link Extraction',
      'Document Download Detection',
      'Structured JSON Output',
      'Scalable Scraping Workflow'
    ],
    challenges: 'Handling dynamic websites and building a universal extraction logic adaptable to multiple site structures',
    github: 'https://github.com/yourusername/universal-web-scraper'
  },
  {
    id: 'backend-ecommerce',
    title: 'Backend – E-commerce API',
    description: 'A complete e-commerce backend API built with TypeScript, featuring user authentication, product management, order processing, and payment integration.',
    technologies: ['Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'JWT', 'Stripe API', 'Bcrypt'],
    link: 'https://github.com/medaminenasfi/E-commerce/tree/main/backend',
    image: back,
    category: 'web',
    features: [
      'User Authentication & Authorization',
      'Product CRUD Operations',
      'Shopping Cart Management',
      'Order Processing System',
      'Payment Integration with Stripe',
      'Admin Dashboard',
      'RESTful API Design'
    ],
    challenges: 'Implementing secure payment processing and scalable database design',
    github: 'https://github.com/medaminenasfi/E-commerce/tree/main/backend'
  },
  {
    id: 'ecotourisme',
    title: 'Ecotourisme TN',
    description: 'A comprehensive digital platform promoting eco-tourism and sustainable travel experiences in Tunisia with booking system and interactive maps.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet', 'Socket.io'],
    link: 'https://ecotourisme.laghazala.tn/',
    image: Eco,
    category: 'web',
    features: [
      'Interactive Tourism Maps',
      'Booking System',
      'Real-time Chat Support',
      'Multi-language Support',
      'Mobile Responsive Design',
      'Payment Gateway Integration',
      'Review & Rating System'
    ],
    challenges: 'Integrating real-time features and optimizing for mobile performance',
    github: 'https://github.com/medaminenasfi/ecotourisme'
  },
  {
    id: 'xml-generator',
    title: 'XML Generator',
    description: 'Advanced application for converting Excel files and SQL queries to XML format with custom schema validation and batch processing.',
    technologies: ['React.js', 'Node.js', 'Excel API', 'XML Parser', 'Multer', 'Joi'],
    link: '#',
    image: xml,
    category: 'web',
    features: [
      'Excel to XML Conversion',
      'SQL Query to XML Export',
      'Custom Schema Validation',
      'Batch File Processing',
      'Download Management',
      'Error Handling & Logging',
      'Preview Before Export'
    ],
    challenges: 'Handling large file uploads and complex XML schema validation',
    github: 'https://github.com/medaminenasfi/xml-generator'
  },
  {
    id: 'glooms-ecommerce',
    title: 'Glooms E-Commerce',
    description: 'Modern full-stack e-commerce platform specializing in clothing for all age groups with advanced filtering and recommendation system.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'Cloudinary'],
    link: '#',
    image: comme,
    category: 'web',
    features: [
      'Product Catalog with Filters',
      'User Profiles & Wishlists',
      'Shopping Cart & Checkout',
      'Order Tracking',
      'Admin Panel',
      'Image Upload & Management',
      'Responsive Design'
    ],
    challenges: 'Implementing complex product filtering and optimizing image loading',
    github: 'https://github.com/medaminenasfi/glooms-ecommerce'
  },
  {
    id: 'traducode',
    title: 'TraduCode',
    description: 'Innovative web application that converts algorithmic pseudocode into actual programming code across multiple languages.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Prism.js', 'Monaco Editor', 'Regex'],
    link: '#',
    image: profileImg,
    category: 'web',
    features: [
      'Multi-language Code Generation',
      'Syntax Highlighting',
      'Code Editor Integration',
      'Algorithm Visualization',
      'Export Functionality',
      'Code Validation',
      'Interactive Examples'
    ],
    challenges: 'Parsing complex algorithms and generating syntactically correct code',
    github: 'https://github.com/medaminenasfi/traducode'
  },
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    description: 'A simple and elegant Body Mass Index (BMI) Calculator built using Flutter and Dart. This app allows users to calculate their BMI based on height and weight, providing instant insights about their health category.',
    technologies: ['Flutter', 'Dart', 'Material Design'],
    link: '#',
    image: bmi,
    category: 'mobile',
    features: [
      'Easy BMI Calculation',
      'Supports Metric Units (kg, cm)',
      'Displays Health Categories: Underweight, Normal, Overweight, Obese',
      'Clean and Responsive UI'
    ],
    challenges: 'Ensuring accuracy in BMI calculation and maintaining a clean responsive layout',
    github: 'https://github.com/medaminenasfi/BMI-Calculator'
  },
  {
    id: 'portefeuille-flutter',
    title: 'Digital Wallet Flutter App',
    description: 'This Flutter application simulates a digital wallet with two main functionalities: a currency converter and a monthly budget simulator. It allows users to manage their finances in a simple and intuitive way.',
    technologies: ['Flutter', 'Dart', 'Material Design'],
    link: '#',
    image: wallet,
    category: 'mobile',
    features: [
      'Currency converter with fixed rates',
      'Monthly budget simulator',
      'Display remaining balance after expenses',
      'Simple and smooth navigation',
      'User-friendly interface without external API'
    ],
    challenges: 'Designing a smooth and intuitive interface with reliable calculations',
    github: 'https://github.com/medaminenasfi/portefeuille-numerique'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App (Ongoing)',
    description: 'An elegant Flutter application currently under development, providing real-time weather updates and detailed forecasts with a focus on UI animations and performance.',
    technologies: ['Flutter', 'Dart', 'REST API', 'Geolocator', 'Weather API', 'Animations'],
    link: '#',
    image: wea,
    category: 'mobile',
    features: [
      'Real-time Weather Data (in progress)',
      '7-Day Forecast (in progress)',
      'Location-based Weather Detection',
      'Weather Maps & Radar (planned)',
      'Severe Weather Alerts (planned)',
      'Multiple City Support',
      'Smooth UI Animations'
    ],
    status: 'In Development',
    challenges: 'Integrating live APIs and optimizing animation performance while managing location permissions.',
    github: 'https://github.com/medaminenasfi/flutter-weather'
  }
];
