const Education = () => {

  return (
    <section id="education" className="min-h-screen flex items-center px-10 pt-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-12">
          <span className="inline-block px-5 py-2 bg-white text-black rounded-full text-md uppercase tracking-[0.2em] font-bold mb-8">
            Education
          </span>

          <div className="space-y-8">
            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  Business Information Technology
                </h3>
                <span className="text-sm uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-200 px-4 py-2 rounded-full whitespace-nowrap font-medium">
                  2023 – 2026
                </span>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-cyan-600">
                  Red River College Polytechnic
                </p>
                <p className="text-base leading-relaxed text-gray-700 mb-4">
                  Focused on software development lifecycle practices, enterprise application development, and modern web architecture.
                  Coursework emphasized C#/.NET Core and ASP.NET development alongside full-stack web technologies including JavaScript,
                  HTML, and CSS. Experience working with relational databases including PostgreSQL, MSSQL, and MySQL, as well as
                  cloud and infrastructure technologies such as AWS, Azure, Linux, and PowerShell. Additional exposure to API-driven systems,
                  software testing, and development workflows. Maintained a <span className="font-semibold text-neutral-900">4.3 GPA.</span>
                </p>
              </div>

              <div className="pt-4 border-t border-cyan-200">
                <div className="grid grid-cols-2 gap-4 items-start">
                  <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Backend:
                      </h4>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        C#
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        .NET Core
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        ASP.NET
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        Node.js
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        REST APIs
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        Unit Testing
                      </span>
                    </div>
                  </div>

                  <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Frontend
                      </h4>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        JavaScript
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        HTML5
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        CSS3
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        Figma
                      </span>
                    </div>
                  </div>

                  <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Databases
                      </h4>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        PostgreSQL
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        MSSQL
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        MySQL
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        MongoDB
                      </span>
                    </div>
                  </div>

                  <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Infrastructure
                      </h4>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        AWS
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        Azure
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        Linux
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        PowerShell
                      </span>
                    </div>
                  </div>

                  <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Additional Coursework
                      </h4>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        Data Structures & Algorithms
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        Python
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        PHP
                      </span>
                      <span className="px-3 py-1.5 bg-white text-cyan-700 border border-cyan-200 rounded-full text-sm font-medium">
                        Ruby on Rails
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col flex-row items-start justify-between mb-4 gap-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  Continuous Development
                </h3>
                <span className="text-sm uppercase tracking-wider text-purple-600 bg-purple-50 border border-purple-200 px-4 py-2 rounded-full whitespace-nowrap font-medium">
                  Self-Paced Learning
                </span>
              </div>

              <h3 className="text-lg font-semibold text-purple-600 pb-2">
                LinkedIn Learning
              </h3>

              <div className="flex flex-wrap gap-2">

                <span className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-md font-medium">
                  Angular Essential Training
                </span>

                <span className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-md font-medium">
                  Node.js Essential Training
                </span>

                <span className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-md font-medium">
                  Selenium Essential Training
                </span>

                <span className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-md font-medium">
                  Microsoft Power Apps
                </span>

                <span className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-md font-medium">
                  Microsoft Power BI
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
