var courseList = [
  {
    courseId: 1001,
    courseName: "Machine Learning",
    offeredBy: "Stanford University",
    instructor: "Andrew Ng",
    courseFee: 89,
    url: "https://s3.amazonaws.com/coursera/topics/ml/large-icon.png",
  },
  {
    courseId: 1002,
    courseName: "The Science of Well-Being",
    offeredBy: "Yale University",
    instructor: "Laurie Santos",
    courseFee: 39,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/7e/aff5b0f54c11e7b5ae579a0e963c38/Logo_TheScienceofWell-Being.png",
  },
  {
    courseId: 1003,
    courseName: "Psychological First Aid",
    offeredBy: "Johns Hopkins University",
    instructor: "George Everly, Jr., PhD",
    courseFee: 69,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/de/e250c02c7f11e4a56e09598f8b6c89/PFA.png",
  },
  {
    courseId: 1004,
    courseName: "Successful Negotiation: Essential Strategies and Skills",
    offeredBy: "University of Michigan",
    instructor: "George Siedel",
    courseFee: 49,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/99/7ab7c00f7b11e79b617dbb2116532d/contractnegotiations_Logo_080814d.jpg",
  },
  {
    courseId: 1005,
    courseName: "Writing in the Sciences",
    offeredBy: "Stanford University",
    instructor: "Dr. Kristin Sainani",
    courseFee: 79,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/15/bfacf07ed011e7923c3da078b81428/images_course_image-stanford.jpg",
  },
  {
    courseId: 1006,
    courseName: "Stanford Introduction to Food",
    offeredBy: "Stanford University",
    instructor: "Maya Adam, MD",
    courseFee: 79,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/b0/aae5e0b59611e58ae18543e6165465/fruit-bowl.jpg",
  },
  {
    courseId: 1007,
    courseName: "Primeros Auxilios Psicológicos",
    offeredBy: "Universitat Autònoma de Barcelona",
    instructor: "Alicia Álvarez",
    courseFee: 58,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/e9/4248f0683c11e5b259e33eb6e889a0/logo_PAP_ondem_2.jpg",
  },
  {
    courseId: 1008,
    courseName: "Private Equity and Venture Capital",
    offeredBy: "Università Bocconi",
    instructor: "Stefano Caselli",
    courseFee: 99,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/39/e5acd0346611e5b80461999c2a9a44/financial.jpg",
  },
  {
    courseId: 1009,
    courseName: "Design and Interpretation of Clinical Trials",
    offeredBy: "Johns Hopkins University",
    instructor: "Janet Holbrook, PhD, MPH",
    courseFee: 89,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/ed/512f4b85c5c8c55bc971db42bf5f8e/ClinTrials-02.jpg",
  },
  {
    courseId: 1010,
    courseName: "Management of Fashion and Luxury Companies",
    offeredBy: "Università Bocconi",
    instructor: "Erica Corbellini",
    courseFee: 94,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/e8/c700104a3711e4805271abd0a8eb20/Moncler_IMG_4315_Ottavia-Pavesi_Cover-Mafash.jpg",
  },
  {
    courseId: 1011,
    courseName: "Social Psychology",
    offeredBy: "Wesleyan University",
    instructor: "Scott Plous",
    courseFee: 44,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/dc/99ebd7aa52f3c39d32e97ca6e3a66c/Course-Image3200x1800.png",
  },
  {
    courseId: 1012,
    courseName: "Introduction to User Experience Design",
    offeredBy: "Georgia Institute of Technology",
    instructor: "Dr. Rosa I. Arriaga",
    courseFee: 84,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/6c/0d3ca034c411e694968959655359ff/IntroductionUser_InterfaceDesignPart1.jpg",
  },
  {
    courseId: 1013,
    courseName: "Agile with Atlassian Jira",
    offeredBy: "Atlassian",
    instructor: "Steve Byrnes",
    courseFee: 59,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/44/a1aa6de0754300a8bb8a2f2d2ac817/atlassian-logo-gradient-vertical-white.png",
  },
  {
    courseId: 1014,
    courseName: "Introductory Human Physiology",
    offeredBy: "Duke University",
    instructor: "Jennifer Carbrey",
    courseFee: 34,
    url: "https://s3.amazonaws.com/coursera/topics/humanphysio/large-icon.png",
  },
  {
    courseId: 1015,
    courseName: "Organizational Analysis",
    offeredBy: "Stanford University",
    instructor: "Daniel A. McFarland",
    courseFee: 29,
    url: "https://s3.amazonaws.com/coursera/topics/organalysis/large-icon.png",
  },
  {
    courseId: 1016,
    courseName: "Camino a la Excelencia en Gestión de Proyectos",
    offeredBy: "Pontificia Universidad Católica de Chile",
    instructor: "Paz Arroyo",
    courseFee: 19,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/ba/4c90c06b0411e6b4aa613b71b450f4/PROJECTOS.jpg",
  },
  {
    courseId: 1017,
    courseName: "The Strategy of Content Marketing",
    offeredBy: "University of California, Davis",
    instructor: "Sonia Simone",
    courseFee: 39,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/40/8dbf10ac1911e68f5119007c0cf554/GettyImages-547015901-Thumbnail.jpg",
  },
  {
    courseId: 1018,
    courseName: "Medical Neuroscience",
    offeredBy: "Duke University",
    instructor: "Leonard E. White, Ph.D.",
    courseFee: 119,
    url: "https://s3.amazonaws.com/coursera/topics/medicalneuro/large-icon.png",
  },
  {
    courseId: 1019,
    courseName: "Modern Art & Ideas",
    offeredBy: "The Museum of Modern Art",
    instructor: "Lisa Mazzola",
    courseFee: 29,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/65/78ce0081ad11e681d7bb31b0a632ef/starry-night.jpg",
  },
  {
    courseId: 1020,
    courseName: "Forensic Accounting and Fraud Examination",
    offeredBy: "West Virginia University",
    instructor: "Dr. Richard Riley, Ph.D",
    courseFee: 49,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/4d/95f0b0e66e11e3bf7fb7b0a53f0209/ForensicAccountingLogo.jpg",
  },
  {
    courseId: 1021,
    courseName: "Animal Behaviour and Welfare",
    offeredBy: "The University of Edinburgh",
    instructor: "Professor Nat Waran",
    courseFee: 39,
    url:
      "https://s3.amazonaws.com/coursera-course-photos/e0/b9a9af76525b66801e0e89826b8414/ABW-Dog.jpg.jpeg",
  },
];

export default courseList;
