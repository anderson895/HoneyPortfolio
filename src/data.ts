import { asset } from './assets'

export const profile = {
  name: 'Honey Jeremae M. Sy',
  title: 'Certified Digital Marketing Professional',
  location: 'Bacolod City, Philippines',
  tagline: 'Marketing Management Graduate',
  intro:
    'Transforming ideas into impactful digital experiences through creative design, compelling content, and strategic marketing.',
  bio: [
    'I help brands, businesses, and organizations strengthen their online presence through graphic design, video editing, content creation, and social media marketing.',
    'My goal is simple: create content that not only looks visually appealing but also drives engagement, builds connections, and delivers results.',
  ],
  email: 'Honeyjmae14@gmail.com',
  linkedin: 'Honey Jeremae Sy',
  facebook: 'Honey M Sy',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What I Offer', href: '#offer' },
  { label: 'My Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const floatingBadges = [
  'Certified Digital Marketing Professional',
  'PACSB Outstanding Marketing Student',
  'Cisco: Discovering Entrepreneurship',
  'Cisco: Create Digital Content',
  'Cisco: Data Analytics Essentials',
]

export const heroStats = [
  { value: '4+', label: 'Years Creative Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '5+', label: 'Organizations Served' },
]

export const resultStats = [
  { value: '3×', label: 'Follower Growth' },
  { value: '2×', label: 'Increase in Bookings' },
  { value: '50K+', label: 'Video Views Generated' },
  { value: '100%', label: 'Content Produced In-House' },
]

export const whyHireMe = [
  {
    title: 'Strategic Marketing Mindset',
    body: 'I combine creative execution with marketing strategy to create content that drives engagement and business growth.',
  },
  {
    title: 'Versatile Creative Professional',
    body: 'Experienced in graphic design, video editing, social media management, branding, photography, and digital marketing.',
  },
  {
    title: 'Leadership Experience',
    body: 'Led creative teams and managed collaborative projects while maintaining high-quality output.',
  },
  {
    title: 'Results-Oriented Approach',
    body: 'Focused on creating content that captures attention, strengthens brand identity, and supports organizational goals.',
  },
]

export const services = [
  {
    title: 'Creative Design',
    items: ['Social Media Graphics', 'Marketing Materials', 'Publication Layouts', 'Brand Visual Assets'],
    icon: 'palette',
  },
  {
    title: 'Social Media Management',
    items: ['Content Strategy', 'Content Scheduling', 'Community Management', 'Performance Monitoring'],
    icon: 'share',
  },
  {
    title: 'Video Production & Editing',
    items: ['Promotional Videos', 'Reels & Short-form Content', 'Event Highlights', 'Advertisement Videos'],
    icon: 'film',
  },
  {
    title: 'Content Creation',
    items: ['Photography', 'Videography', 'Copywriting', 'Brand Storytelling'],
    icon: 'camera',
  },
  {
    title: 'Digital Marketing',
    items: ['Campaign Planning', 'Audience Growth', 'Brand Awareness', 'Content Marketing'],
    icon: 'megaphone',
  },
  {
    title: 'Brand Identity',
    items: ['Logo Design & Enhancement', 'Visual Identity Systems', 'Brand Communication'],
    icon: 'sparkle',
  },
]

export const skillGroups = [
  {
    title: 'Creative Skills',
    skills: ['Graphic Design', 'Layout Design', 'Branding', 'Video Editing'],
  },
  {
    title: 'Marketing Skills',
    skills: ['Social Media Management', 'Content Strategy', 'Copywriting', 'SEO', 'Community Engagement', 'Digital Marketing'],
  },
  {
    title: 'Professional Skills',
    skills: ['Team Leadership', 'Project Management', 'Creative Direction', 'Communication', 'Problem Solving'],
  },
]

export const toolGroups = [
  {
    title: 'Design & Creative',
    tools: ['Adobe Photoshop', 'Adobe Premiere Pro', 'Canva', 'CapCut'],
  },
  {
    title: 'Marketing & Analytics',
    tools: ['Meta Business Suite', 'Facebook Ads Manager', 'TikTok Analytics', 'Google Analytics'],
  },
  {
    title: 'Productivity & Business',
    tools: ['Microsoft Word', 'Microsoft Excel', 'PowerPoint', 'Google Docs', 'Google Sheets', 'Google Slides'],
  },
  {
    title: 'Professional Equipment',
    tools: ['DJI Action 5 Pro', 'iPhone 13 Pro Max', 'DJI Osmo Mobile 7'],
  },
]

export type Project = {
  title: string
  client: string
  category: string
  image: string
  tall?: boolean
}

export const projects: Project[] = [
  {
    title: 'Likes to Sales Campaign',
    client: 'Social Media Hub Bacolod',
    category: 'Publication Material',
    image: asset('projects/social-1.png'),
  },
  {
    title: 'Brand Promo Set',
    client: "Basa Brothers Mobile Bar",
    category: 'Marketing Material',
    image: asset('projects/basa-brothers.png'),
  },
  {
    title: 'Banana Chips Launch',
    client: "Chip N' Crunch",
    category: 'Product Graphic',
    image: asset('projects/chip-n-crunch.png'),
  },
  {
    title: 'Services Offer Poster',
    client: 'Teach IT Digital Marketing',
    category: 'Promotional Poster',
    image: asset('projects/teach-it.png'),
  },
  {
    title: "Teacher's Day Greeting",
    client: 'The Business Primer',
    category: 'Publication Material',
    image: asset('projects/business-primer.png'),
  },
  {
    title: 'Flair Challenge Season 2',
    client: 'UNO-R Hospitality & Tourism Society',
    category: 'Event Poster',
    image: asset('projects/uno-r-flair.png'),
  },
  {
    title: 'Flair Open Season 3',
    client: 'Negros Flair Council',
    category: 'Event Poster',
    image: asset('projects/flair-open-3.png'),
  },
  {
    title: 'Flair Open Season 2',
    client: 'Negros Flair Council',
    category: 'Event Poster',
    image: asset('projects/flair-open-2.png'),
  },
]

export const logoSamples = [
  asset('logos/logo-sm.png'),
  asset('logos/logo-1.png'),
  asset('logos/logo-2.png'),
  asset('logos/logo-3.png'),
  asset('logos/logo-4.png'),
]

export const coverSamples = [
  asset('covers/cover-main.png'),
  asset('covers/cover-1.png'),
  asset('covers/cover-2.png'),
]

export const viewSamples = [
  asset('views/views.png'),
  asset('views/views-1.png'),
  asset('views/views-2.png'),
]

export const heroPhoto = asset('honey.png')

export const videoAd = asset('video/video-ad.mp4')

// Vertical (9:16) short-form reels — FB & TikTok.
export const reels = [
  asset('video/reel-1.mp4'),
  asset('video/reel-2.mp4'),
  asset('video/reel-3.mp4'),
  asset('video/reel-4.mp4'),
  asset('video/reel-5.mp4'),
]

export const clients = [
  'Basa Brothers Mobile Bar',
  "Nana's Cafe",
  'The Business Primer',
  'Teach IT Digital Marketing',
  "Chip N' Crunch",
  'Negros Flair Council',
  'Social Media Hub Bacolod',
  'UNO-R Hospitality & Tourism Society',
  'Glamhara Charms',
]

export const testimonials = [
  {
    quote:
      'Honey manages our social media page and creates our promotional content, including videos and marketing materials. She consistently produces high-quality work with creativity, attention to detail, and quick turnaround times. Her content helps strengthen our brand and engage our audience. We appreciate her professionalism, dedication, and passion for her work.',
    author: "Basa Brother's Mobile Bar BCD",
    role: 'Mobile Bar Service',
  },
  {
    quote:
      'I was impressed by Honey’s ability to transform simple ideas into visually appealing marketing materials. Her pubmats effectively highlighted our products, while her video ads captured attention and increased engagement on our social media platforms. I highly recommend her for any digital marketing and content creation projects.',
    author: 'Teach IT Digital Marketing Consultancy',
    role: 'Marketing Consultancy',
    rating: 5,
  },
  {
    quote:
      'Wooahh! That\'s very nice! The redesign is a successful modernization, showing better clarity, professionalism, and scalability.',
    author: 'Glamhara Charms',
    role: 'Accessories Brand',
  },
  {
    quote:
      "You really understood Kean's Brews' brand and turned it into something visually beautiful and authentic. The flow, the mood, everything felt just right. We're beyond happy with the final result!",
    author: "Kean's Brews",
    role: 'Coffee Brand',
  },
]
