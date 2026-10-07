import { Project, SkillCategory, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Preetam Kamate',
  title: 'AI & MACHINE LEARNING STUDENT',
  semester: '5th Semester',
  college: 'New Horizon College of Engineering',
  location: 'Bengaluru, Karnataka',
  cgpa: '9.06 / 10',
  intro: 'Exploring Python, Machine Learning, Data Science and AI through practical projects.',
  about: "I'm Preetam Kamate, a 5th-semester Artificial Intelligence & Machine Learning student at New Horizon College of Engineering, Bengaluru. I enjoy working with Python, Machine Learning, Data Science and building practical AI projects.",
  email: 'preetamkamate2005@gmail.com',
  phone: '+91 7975793868',
  github: 'https://github.com/preetamkamate',
  linkedin: 'https://www.linkedin.com/in/preetam-kamate-844b5636a/',
  coordinates: '12.9716° N, 77.5946° E',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'PROGRAMMING',
    iconName: 'Code2',
    skills: ['Python', 'C', 'Java'],
  },
  {
    title: 'LIBRARIES',
    iconName: 'Cpu',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
  },
  {
    title: 'CONCEPTS',
    iconName: 'Database',
    skills: [
      'Data Analysis',
      'Data Cleaning',
      'Machine Learning',
      'Regression',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Problem Solving',
    ],
  },
  {
    title: 'TOOLS & ENV',
    iconName: 'Sliders',
    skills: ['Jupyter Notebook', 'Google Colab', 'VS Code'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'nids',
    number: '01',
    title: 'AI-Powered Network Intrusion Detection System',
    subtitle: 'CICIDS2017 NETWORK BENCHMARK',
    description:
      'Developed an ML-based Network Intrusion Detection System using CICIDS2017, processing 2.31M+ network traffic records.',
    technologies: ['XGBoost', 'Random Forest', 'LightGBM', 'SHAP', 'Python', 'Machine Learning'],
    features: [
      'Data Cleaning',
      'Feature Engineering',
      'Feature Selection',
      'Machine Learning',
      'Explainable AI using SHAP',
    ],
    result: '99.8% accuracy with XGBoost',
    githubUrl: 'https://github.com/preetamkamate/NIDS_PROJECT',
    featured: true,
    highlightStat: '2.31M+ Records',
    badge: 'FLAGSHIP // ML MODEL',
  },
  {
    id: 'customer-chatbot',
    number: '02',
    title: 'AI Customer Support Chatbot',
    subtitle: 'STREAMLIT + VECTOR DATABASE + GEN-AI',
    description:
      'Built an AI customer-support chatbot using Python, Streamlit, FAISS, Sentence Transformers and FLAN-T5.',
    technologies: ['Python', 'Streamlit', 'FAISS', 'Sentence Transformers', 'FLAN-T5'],
    features: [
      'Keyword Matching',
      'Semantic Search',
      'Fuzzy Matching',
      'Generative AI',
      'Spelling-Error Handling',
      'Real-Time Responses',
    ],
    result: 'Sub-second semantic vector matching with FLAN-T5',
    githubUrl: 'https://github.com/preetamkamate/ai-customer-help',
    featured: true,
    highlightStat: 'FAISS Vectors',
    badge: 'NLP // GEN-AI',
  },
  {
    id: 'business-entity',
    number: '03',
    title: 'Business Entity Resolution',
    subtitle: 'RECORD LINKAGE & DEDUPLICATION',
    description:
      'Entity matching and record linkage repository exploring deduplication, entity resolution algorithms, and record matching strategies.',
    technologies: ['Python', 'Data Cleaning', 'Entity Matching', 'Algorithms'],
    githubUrl: 'https://github.com/preetamkamate/business-entity-resolution',
    featured: false,
    highlightStat: 'Record Linkage',
    badge: 'DATA SYSTEM',
  },
  {
    id: 'olympic-prediction',
    number: '04',
    title: 'Olympic Medal Prediction',
    subtitle: 'DATA SCIENCE MINI PROJECT',
    description:
      'Data science mini-project analyzing historical Olympic games datasets to predict medal outcomes and identify country performance trends.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Science', 'Matplotlib'],
    githubUrl: 'https://github.com/preetamkamate/ds-mini-project',
    featured: false,
    highlightStat: 'Historical Datasets',
    badge: 'DATA SCIENCE',
  },
  {
    id: 'python-practice',
    number: '05',
    title: 'Python Practice',
    subtitle: 'ALGORITHMS & DATA STRUCTURES',
    description:
      'Repository covering core algorithmic exercises, data structures, and foundational Python problem solving implementations.',
    technologies: ['Python', 'Data Structures', 'Algorithms', 'OOP'],
    githubUrl: 'https://github.com/preetamkamate/git-practise2',
    featured: false,
    highlightStat: 'Core Practice',
    badge: 'FOUNDATIONAL',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'nhec',
    institution: 'New Horizon College of Engineering, Bengaluru',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Artificial Intelligence & Machine Learning',
    period: '2024 – Present',
    metricLabel: 'CGPA',
    metricValue: '9.06 (4th Semester)',
    description:
      'Focusing on foundational and applied AI, Machine Learning, Data Science pipelines, discrete mathematics, and algorithms.',
  },
  {
    id: 'cle-pu',
    institution: 'CLE PU College',
    degree: 'Pre-University Education',
    field: 'Science Stream (PCMB)',
    period: '2022 – 2024',
    metricLabel: 'Score',
    metricValue: '89%',
    description:
      'Rigorous foundation in Mathematics, Physics, Chemistry, and computational basics.',
  },
  {
    id: 'govt-school',
    institution: 'Government School, Kallol',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2022',
    metricLabel: 'Score',
    metricValue: '96%',
    description:
      'Graduated with academic distinction across all foundational subjects.',
  },
];

export const BEYOND_CODE_LANGUAGES = ['English', 'Kannada', 'Hindi', 'Marathi'];
