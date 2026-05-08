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
    courseTitle: "Artificial Intelligence 1",
    description: "Study of image acquisition, processing techniques, and intelligent classification systems using convolutional neural networks and transfer learning.",
    artifacts: [

      {
        id: "c313-a1",
        title: "Compilation of Lab Activities",
        type: "pdf",
        file: "files/cpe313-lab-compilation.pdf",
        // ↑ Replace with your actual PDF filename inside the /files/ folder
        description: "A compiled collection of all laboratory activities completed throughout the course, covering image processing techniques, feature extraction, and model training exercises.",
        outcomes: "This artifact addresses SO (a) by applying mathematical and engineering principles in understanding AI concepts, and SO (b) through hands-on experiments involving data preparation and result analysis. It also supports SO (k) by requiring the use of modern tools such as TensorFlow and Keras in practical image processing tasks.",
        personalGoals: "Working through each lab activity built my understanding of AI and feature engineering from the ground up. Each activity pushed me to figure out concepts on my own before the bigger project, which made me more confident in tackling complex problems independently."
      },

      {
        id: "c313-a2",
        title: "Journal Article",
        type: "pdf",
        file: "files/cpe313-journal-article.pdf",
        // ↑ Replace with your actual PDF filename inside the /files/ folder
        description: "A journal article reviewing relevant literature and research related to the course project on lip condition classification using convolutional neural networks.",
        outcomes: "This artifact addresses SO (g) by developing the ability to communicate technical findings clearly in writing, and SO (h) by examining how the project connects to real-world health concerns. It also supports SO (j) by engaging with contemporary issues in AI-based diagnostic tools.",
        personalGoals: "Writing the journal article sharpened my ability to structure technical ideas and relate them to actual problems people face. It taught me that engineering work is more meaningful when it is grounded in context beyond just the code."
      },

      {
        id: "c313-a3",
        title: "AI Project Source Code",
        type: "pdf",
        file: "files/cpe313-source-code.pdf",
        // ↑ Replace with your actual PDF filename inside the /files/ folder
        description: "Complete source code for the lip condition classification system, including the vanilla CNN model, EfficientNetB0 transfer learning model, and Flutter mobile application with Compare Both mode.",
        outcomes: "This artifact addresses SO (c) by designing a complete system to meet a defined classification need within practical constraints, and SO (e) by identifying and solving engineering problems throughout the development process. It also supports SO (k) through the use of deep learning frameworks and mobile deployment tools.",
        personalGoals: "Building the source code from scratch gave me a real sense of what it takes to make an AI system work end to end. The process was full of trial and error, and getting through those struggles made me a more patient and resourceful engineer."
      },

      {
        id: "c313-a4",
        title: "Working Model Demo Video",
        type: "link",
        file: "https://drive.google.com/file/d/1-pOungJ1INIvkl2VOH7VH6rLr4iDO0eF/view?usp=drive_link",
        // ↑ Replace with your actual YouTube or Google Drive link
        description: "A video demonstration of the lip condition classification mobile application, showcasing real-time classification of CHAPPED, HEALTHY, and MEDICAL lip conditions using the Flutter app.",
        outcomes: "This artifact addresses SO (g) by practicing oral communication in presenting a technical project clearly to an audience, and SO (d) by working collaboratively as a team to produce and present the final output.",
        personalGoals: "Presenting the demo pushed me to explain our work in a way that anyone could understand, not just people with a technical background. It helped me realize that being able to communicate what you built is just as important as building it well."
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
		description: "Compiled Wadhwani platform milestone submissions covering the business model, market research, financial projections, and viability analysis for the Himbing Ph sleep wind-down application.",
		outcomes: "This artifact addresses SO (e) by identifying and working through real entrepreneurial problems that required structured thinking and validation, and SO (j) by engaging with contemporary issues in technology-driven business. It also supports SO (l) by developing the ability to manage and prioritize competing ideas within a team setting.",
		personalGoals: "Going through the Wadhwani milestones exposed me to how technopreneurship actually works in practice. It taught me how to take an idea seriously enough to test it, question it, and refine it rather than just running with the first thing that came to mind."
	  },

	  {
		id: "egr-a2",
		title: "MVP Demo",
		type: "link",
		file: "https://drive.google.com/drive/folders/1qeCfxKxwF5XV6HmOrUfM2HRIxiouAH48?usp=drive_link",
		description: "A demonstration of the Minimum Viable Product for Himbing Ph, a sleep wind-down mobile application targeting Filipino working professionals through guided journaling, task scheduling, and stretch routines.",
		outcomes: "This artifact addresses SO (c) by translating a business concept into a working product prototype within real-world constraints, and SO (g) by presenting the product clearly to an audience. It also supports SO (h) by recognizing the broader societal need that the product aims to address.",
		personalGoals: "Demoing the MVP made me realize how big the gap is between having an idea and actually making something people can use. It pushed me to be a better presenter and a more realistic thinker when it comes to what a product can and cannot do at a given stage."
	  },

	  {
		id: "egr-a3",
		title: "Final Pitch Deck",
		type: "pdf",
		file: "files/egr-final-pitch-deck.pdf",
		description: "The final presentation deck for Himbing Ph, covering the problem statement, solution, target market, business model, financial projections, and go-to-market strategy.",
		outcomes: "This artifact addresses SO (g) by consolidating complex information into a clear and structured written format, and SO (l) by applying project management and leadership principles in bringing together all aspects of the venture. It also supports SO (k) through hands-on use of design and presentation tools to produce a professional output.",
		personalGoals: "Putting the pitch deck together gave me a clear picture of everything I had learned throughout the course in one place. It was one of the few times where I felt the learning was truly hands-on because I was building something real rather than just studying concepts."
	  },

	  {
		id: "egr-a4",
		title: "Video Pitch",
		type: "link",
		file: "https://drive.google.com/file/d/1ZaproS32DEGBhlXlpShisXhGjeSWGNLs/view?usp=sharing",
		description: "A recorded video pitch presenting Himbing Ph to potential investors, summarizing the app's value proposition, market opportunity, and team capabilities.",
		outcomes: "This artifact addresses SO (g) by communicating the product's value through a compelling oral and visual presentation, and SO (h) by framing the product within the context of a genuine societal need among Filipino working professionals.",
		personalGoals: "Making the video pitch pushed me to be creative in how I communicate value. It was not just about reciting facts but about genuinely convincing someone that what we built matters, and that challenge made me think more carefully about storytelling and delivery."
	  }

	]
  }

  // ── ADD A NEW COURSE BELOW THIS LINE ──────────────────────
  // Copy the template structure above and fill in your data.

];