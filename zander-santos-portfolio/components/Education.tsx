const Education = () => {

  return (
    <section id="education" className="min-h-screen flex items-center px-8 py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-10">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-md uppercase tracking-[0.2em] font-medium">
            Education
          </span>

          <div className="space-y-6">
            <div className="border-2 border-neutral-200 bg-white rounded-2xl p-8 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex flex-col flex-row items-start justify-between gap-3 mb-4">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  Business Information Technology
                </h3>
                <span className="text-sm uppercase tracking-wider text-neutral-500 bg-neutral-100 px-4 py-2 rounded-full">
                  2023 – 2026
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-neutral-500 uppercase tracking-wide mb-3">
                  Red River College Polytechnic
                </p>
                <p className="text-base leading-relaxed text-neutral-600 font-light">
                  Focused on software development lifecycle practices, enterprise application development, and modern web architecture.
                  Coursework emphasized C#/.NET Core and ASP.NET development alongside full-stack web technologies including JavaScript,
                  HTML, and CSS. Experience working with relational databases including PostgreSQL, MSSQL, and MySQL, as well as
                  cloud and infrastructure technologies such as AWS, Azure, Linux, and PowerShell. Additional exposure to API-driven systems,
                  software testing, and development workflows. Maintained a <span className="font-semibold text-neutral-900">4.3 GPA.</span>
                  Maintained a <span className="font-semibold text-neutral-900">4.3 GPA.</span>
                </p>
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h4 className="text-md uppercase font-semibold tracking-wide text-blue-600 mb-2">
                      Backend
                    </h4>

                    <p className="text-md text-neutral-600 font-light">
                      C#, .NET Core, ASP.NET, Node.js, REST APIs, Unit Testing,
                    </p>
                  </div>

                  <div>
                    <h4 className="text-md uppercase font-semibold tracking-wide text-blue-600 mb-2">
                      Frontend
                    </h4>

                    <p className="text-md text-neutral-600 font-light">
                      JavaScript, HTML5, CSS3, Figma
                    </p>
                  </div>

                  <div>
                    <h4 className="text-md uppercase font-semibold tracking-wide text-blue-600 mb-2">
                      Databases
                    </h4>

                    <p className="text-md text-neutral-600 font-light">
                      PostgreSQL, MSSQL, MySQL, MongoDB
                    </p>
                  </div>

                  <div>
                    <h4 className="text-md uppercase font-semibold tracking-wide text-blue-600 mb-2">
                      Infrastructure
                    </h4>

                    <p className="text-md text-neutral-600 font-light">
                      AWS, Azure, Linux, PowerShell
                    </p>
                  </div>

                  <div>
                    <h4 className="text-md uppercase font-semibold tracking-wide text-blue-600 mb-2">
                      Additional Coursework
                    </h4>

                    <p className="text-md text-neutral-600 font-light">
                      Data Structures & Algorithms, Python, PHP, Ruby on Rails
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex flex-col flex-row items-start justify-between gap-3 mb-4">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  Continuous Development
                </h3>
                <span className="text-sm uppercase text-neutral-500 bg-neutral-100 px-4 py-2 rounded-full">
                  Self-Paced Learning
                </span>
              </div>

              <h3 className="text-md uppercase font-semibold tracking-wide text-blue-600 mb-2">
                LinkedIn Learning
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-md text-neutral-600 font-light">
                    Angular Essential Training
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-md text-neutral-600 font-light">
                    Node.js Essential Training
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                    <span className="text-md text-neutral-600 font-light">
                      Selenium Essential Training
                    </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-md text-neutral-600 font-light">
                    Microsoft Power Apps
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-md text-neutral-600 font-light">
                    Microsoft Power BI
                  </span>
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
