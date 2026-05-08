// ─────────────────────────────────────────────────────────────
//  portfolio.js  —  ALL your artifact data lives here
//
//  HOW TO ADD A NEW ARTIFACT:
//  1. Find the course object you want to add to (by "courseId")
//  2. Add a new object inside its "artifacts" array
//  3. Fill in the fields — that's it. The page renders it automatically.
//
//  HOW TO ADD A NEW COURSE:
//  1. Add a new object to the portfolioData array below
//  2. Give it a unique "courseId", a "courseCode", "courseTitle", "description"
//  3. Add an empty "artifacts" array (or fill it right away)
//
//  ARTIFACT TYPE OPTIONS:
//    "pdf"   — links to a file in the /files/ folder
//    "link"  — links to an external URL (YouTube, Google Drive, etc.)
//
//  FILE PATHS:
//    For PDFs: put your file in the /files/ folder and set file: "files/your-filename.pdf"
//    For links: set file: "https://your-link-here.com"
// ─────────────────────────────────────────────────────────────

const portfolioData = [

  // ── CPE C313: IMAGE PROCESSING ──────────────────────────────
  {
    courseId: "cpe-c313",
    courseCode: "CPE C313",
    courseTitle: "Image Processing",
    description: "Study of image acquisition, processing techniques, and intelligent classification systems using convolutional neural networks and transfer learning.",
    artifacts: [

      {
        id: "c313-a1",
        title: "Compilation of Lab Activities",
        type: "pdf",
        file: "files/cpe313-lab-compilation.pdf",
        // ↑ Replace with your actual PDF filename inside the /files/ folder
        description: "A compiled collection of all laboratory activities completed throughout the course, covering image processing techniques, feature extraction, and model training exercises.",
        outcomes: "[PLACEHOLDER] Edit this section to describe how this artifact contributes to your CpE Student Outcomes. Reference the specific SO numbers from your course syllabus.",
        personalGoals: "[PLACEHOLDER] Edit this section to describe how completing these lab activities contributed to your personal development and engineering goals."
      },

      {
        id: "c313-a2",
        title: "Journal Article",
        type: "pdf",
        file: "files/cpe313-journal-article.pdf",
        // ↑ Replace with your actual PDF filename inside the /files/ folder
        description: "A journal article reviewing relevant literature and research related to the course project on lip condition classification using convolutional neural networks.",
        outcomes: "[PLACEHOLDER] Edit this section to describe how this artifact contributes to your CpE Student Outcomes. Reference the specific SO numbers from your course syllabus.",
        personalGoals: "[PLACEHOLDER] Edit this section to describe how writing this journal article contributed to your personal development and engineering goals."
      },

      {
        id: "c313-a3",
        title: "AI Project Source Code",
        type: "pdf",
        file: "files/cpe313-source-code.pdf",
        // ↑ Replace with your actual PDF filename inside the /files/ folder
        description: "Complete source code for the lip condition classification system, including the vanilla CNN model, EfficientNetB0 transfer learning model, and Flutter mobile application with Compare Both mode.",
        outcomes: "[PLACEHOLDER] Edit this section to describe how this artifact contributes to your CpE Student Outcomes. Reference the specific SO numbers from your course syllabus.",
        personalGoals: "[PLACEHOLDER] Edit this section to describe how developing this source code contributed to your personal development and engineering goals."
      },

      {
        id: "c313-a4",
        title: "Working Model Demo Video",
        type: "link",
        file: "https://www.youtube.com/watch?v=REPLACE_WITH_YOUR_LINK",
        // ↑ Replace with your actual YouTube or Google Drive link
        description: "A video demonstration of the lip condition classification mobile application, showcasing real-time classification of CHAPPED, HEALTHY, and MEDICAL lip conditions using the Flutter app.",
        outcomes: "[PLACEHOLDER] Edit this section to describe how this artifact contributes to your CpE Student Outcomes. Reference the specific SO numbers from your course syllabus.",
        personalGoals: "[PLACEHOLDER] Edit this section to describe how building and demonstrating this working model contributed to your personal development and engineering goals."
      }

    ]
  },

  // ── EGR C204: TECHNOPRENEURSHIP ─────────────────────────────
  {
    courseId: "egr-c204",
    courseCode: "EGR C204",
    courseTitle: "Technopreneurship",
    description: "An entrepreneurship course focused on developing technology-driven business solutions, from ideation and validation through pitching and business planning.",
    artifacts: [

      {
        id: "egr-a1",
        title: "Wadhwani Milestones 1 to 3",
        type: "pdf",
        file: "files/egr-wadhwani-milestones.pdf",
        // ↑ Replace with your actual PDF filename inside the /files/ folder
        description: "Compiled Wadhwani platform milestone submissions covering the business model, market research, financial projections, and viability analysis for the Himbing Ph sleep wind-down application.",
        outcomes: "[PLACEHOLDER] Edit this section to describe how this artifact contributes to your CpE Student Outcomes. Reference the specific SO numbers from your course syllabus.",
        personalGoals: "[PLACEHOLDER] Edit this section to describe how completing the Wadhwani milestones contributed to your personal development and entrepreneurial goals."
      },

      {
        id: "egr-a2",
        title: "MVP Demo",
        type: "link",
        file: "https://drive.google.com/REPLACE_WITH_YOUR_LINK",
        // ↑ Replace with your actual YouTube or Google Drive link
        description: "A demonstration of the Minimum Viable Product for Himbing Ph, a sleep wind-down mobile application targeting Filipino working professionals through guided journaling, task scheduling, and stretch routines.",
        outcomes: "[PLACEHOLDER] Edit this section to describe how this artifact contributes to your CpE Student Outcomes. Reference the specific SO numbers from your course syllabus.",
        personalGoals: "[PLACEHOLDER] Edit this section to describe how building and presenting this MVP contributed to your personal development and entrepreneurial goals."
      },

      {
        id: "egr-a3",
        title: "Final Pitch Deck",
        type: "pdf",
        file: "files/egr-final-pitch-deck.pdf",
        // ↑ Replace with your actual PDF filename inside the /files/ folder
        description: "The final presentation deck for Himbing Ph, covering the problem statement, solution, target market, business model, financial projections, and go-to-market strategy.",
        outcomes: "[PLACEHOLDER] Edit this section to describe how this artifact contributes to your CpE Student Outcomes. Reference the specific SO numbers from your course syllabus.",
        personalGoals: "[PLACEHOLDER] Edit this section to describe how preparing the final pitch deck contributed to your personal development and entrepreneurial goals."
      },

      {
        id: "egr-a4",
        title: "Video Pitch",
        type: "link",
        file: "https://www.youtube.com/watch?v=REPLACE_WITH_YOUR_LINK",
        // ↑ Replace with your actual YouTube or Google Drive link
        description: "A recorded video pitch presenting Himbing Ph to potential investors, summarizing the app's value proposition, market opportunity, and team capabilities.",
        outcomes: "[PLACEHOLDER] Edit this section to describe how this artifact contributes to your CpE Student Outcomes. Reference the specific SO numbers from your course syllabus.",
        personalGoals: "[PLACEHOLDER] Edit this section to describe how delivering this video pitch contributed to your personal development and entrepreneurial goals."
      }

    ]
  }

  // ── ADD A NEW COURSE BELOW THIS LINE ──────────────────────
  // Copy the template structure above and fill in your data.

];
