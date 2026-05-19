const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex pt-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-8">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-md uppercase tracking-[0.2em] font-medium">
            Projects
          </span>

          <div className="space-y-6">
            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-2xl font-semibold text-neutral-900 ">
                  ConneXions Mobile App
                </h3>
                <span className="text-sm uppercase tracking-wide text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                  Professional - ACE Project Space
                </span>
              </div>

              <p className="text-base leading-relaxed text-neutral-600 mb-6">
                Community safety mobile application with a guardian-protected user system for at-risk populations.
                Architected complete user onboarding flows for both standard users and &quot;Admins&quot;,
                implementing Twilio OTP verification, real-time in-app notifications via Supabase,
                and secure authentication workflows. Built comprehensive user settings including
                password management, profile updates, and account deletion with multi-factor verification.
              </p>

              <div className="flex flex-wrap gap-3 items-baseline pt-2">
                <h4 className="text-xs uppercase text-neutral-500 mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    React Native
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    Supabase
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    Twilio API
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  Evolve Athletics - Mock E-Commerce Platform
                </h3>
                <span className="text-sm uppercase tracking-wide text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                  Academic
                </span>
              </div>

              <p className="text-base leading-relaxed text-neutral-600 mb-6">
                Full-stack fitness equipment e-commerce store featuring product catalog with category organization,
                session-based shopping cart with CRUD operations, and complete checkout flow with user authentication.
                Built admin dashboard for product management (CRUD), image handling, and dynamic content editing.
                Implemented RESTful routing, MVC architecture, and relational database design with customers,
                products, orders, and order details models.
              </p>

              <div className="flex flex-wrap gap-3 items-baseline pt-2">
                <p className="text-xs uppercase text-neutral-500 mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    Ruby on Rails
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    HTML/CSS
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  D&D Monster Manual
                </h3>
                <span className="text-sm uppercase tracking-wide text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                  Academic
                </span>
              </div>

              <p className="text-base leading-relaxed text-neutral-600 mb-6">
                Interactive monster database with search functionality for monsters, actions, and senses.
                Designed complex relational database schema with junction tables for many-to-many relationships
                between monsters, abilities, and actions. Implemented full-text search across multiple entities,
                RESTful API integration with D&D 5e API, and data migration workflows between SQLite and SQL Server.
              </p>

              <div className="flex flex-wrap gap-3 items-baseline pt-2">
                <p className="text-xs uppercase text-neutral-500 mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    Ruby on Rails
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    HTML/CSS
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    API Integration
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
                In Progress
              </p>
              <p className="text-sm text-neutral-600">
                Currently building projects in JavaScript, React, Next.js, and C#/.NET
                to expand my portfolio with production-ready applications in my primary tech stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;