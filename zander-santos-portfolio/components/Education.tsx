const Education = () => {

  return (
    <section className="min-h-screen px-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-md uppercase text-neutral-400 mb-10">
          Education
        </h2>
        <div className="space-y-12">
          <div className="border-l border-neutral-200 pl-6">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-neutral-800 mb-1">
                Business Information Technology
              </h3>
              <p className="text-sm uppercase text-neutral-400 mb-4">
                Red River College Polytechnic • 2023 – 2026
              </p>
              <div className="space-y-5">

                <p className="text-sm leading-7 text-neutral-600 font-light">
                  Focused on the full software development lifecycle, enterprise application development, and modern web architecture,
                  this rigorous technical program combines C#/.NET Core development with full-stack web technologies including
                  JavaScript, HTML, CSS, PHP, API-driven systems, relational databases, and cloud-based infrastructure.
                  Maintained a <span className="block font-bold">4.3 GPA.</span>
                </p>

                <div className="pt-2 space-y-4">

                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                    <h4 className="text-xs uppercase font-semibold tracking-wide text-neutral-500 min-w-[140px]">
                      Backend
                    </h4>

                    <p className="text-sm text-neutral-600 font-light leading-6">
                      C#, .NET Core, ASP.NET, MVC Architecture, REST APIs,
                      Object-Oriented Design, Unit Testing,
                      Validation & Exception Handling
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                    <h4 className="text-xs uppercase font-semibold tracking-wide text-neutral-500 min-w-[140px]">
                      Frontend
                    </h4>

                    <p className="text-sm text-neutral-600 font-light leading-6">
                      JavaScript, HTML, CSS, PHP,
                      Responsive Design, Figma, Modern Web Architecture
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                    <h4 className="text-xs uppercase font-semibold tracking-wide text-neutral-500 min-w-[140px]">
                      Databases
                    </h4>

                    <p className="text-sm text-neutral-600 font-light leading-6">
                      PostgreSQL, MSSQL, MySQL, T-SQL,
                      Stored Procedures, Functions, Triggers, Relational Database Design
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                    <h4 className="text-xs uppercase font-semibold tracking-wide text-neutral-500 min-w-[140px]">
                      Infrastructure
                    </h4>

                    <p className="text-sm text-neutral-600 font-light leading-6">
                      Linux Server Administration, Azure, AWS,
                      PowerShell, CI/CD Principles
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                    <h4 className="text-xs uppercase font-semibold tracking-wide text-neutral-500 min-w-[140px]">
                      Foundations
                    </h4>

                    <p className="text-sm text-neutral-600 font-light leading-6">
                      Data Structures & Algorithms,
                      Runtime Analysis, Hash Tables,
                      Trees, Queues, Linked Lists,
                      Python, Ruby on Rails
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-neutral-700 mb-1">
                    Continuous Development
                  </h3>
                  <p className="text-sm uppercase text-neutral-400 mb-4">
                    Self-Paced Learning
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-sm text-neutral-600 font-light">
                      Angular Essential Training
                    </li>
                    <li className="text-sm text-neutral-600 font-light">
                      Node.js Essential Training
                    </li>
                    <li className="text-sm text-neutral-600 font-light">
                      Selenium Essential Training (Automated Testing)
                    </li>
                    <li className="text-sm text-neutral-600 font-light">
                      Microsoft Power Apps Essential Training
                    </li>
                    <li className="text-sm text-neutral-600 font-light">
                      Microsoft Power BI Essential Training
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
