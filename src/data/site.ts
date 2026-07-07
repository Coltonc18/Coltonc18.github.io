// All site content lives here. To add a project or update your resume,
// edit this file only — layout and styling never need to change.

export const identity = {
  name: 'Colton Carroll',
  // Portrait photo: drop the file in src/assets/ and put its filename here.
  // Ideal: 4:5 aspect (e.g. 1200x1500), JPG or WebP, well-lit, under ~500 KB.
  portrait: 'me.jpg',
  tagline: 'Computer Engineering @ University of Washington',
  blurb:
    'I build firmware and full-stack software — from real-time dashboards on electric motorcycles to production services at Amazon. I like fault-tolerant systems, fast-moving teams, and shipping things that survive contact with hardware.',
  location: 'Seattle, WA',
  email: 'coltonc18@icloud.com',
  github: 'https://github.com/Coltonc18',
  linkedin: 'https://linkedin.com/in/coltoncarroll',
  resume: '/resume.pdf',
};

export interface Project {
  name: string;
  period: string;
  stack: string[];
  description: string;
  link?: string; // optional URL (repo, write-up, demo)
  // Optional photo: drop the file in src/assets/ and put its filename here.
  // Ideal: 16:10 aspect (e.g. 1600x1000), JPG or WebP, under ~800 KB.
  image?: string;
}

export const projects: Project[] = [
  {
    name: 'Superbike Display Firmware',
    period: '2025 — 2026',
    stack: ['C++', 'ESP32-S3', 'FreeRTOS', 'LVGL', 'CAN bus'],
    description:
      "Telemetry dashboard for UW's custom-built electric motorcycle: live speedometer, current and temperature gauges at 30 Hz, 42-column CSV logging to SD at 20 Hz, CAN health monitoring with automatic bus-fault recovery, and a structured error/warning framework with severity-driven UI.",
  },
  {
    name: 'Community Sentiment Prediction',
    period: '2026',
    stack: ['Python', 'PyTorch', 'Transformers'],
    description:
      'Deep learning research project (CSE 493G): predicting how distinct online communities react to unseen news events by combining sentence-transformer event embeddings with learned demographic embeddings, evaluated on a time-based split against demographic-agnostic and historical-prior baselines.',
  },
  {
    name: 'Custom Macropad Keyboard',
    period: '2024',
    stack: ['CircuitPython', 'KMK', 'Altium'],
    description:
      'Designed the PCB in Altium and a 3D-printed enclosure in Autodesk, hand-soldered the microcontroller, LEDs, and SMD components, and wrote the firmware on CircuitPython/KMK.',
  },
  {
    name: 'Wi-Fi Controlled PC Lighting',
    period: '2023',
    stack: ['C++', 'ESP32'],
    description:
      'Custom PC lighting on a self-designed PCB driven by an ESP32, with Wi-Fi connectivity, automation, and lighting control from a mobile app.',
  },
];

export interface Experience {
  role: string;
  org: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    role: 'Software Development Engineer Intern',
    org: 'Amazon Alexa',
    period: 'Jun 2025 — Sep 2025',
    description:
      'Owned a full-stack project for creating and managing customer-defined smart home automation groups: three new React Native pages in the Alexa app backed by four new APIs with DynamoDB storage, caching, and latency monitoring. Worked closely with product, UX, and partner software teams to ship production-ready.',
  },
  {
    role: 'Firmware Subteam Lead',
    org: 'Washington Superbike Club',
    period: 'Oct 2024 — Present',
    description:
      'Lead the team writing, testing, and maintaining firmware for a custom electric motorcycle. Run weekly meetings and work parties, and brought up hardware-in-the-loop testing ahead of competition.',
  },
  {
    role: 'Undergraduate Researcher',
    org: 'Advancing Movement & Performance Lab, UW',
    period: 'Sep 2024 — Present',
    description:
      'Built a microcontroller + BLE pipeline that reads cardiovascular indicators from a wearable fitness tracker and acts on them alongside spinal electrical stimulation therapy, with per-patient scikit-learn models. In use in an active clinical trial with spinal cord injury patients.',
  },
];

export const education = {
  school: 'University of Washington',
  degree: 'B.S. Computer Engineering',
  period: 'Expected Jun 2027',
  gpa: '3.9',
  coursework: [
    'Data Structures & Parallelism',
    'Systems Programming',
    'Operating Systems',
    'Distributed Systems',
    'Machine Learning',
    'Hardware-Software Interface',
  ],
};

export const skills: Record<string, string[]> = {
  Languages: ['C', 'C++', 'Python', 'Java', 'TypeScript'],
  'Frameworks & Libraries': ['React', 'React Native', 'FreeRTOS', 'LVGL', 'scikit-learn'],
  'Tools & Hardware': ['Linux', 'Git', 'Docker', 'PlatformIO', 'Altium', 'DynamoDB'],
};
