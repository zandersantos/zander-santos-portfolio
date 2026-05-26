import Paragraph from "./ui/Paragraph";
import RoleBadge from "./ui/RoleBadge";
import SectionLabel from "./ui/SectionLabel";
import TechBadge from "./ui/TechBadge";
import Title from "./ui/Title";

const Education = () => {

  return (
    <section id="education" className="min-h-screen flex items-center px-10 pt-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-12">
          <SectionLabel>
            Education
          </SectionLabel>

          <div className="space-y-8">
            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                <Title>
                  Business Information Technology
                </Title>
                <RoleBadge>
                  2023 – 2026
                </RoleBadge>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-cyan-600">
                  Red River College Polytechnic
                </p>
                <Paragraph>
                  Focused on software development lifecycle practices, enterprise application development, and modern web architecture.
                  Coursework emphasized C#/.NET Core and ASP.NET development alongside full-stack web technologies including JavaScript,
                  HTML, and CSS. Experience working with relational databases including PostgreSQL, MSSQL, and MySQL, as well as
                  cloud and infrastructure technologies such as AWS, Azure, Linux, and PowerShell. Additional exposure to API-driven systems,
                  software testing, and development workflows. Maintained a <span className="font-semibold text-neutral-900">4.3 GPA.</span>
                </Paragraph>
              </div>

              <div className="pt-4 border-t border-cyan-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                  <div className="bg-white border border-cyan-100 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Backend:
                      </h4>
                      <TechBadge variant ="cyan">
                        C#
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        .NET Core
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        ASP.NET
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        Node.js
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        REST APIs
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        Unit Testing
                      </TechBadge>
                    </div>
                  </div>

                  <div className="bg-white border border-cyan-100 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Frontend
                      </h4>
                      <TechBadge variant ="cyan">
                        JavaScript
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        HTML5
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        CSS3
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        Figma
                      </TechBadge>
                    </div>
                  </div>

                  <div className="bg-white border border-cyan-100 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Databases
                      </h4>
                      <TechBadge variant ="cyan">
                        PostgreSQL
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        MSSQL
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        MySQL
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        MongoDB
                      </TechBadge>
                    </div>
                  </div>

                  <div className="bg-white border border-cyan-100 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Infrastructure
                      </h4>
                      <TechBadge variant ="cyan">
                        AWS
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        Azure
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        Linux
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        PowerShell
                      </TechBadge>
                    </div>
                  </div>

                  <div className="bg-white border border-cyan-100 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="text-sm uppercase font-bold tracking-wide text-cyan-700 py-1.5">
                        Additional Coursework
                      </h4>
                      <TechBadge variant ="cyan">
                        Data Structures & Algorithms
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        Python
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        PHP
                      </TechBadge>
                      <TechBadge variant ="cyan">
                        Ruby on Rails
                      </TechBadge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                <Title>
                  Continuous Development
                </Title>
                <RoleBadge>
                  Self-Paced Learning
                </RoleBadge>
              </div>

              <h3 className="text-lg font-semibold text-purple-600 pb-2">
                LinkedIn Learning
              </h3>

              <div className="flex flex-wrap gap-2">

                <TechBadge variant = "purple">
                  Angular Essential Training
                </TechBadge>

                <TechBadge variant = "purple">
                  Node.js Essential Training
                </TechBadge>

                <TechBadge variant = "purple">
                  Selenium Essential Training
                </TechBadge>

                <TechBadge variant = "purple">
                  Microsoft Power Apps
                </TechBadge>

                <TechBadge variant = "purple">
                  Microsoft Power BI
                </TechBadge>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
