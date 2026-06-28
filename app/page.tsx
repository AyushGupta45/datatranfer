"use client";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
     

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        {/* Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-green-600 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
            ILP Project · Full Stack
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-950 mb-5">
          Building a Course Enrollment & Fee Tracking System — From Mockups to Full Stack
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-500 leading-relaxed mb-8 font-sans font-normal">
          A detailed end-to-end breakdown of our ILP project: scenario, problems, proposed solution, roles, user flows, sprint planning, and design decisions — everything you need to reuse this for docs, PPT, or your portfolio.
        </p>

        {/* Author row */}
        <div className="flex items-center gap-4 py-4 border-t border-b border-gray-100">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm font-sans">
            ILP
          </div>
          <div className="font-sans text-sm">
            <p className="font-medium text-gray-900">ILP Team · BrightPath Project</p>
            <p className="text-gray-500">8 min read · Sprint 1–3 Breakdown</p>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="max-w-4xl mx-auto px-6 pb-24 space-y-16">

        {/* ── Section 1 ── */}
        <section>
          <SectionLabel number="1" label="Scenario" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What kind of institute are we solving for?</h2>
          <p className="text-lg text-gray-700 leading-8 mb-4">
            Imagine a training institute — a tech coaching center or EdTech hub — that offers multiple short-term courses: Web Development, Data Analytics, Python Programming, UI/UX, and more. They run different batches: weekdays, weekends, evening slots. Students join and pay fees in parts — an admission fee followed by installments.
          </p>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            The institute is growing. They now have hundreds of students, dozens of courses and batches, and multiple staff members at the front desk handling enrollments and collecting fees every day. But they still run everything using:
          </p>
          <ul className="space-y-3 mb-6 pl-1">
            {["Excel sheets", "Paper receipts", "WhatsApp messages and manual notes"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 text-lg leading-7">
                <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-gray-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Section 2 ── */}
        <section>
          <SectionLabel number="2" label="Problem" />
          <h2 className="text-2xl font-bold mb-6 text-gray-900">What exactly is going wrong?</h2>

          <Subsection title="2.1 Fragmented data">
            <p className="text-lg text-gray-700 leading-8 mb-4">
              Student details are stored in one sheet, course details in another, and payments in a third. There is no single source of truth. When someone asks <em>"How many students are enrolled in the Full Stack batch?"</em> or <em>"What is the pending fee for Ayush?"</em> — staff have to search across multiple sheets, manually sum up amounts, and hope there are no entry mistakes.
            </p>
          </Subsection>

          <Subsection title="2.2 Error-prone fee tracking">
            <p className="text-lg text-gray-700 leading-8 mb-3">
              Because payments happen in parts — admission fee plus installments — staff sometimes forget to update the correct sheet. Two staff members may update different versions. Pending amounts are miscalculated or outdated. This leads to:
            </p>
            <ul className="space-y-2 pl-1 mb-2">
              {[
                `Confusion with students ("But I already paid that amount!")`,
                "Difficulty generating defaulter or pending fee lists.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="mt-2.5 shrink-0 w-2 h-2 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Subsection>

          <Subsection title="2.3 No simple overview for management">
            <p className="text-lg text-gray-700 leading-8 mb-3">
              Institute owners want to see totals — number of students, courses, enrollments, how much fee has been collected vs. how much is pending, and which courses are most popular. Right now, to get these answers they ask staff to prepare summary Excel files and spend hours compiling data and charts.
            </p>
          </Subsection>
        </section>

        {/* ── Section 3 ── */}
        <section>
          <SectionLabel number="3" label="Proposed Solution" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The system we are building</h2>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            We propose a <strong>web-based Course Enrollment and Fee Tracking System</strong> that becomes the central system for managing students and courses, enrolling students into courses and batches, recording fee payments, and viewing summaries and reports — all in one place.
          </p>

          <Subsection title="3.1 High-level goals">
            <ul className="space-y-3 mb-2">
              {[
                "Replace scattered Excel sheets with a single database.",
                "Provide clean forms and flows for daily operations: Add student, Add course, Enroll student, Record payment.",
                "Offer dashboards and reports so admins can see totals and pending fees instantly.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-lg leading-7">
                  <span className="mt-2 shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center font-sans font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Subsection>

          <Subsection title="3.2 Key modules">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                { title: "Student Management", desc: "Store student profiles: name, contact, status." },
                { title: "Course Management", desc: "Store courses with name, description, duration, fee, batch info." },
                { title: "Enrollment Management", desc: "Link students to courses, with batch, enrollment date, and status (Active / Completed / Cancelled)." },
                { title: "Fee & Payment Management", desc: "Track total fee per enrollment, paid amount, pending. Record each payment transaction with date, amount, and mode." },
                { title: "Reports & Dashboard", desc: "Admin overview: total students, courses, enrollments, pending fees. Course-wise enrollments and defaulter list.", },
              ].map((mod) => (
                <div key={mod.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5 font-sans">
                  <p className="font-semibold text-gray-900 mb-1">{mod.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </Subsection>
        </section>

        {/* ── Dashboard mockup image ── */}
        <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <img
            src="/2.png"
            alt="Admin Dashboard mockup — BrightPath Training Institute"
            className="w-full"
            onError={(e) => {
              // fallback placeholder if image not found
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          
        </figure>

        {/* ── Section 4 ── */}
        <section>
          <SectionLabel number="4" label="System Roles" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Who uses this and what can they do?</h2>
          <p className="text-lg text-gray-700 leading-8 mb-8">We clearly define three user roles with distinct permissions and navigation structures.</p>

          <Subsection title="4.1 Admin">
            <p className="text-lg text-gray-700 leading-8 mb-4">
              <strong>Who:</strong> Institute owner / senior administrator. Main powers: configure courses and fee structures, create staff accounts and assign roles, and view all high-level reports and dashboards.
            </p>
            <p className="text-base font-sans font-semibold text-gray-600 mb-3">UI Navigation (based on mockups):</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm">
              {[
                { page: "Dashboard", items: "Cards: Total Students, Courses, Enrollments, Pending Fees. Enrollment chart, Pending Fees overview, Recent Enrollments table." },
                { page: "Students", items: "Student List with search & filter. Add/Edit Student screen." },
                { page: "Courses", items: "Course List. Add/Edit Course: name, fee, duration, batch details." },
                { page: "Enrollments", items: "Enrollment List: Student, Course, Batch, Total Fee, Paid, Pending, Status." },
                { page: "Payments", items: "Payment Summary / Payment History." },
                { page: "Configuration", items: "Fee Setup. Users & Roles." },
              ].map((row) => (
                <div key={row.page} className="border border-gray-200 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">{row.page}</p>
                  <p className="text-gray-600 leading-relaxed">{row.items}</p>
                </div>
              ))}
            </div>
          </Subsection>

          <Subsection title="4.2 Staff / Course Manager">
            <p className="text-lg text-gray-700 leading-8 mb-4">
              <strong>Who:</strong> Front-desk staff or course coordinator. Main powers: manage student records day-to-day, enroll students into courses, and record payments when students pay.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm">
              {[
                { page: "Dashboard", items: "Summary tiles: total students, enrollments, fee, pending. Quick action tiles: Add Student, Enroll Student, Record Payment." },
                { page: "Students", items: "Student List with view/edit/delete. Add Student form." },
                { page: "Enrollments", items: "Enroll Student screen: Select Student, Select Course, Select Batch, confirm fee. Enrollment List with status." },
                { page: "Payments", items: "Record Payment: select enrollment, enter amount + mode + date + notes. Payment History per enrollment." },
              ].map((row) => (
                <div key={row.page} className="border border-gray-200 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">{row.page}</p>
                  <p className="text-gray-600 leading-relaxed">{row.items}</p>
                </div>
              ))}
            </div>
          </Subsection>

          <Subsection title="4.3 Student (Optional Portal)">
            <p className="text-lg text-gray-700 leading-8">
              For ILP, this can be a simple read-only view. Students log in to see <strong>My Courses</strong> (enrolled courses and status) and <strong>My Fees</strong> (total fee, paid amount, pending amount). Even if you don't fully implement login for Sprint 1, designing this role makes your system feel complete.
            </p>
          </Subsection>
        </section>

        {/* ── Staff dashboard image ── */}
        <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
           <img
            src="/4.png"
            alt="Staff / Course Manager view: dashboard, Add Student form, Enroll Student, Record Payment, and all list screens combined."
            className="w-full"
            onError={(e) => {
              // fallback placeholder if image not found
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          
        
        </figure>

        {/* ── Section 5 ── */}
        <section>
          <SectionLabel number="5" label="User Flows" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">How the system actually flows in real life</h2>
          <p className="text-lg text-gray-700 leading-8 mb-8">
            Let's walk through a full user journey step-by-step — from setting up the institute to viewing pending fees.
          </p>

          <div className="space-y-6">
            {[
              {
                step: "5.1",
                title: "Setting up the institute (Admin)",
                steps: [
                  "Admin logs in.",
                  'Opens "Courses" → Add Course.',
                  "Fills: Course Name (Full Stack Web Dev), Duration (6 months), Base Fee (₹45,000), Batch (Weekend / May 2025), etc.",
                  "Saves. Now this course appears in dropdowns for enrollment.",
                ],
              },
              {
                step: "5.2",
                title: "Adding a new student (Staff)",
                steps: [
                  "Student walks in, wants to join Full Stack course.",
                  'Staff logs in → "Students" → Add Student.',
                  "Fills: Name, Email, Phone, DOB, Address, maybe notes.",
                  "Saves. Student gets a unique student ID (e.g., STU008).",
                ],
              },
              {
                step: "5.3",
                title: "Enrolling the student into a course (Staff)",
                steps: [
                  'Staff goes to "Enroll Student".',
                  "Selects Student: STU008 (Ayush), Course: Full Stack Web Development, Batch: Weekend May 2025.",
                  'System shows default total fee (₹45,000). Staff confirms and clicks "Enroll Student".',
                  "System creates Enrollment EN0010 with Total Fee = ₹45,000; Paid = 0; Pending = ₹45,000; Status = Active.",
                ],
              },
              {
                step: "5.4",
                title: "Recording fee payment (Staff)",
                steps: [
                  "Student pays ₹15,000 admission fee.",
                  'Staff opens "Record Payment" and selects Enrollment EN0010.',
                  "System shows: Total Fee: 45,000 | Amount Paid: 0 | Amount Pending: 45,000.",
                  'Staff enters: Amount Paid Now: 15,000 · Payment Mode: Cash · Notes: "Admission payment".',
                  "Saves. System updates Paid = 15,000, Pending = 30,000. A Payment record is created.",
                ],
              },
              {
                step: "5.5",
                title: "Viewing pending fees (Admin)",
                steps: [
                  "Admin logs in.",
                  'Opens Dashboard or "Pending Fees" report.',
                  "Sees list of students with Pending > 0, including Ayush with ₹30,000 pending.",
                  "Admin can filter by course or batch and export if needed.",
                ],
              },
            ].map((flow) => (
              <div key={flow.step} className="border-l-4 border-blue-200 pl-6 py-1">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-blue-500 mb-1">{flow.step}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{flow.title}</h3>
                <ol className="space-y-2">
                  {flow.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-7">
                      <span className="font-sans text-xs font-bold text-gray-400 mt-1 w-4 shrink-0">{i + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* ── EduTrack mockup image ── */}
        <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <img
            src="/3.png"
            alt="EduTrack Institute: Admin dashboard showing enrollment overview chart, pending fees donut by age bracket, and top courses by enrollment count"
            className="w-full"
            onError={(e) => {
              // fallback placeholder if image not found
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </figure>

        {/* ── Section 6 ── */}
        <section>
          <SectionLabel number="6" label="Sprint Mapping" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Mapping this to your three ILP sprints</h2>
          <p className="text-lg text-gray-700 leading-8 mb-8">
            Three sprints, each with a clear deliverable that builds on the last.
          </p>

          <div className="space-y-8">
            <SprintCard
              sprint="Sprint 1"
              color="bg-purple-50 border-purple-200"
              accent="text-purple-600"
              title="UI Mockups (HTML/CSS/JS)"
              objective="Show screens and navigation; prove you understand the system."
              items={[
                "Full layout: sidebar + top bar + content area (like your mockups).",
                "Static pages: Admin Dashboard (cards, charts placeholder, tables), Student List + Add/Edit form, Course List + Add/Edit form, Enroll Student form, Record Payment form, Enrollment List, Payment History, Pending Fees report.",
                "Basic UX: buttons to navigate between pages, dummy data in tables (hardcoded).",
                "No backend yet — focus on structure and clarity.",
              ]}
            />
            <SprintCard
              sprint="Sprint 2"
              color="bg-blue-50 border-blue-200"
              accent="text-blue-600"
              title="Core Java Console App"
              objective="Make the business logic work without worrying about web or CSS."
              items={[
                "Classes: Student, Course, Enrollment, Payment.",
                "Data storage: ArrayList<Student>, ArrayList<Course>, ArrayList<Enrollment>, ArrayList<Payment>.",
                "Console menu: Add Student · Add Course · Enroll Student to Course · Record Payment · Show All Enrollments · Show Pending Fees · Exit.",
                "Proves logic is correct and aligns with the real-life flow before adding a UI layer.",
              ]}
            />
            <SprintCard
              sprint="Sprint 3"
              color="bg-green-50 border-green-200"
              accent="text-green-600"
              title="Full Stack Web Implementation"
              objective="Bring UI + logic + database together into one web app."
              items={[
                "Backend: Controllers/Servlets for Students, Courses, Enrollments, Payments. DAOs using JDBC or JPA/Hibernate → MySQL.",
                "Service layer: addStudent(), addCourse(), enrollStudent(), recordPayment(), getPendingFees(), etc.",
                "Database: students · courses · enrollments · payments tables with proper FK relationships.",
                "Frontend integration: Connect Sprint 1 HTML forms to backend endpoints.",
                "Dashboard & Reports: Use DB queries to compute counts and pending amounts, display inside dashboard cards/charts.",
              ]}
            />
          </div>
        </section>

        {/* DB Schema callout */}
        <div className="bg-gray-950 text-gray-100 rounded-2xl p-8 font-mono text-sm leading-7 overflow-x-auto">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-sans">Database Schema (Sprint 3)</p>
          <p><span className="text-yellow-400">students</span><span className="text-gray-400">(id, name, email, phone, status, created_at)</span></p>
          <p><span className="text-yellow-400">courses</span><span className="text-gray-400">(id, name, description, duration, fee, batch)</span></p>
          <p><span className="text-yellow-400">enrollments</span><span className="text-gray-400">(id, student_id, course_id, batch, enrollment_date,</span></p>
          <p className="pl-10 text-gray-400">total_fee, paid_amount, pending_amount, status)</p>
          <p><span className="text-yellow-400">payments</span><span className="text-gray-400">(id, enrollment_id, amount, date, mode, reference, notes)</span></p>
        </div>

        {/* ── Staff all screens image ── */}
        <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <img
            src="/1.png"
            alt="Staff / Course Manager view: all screens combined — dashboard, Add Student form, Enroll Student, Record Payment, and lists"
            className="w-full"
            onError={(e) => {
              // fallback placeholder if image not found
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </figure>

        {/* ── Section 7 ── */}
        <section>
          <SectionLabel number="7" label="Design Considerations" />
          <h2 className="text-2xl font-bold mb-6 text-gray-900">For ILP documentation</h2>

          <Subsection title="7.1 Architecture">
            <p className="text-lg text-gray-700 leading-8 mb-4">
              The system follows a clean <strong>layered architecture</strong>:
            </p>
            <div className="flex flex-col gap-0 font-sans text-sm">
              {[
                { layer: "Presentation", detail: "HTML/JS or Angular", color: "bg-purple-100 border-purple-300" },
                { layer: "Controller", detail: "Spring MVC / Servlets", color: "bg-blue-100 border-blue-300" },
                { layer: "Service", detail: "Business logic for enrollments and fee calculations", color: "bg-teal-100 border-teal-300" },
                { layer: "DAO", detail: "Database access (JDBC/JPA) → MySQL", color: "bg-green-100 border-green-300" },
              ].map((l, i) => (
                <div key={l.layer} className={`border ${l.color} px-5 py-3 ${i === 0 ? "rounded-t-xl" : ""} ${i === 3 ? "rounded-b-xl" : ""} flex items-center gap-4`}>
                  <span className="font-bold text-gray-900 w-28 shrink-0">{l.layer} Layer</span>
                  <span className="text-gray-600">{l.detail}</span>
                </div>
              ))}
            </div>
          </Subsection>

          {/* <Subsection title="7.2 Why this is resume-worthy">
            <p className="text-lg text-gray-700 leading-8 mb-4">
              You can honestly say in your resume and portfolio:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-6 py-2 text-gray-700 text-lg leading-8 italic">
              Led a 6-member team to build a Course Enrollment and Fee Tracking System for a training institute. Implemented role-based flows for Admin and Staff, end-to-end enrollment and payments with pending fee calculations, and dashboards summarizing institute performance. Used Java (OOP, collections, JDBC), MySQL, and web technologies to build a real-world-style system.
            </blockquote>
          </Subsection> */}
        </section>

        {/* Footer divider */}
        <div className="border-t border-gray-200 pt-10 font-sans">
          <p className="text-gray-400 text-sm text-center">
            ILP Project Documentation · BrightPath Training Institute · Course Enrollment & Fee Tracking System
          </p>
        </div>
      </article>
    </div>
  );
}

/* ── Helper Components ── */

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest">Section {number}</span>
      <span className="flex-1 h-px bg-gray-200" />
      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
        {label}
      </span>
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function SprintCard({
  sprint,
  color,
  accent,
  title,
  objective,
  items,
}: {
  sprint: string;
  color: string;
  accent: string;
  title: string;
  objective: string;
  items: string[];
}) {
  return (
    <div className={`border rounded-2xl p-7 ${color} font-sans`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-xs font-bold uppercase tracking-widest ${accent}`}>{sprint}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Objective:</strong> {objective}
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-6">
            <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${accent.replace("text-", "bg-")}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MockupPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center py-24 px-8 text-center">
      <div>
        <div className="text-4xl mb-3">🖥️</div>
        <p className="text-sm text-gray-500 font-sans max-w-sm leading-relaxed">{label}</p>
        <p className="text-xs text-gray-400 font-sans mt-2">Replace with your actual screenshot image</p>
      </div>
    </div>
  );
}