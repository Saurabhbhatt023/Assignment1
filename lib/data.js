// Mock data for the personal dashboard
export const profileData = {
  name: "Saurabh Bhatt",
  title: "Computer Science Student",
  bio: "Passionate Computer Science student with expertise in full-stack development and cloud technologies. Currently pursuing Masters in Computer Application, with a strong foundation in building scalable applications and implementing efficient solutions.",
  avatar: "https://media.licdn.com/dms/image/v2/D5603AQEboYL0PQQLog/profile-displayphoto-shrink_400_400/B56ZZgmfrVHUAg-/0/1745377430684?e=1753315200&v=beta&t=bqTTScc49e0WxiSO-QQ4kU2idT2g5_M9SMyJIodgrig",
  contact: {
    email: "saurabhbhatt023@gmail.com",
    phone: "+91 8476805638",
    location: "Dehradun, Uttarakhand, India",
    github: "github.com/Saurabhbhatt023",
    linkedin: "linkedin.com/in/saurabh-bhatt-621b62227",
    twitter: "twitter.com/saurabhbhatt"
  }
};

export const educationData = [
  {
    id: 1,
    institution: "Graphic Era Hill University",
    degree: "Master of Computer Application",
    date: "Aug 2023 - July 2025",
    description: "Currently pursuing MCA with a focus on advanced computing concepts and software development.",
    logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    institution: "Graphic Era Hill University",
    degree: "Bachelor of Science in Information Technology",
    date: "Aug 2019 - July 2022",
    description: "Completed B.Sc. IT with strong academic performance and practical project experience.",
    logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const experienceData = [
  {
    id: 1,
    company: "Havahavai",
    position: "Software Development Intern",
    date: "Feb 2025 - May 2025",
    description: "Developed and optimized Express.js APIs for efficient data retrieval from AWS DynamoDB. Leveraged AWS services including SQS, Lambda, and ECS for deployment.",
    logo: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "HTML/CSS", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Tailwind", level: 85 }
    ]
  },
  {
    category: "Backend & Cloud",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "AWS Services", level: 75 },
      { name: "Docker", level: 70 }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "Jenkins", level: 70 },
      { name: "Terraform", level: 65 }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "AutoReel AI",
    description: "AI-Powered Video Generator with intuitive UI mockups in Figma and React frontend for real-time feedback and video rendering.",
    technologies: ["React", "Python", "Docker", "FFmpeg"],
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://github.com/Saurabhbhatt023/AutoReel-AI.git"
  },
  {
    id: 2,
    title: "Viben Web",
    description: "Real-time Social App with React frontend, WebSocket communication, and AWS EC2 deployment with Nginx.",
    technologies: ["React", "WebSocket", "AWS", "Node.js"],
    image: "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://vibenweb.xyz/"
  },
  {
    id: 3,
    title: "Plant Disease Prediction",
    description: "CNN-based plant disease prediction using TensorFlow and Keras with data augmentation for improved accuracy.",
    technologies: ["Python", "TensorFlow", "CNN", "Keras"],
    image: "https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://github.com/Saurabhbhatt023/Plant-Disease-Prediction.git"
  }
];

export const hobbiesData = [
  {
    name: "Coding",
    description: "Love exploring new technologies and building innovative solutions.",
    icon: "Code"
  },
  {
    name: "Learning",
    description: "Constantly expanding knowledge in computer science and technology.",
    icon: "BookOpen"
  },
  {
    name: "Problem Solving",
    description: "Enjoy tackling complex technical challenges and algorithmic problems.",
    icon: "Brain"
  },
  {
    name: "Tech Community",
    description: "Active participant in tech communities and knowledge sharing.",
    icon: "Users"
  }
];