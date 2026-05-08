// ─────────────────────────────────────────────────────────────
//  achievements.js  —  Your competitions and certificates data
//
//  HOW TO ADD A NEW ACHIEVEMENT:
//  1. Add a new object to the achievementsData array below
//  2. Set the "title", "type", and "file" fields
//  3. The page renders it automatically — no HTML changes needed.
//
//  TYPE OPTIONS:
//    "img"  — an image file (jpg, png, etc.)
//    "pdf"  — a PDF file
//    "link" — an external URL (Google Drive, website, etc.)
//
//  FILE PATHS:
//    For images: put file in assets/img/achievements/ and set file: "assets/img/achievements/your-image.jpg"
//    For PDFs:   put file in files/ and set file: "files/your-certificate.pdf"
//    For links:  set file: "https://your-link-here.com"
// ─────────────────────────────────────────────────────────────

const achievementsData = [
  {
    title: "Java Certification",
    type: "pdf",
    file: "files/java-cert.pdf"
  },
  {
    title: "FCC Relational Database Certification",
    type: "img",
    file: "assets/img/achievements/FCC.PNG"
  },
  {
    title: "ICPEP CPE Challenge Python Programming Competition",
    type: "link",
    file: "https://www.facebook.com/photo/?fbid=1405464181596318&set=a.461573555985390"
  },
  {
    title: "AWS ML AI Badge",
    type: "img",
    file: "assets/img/achievements/ai-badge.png"
  },
  {
    title: "AWS ML AI Certificate",
    type: "pdf",
    file: "files/ml-ai-cert.pdf"
  }
];