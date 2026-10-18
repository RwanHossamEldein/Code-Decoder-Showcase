import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ShotKey } from "./shots";

export type Lang = "en" | "ar";

type Item = { t: string; d: string };
type Feature = Item & { icon: string; shot?: ShotKey };

const en = {
  nav: { home: "Home", features: "Features", showcase: "Showcase", about: "About", contact: "Contact & Feedback", cta: "Explore Features", menu: "Menu", lang: "العربية" },
  hero: {
    eyebrow: "AI-powered code understanding",
    title1: "Understand Code.",
    title2: "Visualize Logic.",
    title3: "Learn Smarter.",
    desc: "CodeDecoder uses AI to transform complex code into clear explanations, interactive visualizations, debugging insights, and practical learning experiences.",
    primary: "Explore CodeDecoder",
    secondary: "View Features",
    contact: "Have feedback? Contact us",
  },
  intro: {
    kicker: "What is CodeDecoder",
    title: "Your programming assistant for reading code, not just writing it.",
    body: "Paste a snippet, upload a file, or snap a photo of code. CodeDecoder explains it line by line, visualizes how it runs, points out errors, suggests fixes, predicts the output, and breaks down its time and space complexity — in English or Arabic.",
  },
  highlights: {
    kicker: "Key features",
    title: "Everything you need to understand source code",
    items: [
      { t: "AI code explanation", d: "Line-by-line breakdowns or a general summary of what the code does." },
      { t: "Code visualization", d: "Step-by-step animations that show how logic and data move." },
      { t: "Debugging insights", d: "Detect errors, understand why they happen, and get corrected code." },
      { t: "Complexity analysis", d: "See time and space complexity explained in plain language." },
    ] as Item[],
  },
  preview: { kicker: "Product preview", title: "A focused interface built for clarity", body: "Switch between the Visualizer, Code Editor, and AI Explanation in one tap.", cta: "Open the showcase" },
  how: {
    kicker: "How it works",
    title: "From confusing code to clear understanding in four steps",
    steps: [
      { t: "Add your code", d: "Enter, paste, or upload a code file or an image of code." },
      { t: "Choose the analysis", d: "Pick line-by-line, general explanation, visualization, or more." },
      { t: "Let CodeDecoder process it", d: "The AI reads your code and prepares the results." },
      { t: "Explore the results", d: "Review explanations, visualizations, errors, fixes, outputs, and complexity." },
    ] as Item[],
  },
  benefits: {
    kicker: "Benefits",
    title: "Why people use CodeDecoder",
    items: [
      { t: "Learn faster", d: "Turn unfamiliar code into explanations you can follow." },
      { t: "Debug with confidence", d: "Understand what went wrong before applying a fix." },
      { t: "Think in algorithms", d: "Watch classic algorithms run step by step." },
      { t: "Learn in your language", d: "Full Arabic and English support." },
    ] as Item[],
  },
  workflows: {
    kicker: "Supported workflows",
    title: "Fits the way you work with code",
    items: [
      { t: "Paste & explain", d: "Drop a snippet into the editor and ask for an explanation." },
      { t: "Upload a file", d: "Analyze a full code file without copying it manually." },
      { t: "Snap a photo", d: "Upload an image of code from a screen, book, or slide." },
      { t: "Study algorithms", d: "Browse sorting algorithms with their complexity." },
      { t: "Revisit sessions", d: "Your history keeps every explanation for later." },
    ] as Item[],
  },
  final: { title: "Ready to decode your next line of code?", body: "Explore what CodeDecoder can do, or tell us what you'd like to see next.", primary: "Explore Features", secondary: "Contact & Feedback" },
  features: {
    kicker: "Features",
    title: "Built to make every line of code make sense",
    desc: "Explanations, visualizations, debugging and complexity analysis — designed around how people actually learn to read code.",
    groups: [
      { title: "Understand", items: [
        { icon: "brain", t: "AI-powered code explanations", d: "Get clear, human-readable explanations of what your code does and why.", shot: "mentor" },
        { icon: "list", t: "Line-by-line explanation", d: "Walk through each line to see exactly what it contributes.", shot: "editor" },
        { icon: "zap", t: "General code summaries", d: "Get the big picture of a snippet in a short, focused summary." },
      ] },
      { title: "Visualize", items: [
        { icon: "play", t: "Code visualization & animation", d: "See algorithms run step by step so the logic becomes visible.", shot: "algorithms" },
      ] },
      { title: "Debug", items: [
        { icon: "bug", t: "Error detection", d: "Spot mistakes in your code and understand where they come from." },
        { icon: "wrench", t: "Debugging assistance", d: "Get guidance on why an error happens and how to approach it." },
        { icon: "check", t: "Suggested corrected code", d: "Review a corrected version of your code side by side with the original." },
        { icon: "terminal", t: "Expected output analysis", d: "Find out what your code will print or return before you run it." },
      ] },
      { title: "Analyze", items: [
        { icon: "clock", t: "Time complexity analysis", d: "Understand how running time grows as the input grows." },
        { icon: "database", t: "Space complexity analysis", d: "See how much memory your solution needs as it scales." },
      ] },
      { title: "Input", items: [
        { icon: "file", t: "Code file uploads", d: "Upload a code file directly instead of copying and pasting.", shot: "editor" },
        { icon: "image", t: "Code image uploads", d: "Upload a photo or screenshot of code to analyze it." },
      ] },
      { title: "Personalize", items: [
        { icon: "languages", t: "Arabic and English support", d: "Use CodeDecoder and read explanations in Arabic or English." },
        { icon: "moon", t: "Light and dark themes", d: "Pick the look that's most comfortable for long study sessions." },
        { icon: "user", t: "Accounts & profile customization", d: "Sign in, personalize your profile, and keep your session history.", shot: "history" },
      ] },
    ] as { title: string; items: Feature[] }[],
  },
  showcase: {
    kicker: "Showcase",
    title: "A closer look at the CodeDecoder interface",
    desc: "Real screens from the app, grouped by the journey of understanding code. Tap any screen to view it full size.",
    groups: [
      { title: "Write & upload", shots: [{ key: "editor", t: "Code Editor", d: "Paste code or upload a file or image, then choose line-by-line or general explanation." }] },
      { title: "Get explanations", shots: [{ key: "mentor", t: "AI Mentor", d: "The AI Explanation tab, where your AI mentor is ready to guide you through your code." }] },
      { title: "Learn algorithms", shots: [{ key: "algorithms", t: "Algorithms library", d: "Searchable sorting algorithms with their time complexity at a glance." }] },
      { title: "Revisit your work", shots: [{ key: "history", t: "Session history", d: "Every session saved with its language, summary and timestamp." }] },
    ] as { title: string; shots: { key: ShotKey; t: string; d: string }[] }[],
    close: "Close",
    view: "View full size",
    prev: "Previous",
    next: "Next",
  },
  about: {
    kicker: "About",
    title: "Making code easier to understand",
    desc: "CodeDecoder exists for one reason: reading code shouldn't feel like decoding a puzzle.",
    problemT: "The problem",
    problem: "Code is written for machines first. Unfamiliar syntax, nested logic, recursion and hidden side effects make it hard to follow what a program actually does — especially when you're learning, reviewing someone else's work, or chasing a bug.",
    whyT: "Why it's hard",
    why: ["Logic is invisible until you trace it by hand.", "Error messages rarely explain the real cause.", "Complexity analysis requires experience to estimate.", "Most learning resources are English-only."],
    howT: "How CodeDecoder helps",
    how: "CodeDecoder combines AI explanations with visual, step-by-step walkthroughs. It detects errors, suggests corrections, predicts output, and explains complexity — so you can move from “what is this?” to “I get it” faster.",
    goalsT: "Our goals",
    goals: ["Make any piece of code approachable.", "Turn debugging into a learning moment.", "Support learners in their own language."],
    usersT: "Who it's for",
    users: ["Programming students", "Developers exploring unfamiliar code", "Educators explaining concepts", "Anyone curious about how code works"],
    principlesT: "Our principles",
    principles: [
      { t: "Clarity", d: "Explanations should be simple, direct and accurate." },
      { t: "Accessibility", d: "Bilingual, readable, and comfortable to use." },
      { t: "Practical learning", d: "Real code, real errors, real understanding." },
    ] as Item[],
    techT: "Technology",
    techD: "The confirmed technology stack behind CodeDecoder.",
    tech: ["Flutter", "Dart", "ASP.NET Core", "REST APIs", "AI integration", "Authentication & user management"],
  },
  contact: {
    kicker: "Contact & Feedback",
    title: "Help Us Make CodeDecoder Better",
    desc: "Have a question, found an issue, or have an idea that could improve CodeDecoder? We'd love to hear from you.",
    emailLabel: "Email",
    infoT: "Get in touch",
    name: "Full Name", email: "Email Address", type: "Message Type", message: "Message",
    attachment: "Screenshot", attachHint: "PNG or JPG, up to 5 MB. Useful for feedback and bug reports.",
    required: "Required", optional: "Optional",
    types: ["General Inquiry", "Feedback", "Bug Report", "Feature Suggestion", "Collaboration"],
    select: "Select a type",
    send: "Send Message", sending: "Sending…",
    privacy: "Your information will only be used to respond to your message and improve CodeDecoder. We will not share your details with third parties.",
    errors: { name: "Please enter your full name.", email: "Please enter a valid email address.", type: "Please choose a message type.", message: "Please write a message (at least 10 characters).", file: "Please attach a PNG or JPG image under 5 MB." },
    success: "Thanks! Your message has been sent. We'll get back to you soon.",
    failure: "We couldn't send your message right now. Your entries are kept — please try again, or email us directly at",
  },
  footer: { desc: "AI-powered code explanations, visualizations, debugging and complexity analysis.", nav: "Navigate", contact: "Contact", line: "Built to make code easier to understand.", rights: "© 2026 CodeDecoder. All rights reserved." },
};

type Dict = typeof en;

const ar: Dict = {
  nav: { home: "الرئيسية", features: "المميزات", showcase: "المعرض", about: "من نحن", contact: "التواصل والملاحظات", cta: "استكشف المميزات", menu: "القائمة", lang: "English" },
  hero: {
    eyebrow: "فهم الكود بالذكاء الاصطناعي",
    title1: "افهم الكود.",
    title2: "تصوّر المنطق.",
    title3: "تعلّم بذكاء.",
    desc: "يستخدم CodeDecoder الذكاء الاصطناعي لتحويل الكود المعقد إلى شروحات واضحة وتصورات تفاعلية ورؤى لتصحيح الأخطاء وتجارب تعلم عملية.",
    primary: "استكشف CodeDecoder",
    secondary: "عرض المميزات",
    contact: "لديك ملاحظات؟ تواصل معنا",
  },
  intro: {
    kicker: "ما هو CodeDecoder",
    title: "مساعدك البرمجي لقراءة الكود، وليس كتابته فقط.",
    body: "الصق مقطعًا برمجيًا، أو ارفع ملفًا، أو صوّر الكود. يشرح CodeDecoder الكود سطرًا بسطر، ويعرض طريقة تنفيذه، ويكشف الأخطاء، ويقترح الإصلاحات، ويتوقع المخرجات، ويحلل التعقيد الزمني والمكاني — بالعربية أو الإنجليزية.",
  },
  highlights: {
    kicker: "أبرز المميزات",
    title: "كل ما تحتاجه لفهم الكود المصدري",
    items: [
      { t: "شرح الكود بالذكاء الاصطناعي", d: "شرح سطرًا بسطر أو ملخص عام لما يفعله الكود." },
      { t: "تصوّر الكود", d: "رسوم متحركة خطوة بخطوة توضح حركة المنطق والبيانات." },
      { t: "رؤى تصحيح الأخطاء", d: "اكتشف الأخطاء وافهم أسبابها واحصل على كود مصحح." },
      { t: "تحليل التعقيد", d: "شاهد التعقيد الزمني والمكاني مشروحًا بلغة بسيطة." },
    ],
  },
  preview: { kicker: "معاينة المنتج", title: "واجهة مركّزة مصممة للوضوح", body: "تنقّل بين المُصوِّر ومحرر الكود وشرح الذكاء الاصطناعي بلمسة واحدة.", cta: "افتح المعرض" },
  how: {
    kicker: "كيف يعمل",
    title: "من كود محيّر إلى فهم واضح في أربع خطوات",
    steps: [
      { t: "أضف الكود", d: "اكتب أو الصق أو ارفع ملف كود أو صورة له." },
      { t: "اختر نوع التحليل", d: "سطرًا بسطر، شرح عام، تصوّر، والمزيد." },
      { t: "دع CodeDecoder يعالجه", d: "يقرأ الذكاء الاصطناعي الكود ويجهز النتائج." },
      { t: "استكشف النتائج", d: "راجع الشروحات والتصورات والأخطاء والإصلاحات والمخرجات والتعقيد." },
    ],
  },
  benefits: {
    kicker: "الفوائد",
    title: "لماذا يستخدم الناس CodeDecoder",
    items: [
      { t: "تعلّم أسرع", d: "حوّل الكود غير المألوف إلى شروحات يسهل متابعتها." },
      { t: "صحّح الأخطاء بثقة", d: "افهم الخطأ قبل تطبيق الإصلاح." },
      { t: "فكّر بالخوارزميات", d: "شاهد الخوارزميات الكلاسيكية تعمل خطوة بخطوة." },
      { t: "تعلّم بلغتك", d: "دعم كامل للعربية والإنجليزية." },
    ],
  },
  workflows: {
    kicker: "سيناريوهات الاستخدام",
    title: "يتناسب مع طريقتك في العمل",
    items: [
      { t: "الصق واشرح", d: "ضع المقطع في المحرر واطلب الشرح." },
      { t: "ارفع ملفًا", d: "حلّل ملف كود كامل دون نسخه يدويًا." },
      { t: "التقط صورة", d: "ارفع صورة لكود من شاشة أو كتاب أو عرض تقديمي." },
      { t: "ادرس الخوارزميات", d: "تصفح خوارزميات الترتيب مع تعقيدها." },
      { t: "ارجع لجلساتك", d: "يحتفظ السجل بكل شرح للرجوع إليه لاحقًا." },
    ],
  },
  final: { title: "مستعد لفك شفرة سطرك البرمجي القادم؟", body: "استكشف ما يمكن لـ CodeDecoder فعله، أو أخبرنا بما تود رؤيته لاحقًا.", primary: "استكشف المميزات", secondary: "التواصل والملاحظات" },
  features: {
    kicker: "المميزات",
    title: "مصمم ليجعل كل سطر برمجي مفهومًا",
    desc: "شروحات وتصورات وتصحيح أخطاء وتحليل تعقيد — مصممة وفق الطريقة التي يتعلم بها الناس قراءة الكود.",
    groups: [
      { title: "الفهم", items: [
        { icon: "brain", t: "شرح الكود بالذكاء الاصطناعي", d: "احصل على شرح واضح لما يفعله الكود ولماذا.", shot: "mentor" },
        { icon: "list", t: "شرح سطرًا بسطر", d: "تتبّع كل سطر لترى دوره بالضبط.", shot: "editor" },
        { icon: "zap", t: "ملخصات عامة للكود", d: "احصل على الصورة الكاملة في ملخص قصير ومركز." },
      ] },
      { title: "التصوّر", items: [
        { icon: "play", t: "تصوّر الكود وتحريكه", d: "شاهد الخوارزميات تعمل خطوة بخطوة ليصبح المنطق مرئيًا.", shot: "algorithms" },
      ] },
      { title: "تصحيح الأخطاء", items: [
        { icon: "bug", t: "اكتشاف الأخطاء", d: "اكتشف الأخطاء في الكود وافهم مصدرها." },
        { icon: "wrench", t: "المساعدة في التصحيح", d: "احصل على إرشاد حول سبب الخطأ وطريقة التعامل معه." },
        { icon: "check", t: "كود مصحح مقترح", d: "راجع نسخة مصححة من الكود بجانب الأصل." },
        { icon: "terminal", t: "تحليل المخرجات المتوقعة", d: "اعرف ما سيطبعه الكود أو يعيده قبل تشغيله." },
      ] },
      { title: "التحليل", items: [
        { icon: "clock", t: "تحليل التعقيد الزمني", d: "افهم كيف يزداد وقت التنفيذ مع زيادة المدخلات." },
        { icon: "database", t: "تحليل التعقيد المكاني", d: "اعرف مقدار الذاكرة التي يحتاجها الحل مع التوسع." },
      ] },
      { title: "الإدخال", items: [
        { icon: "file", t: "رفع ملفات الكود", d: "ارفع ملف الكود مباشرة بدلًا من النسخ واللصق.", shot: "editor" },
        { icon: "image", t: "رفع صور الكود", d: "ارفع صورة أو لقطة شاشة لكود لتحليله." },
      ] },
      { title: "التخصيص", items: [
        { icon: "languages", t: "دعم العربية والإنجليزية", d: "استخدم CodeDecoder واقرأ الشروحات بالعربية أو الإنجليزية." },
        { icon: "moon", t: "سمات فاتحة وداكنة", d: "اختر المظهر الأكثر راحة لجلسات الدراسة الطويلة." },
        { icon: "user", t: "الحسابات وتخصيص الملف الشخصي", d: "سجّل الدخول وخصّص ملفك واحتفظ بسجل جلساتك.", shot: "history" },
      ] },
    ],
  },
  showcase: {
    kicker: "المعرض",
    title: "نظرة أقرب على واجهة CodeDecoder",
    desc: "شاشات حقيقية من التطبيق مرتبة حسب رحلة فهم الكود. اضغط على أي شاشة لعرضها بالحجم الكامل.",
    groups: [
      { title: "اكتب وارفع", shots: [{ key: "editor", t: "محرر الكود", d: "الصق الكود أو ارفع ملفًا أو صورة، ثم اختر الشرح سطرًا بسطر أو الشرح العام." }] },
      { title: "احصل على الشرح", shots: [{ key: "mentor", t: "المرشد الذكي", d: "تبويب شرح الذكاء الاصطناعي حيث يستعد مرشدك لإرشادك خلال الكود." }] },
      { title: "تعلّم الخوارزميات", shots: [{ key: "algorithms", t: "مكتبة الخوارزميات", d: "خوارزميات ترتيب قابلة للبحث مع تعقيدها الزمني." }] },
      { title: "راجع عملك", shots: [{ key: "history", t: "سجل الجلسات", d: "كل جلسة محفوظة مع لغتها وملخصها ووقتها." }] },
    ],
    close: "إغلاق", view: "عرض بالحجم الكامل", prev: "السابق", next: "التالي",
  },
  about: {
    kicker: "من نحن",
    title: "نجعل الكود أسهل في الفهم",
    desc: "وُجد CodeDecoder لسبب واحد: قراءة الكود لا يجب أن تشبه حل لغز.",
    problemT: "المشكلة",
    problem: "يُكتب الكود للآلة أولًا. الصياغة غير المألوفة والمنطق المتداخل والاستدعاء الذاتي تجعل متابعة ما يفعله البرنامج صعبة — خاصة أثناء التعلم أو مراجعة عمل الآخرين أو تتبع خطأ.",
    whyT: "لماذا هو صعب",
    why: ["المنطق غير مرئي حتى تتتبعه يدويًا.", "رسائل الخطأ نادرًا ما تشرح السبب الحقيقي.", "تقدير التعقيد يحتاج إلى خبرة.", "معظم مصادر التعلم بالإنجليزية فقط."],
    howT: "كيف يساعد CodeDecoder",
    how: "يجمع CodeDecoder بين شروحات الذكاء الاصطناعي والعرض المرئي خطوة بخطوة. يكتشف الأخطاء ويقترح التصحيحات ويتوقع المخرجات ويشرح التعقيد — لتنتقل من «ما هذا؟» إلى «فهمت» بسرعة.",
    goalsT: "أهدافنا",
    goals: ["جعل أي كود سهل الفهم.", "تحويل تصحيح الأخطاء إلى فرصة للتعلم.", "دعم المتعلمين بلغتهم."],
    usersT: "لمن هو",
    users: ["طلاب البرمجة", "المطورون الذين يستكشفون كودًا جديدًا", "المعلمون عند شرح المفاهيم", "كل من يرغب في فهم كيفية عمل الكود"],
    principlesT: "مبادئنا",
    principles: [
      { t: "الوضوح", d: "شروحات بسيطة ومباشرة ودقيقة." },
      { t: "سهولة الوصول", d: "ثنائي اللغة، مقروء، ومريح في الاستخدام." },
      { t: "التعلم العملي", d: "كود حقيقي، أخطاء حقيقية، فهم حقيقي." },
    ],
    techT: "التقنيات",
    techD: "التقنيات المعتمدة التي يقوم عليها CodeDecoder.",
    tech: ["Flutter", "Dart", "ASP.NET Core", "REST APIs", "تكامل الذكاء الاصطناعي", "المصادقة وإدارة المستخدمين"],
  },
  contact: {
    kicker: "التواصل والملاحظات",
    title: "ساعدنا في تحسين CodeDecoder",
    desc: "لديك سؤال، أو وجدت مشكلة، أو لديك فكرة لتحسين CodeDecoder؟ يسعدنا أن نسمع منك.",
    emailLabel: "البريد الإلكتروني",
    infoT: "تواصل معنا",
    name: "الاسم الكامل", email: "البريد الإلكتروني", type: "نوع الرسالة", message: "الرسالة",
    attachment: "لقطة شاشة", attachHint: "PNG أو JPG حتى 5 ميجابايت. مفيدة للملاحظات والإبلاغ عن الأخطاء.",
    required: "مطلوب", optional: "اختياري",
    types: ["استفسار عام", "ملاحظات", "الإبلاغ عن خطأ", "اقتراح ميزة", "تعاون"],
    select: "اختر النوع",
    send: "إرسال الرسالة", sending: "جارٍ الإرسال…",
    privacy: "ستُستخدم معلوماتك فقط للرد على رسالتك وتحسين CodeDecoder. لن نشارك بياناتك مع أي طرف ثالث.",
    errors: { name: "يرجى إدخال اسمك الكامل.", email: "يرجى إدخال بريد إلكتروني صحيح.", type: "يرجى اختيار نوع الرسالة.", message: "يرجى كتابة رسالة (10 أحرف على الأقل).", file: "يرجى إرفاق صورة PNG أو JPG أقل من 5 ميجابايت." },
    success: "شكرًا! تم إرسال رسالتك وسنرد عليك قريبًا.",
    failure: "تعذّر إرسال رسالتك الآن. تم الاحتفاظ بما أدخلته — حاول مرة أخرى أو راسلنا مباشرة على",
  },
  footer: { desc: "شروحات وتصورات وتصحيح أخطاء وتحليل تعقيد للكود بالذكاء الاصطناعي.", nav: "التنقل", contact: "التواصل", line: "صُمم ليجعل الكود أسهل في الفهم.", rights: "© 2026 CodeDecoder. جميع الحقوق محفوظة." },
};

const dicts = { en, ar };
const Ctx = createContext<{ lang: Lang; t: Dict; toggle: () => void }>({ lang: "en", t: en, toggle: () => {} });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("cd-lang");
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("cd-lang", lang);
  }, [lang]);
  return <Ctx.Provider value={{ lang, t: dicts[lang], toggle: () => setLang((l) => (l === "en" ? "ar" : "en")) }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
export const SUPPORT_EMAIL = "supportcodedecoder@gmail.com";
