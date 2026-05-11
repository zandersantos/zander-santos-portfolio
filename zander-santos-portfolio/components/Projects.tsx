const Projects = () => {
  return (
    <section className="min-h-screen px-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-md uppercase text-neutral-400 mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          <div className="border border-neutral-200 rounded-2xl p-10">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-neutral-800 mb-2">
                ConneXions Mobile App
              </h3>
              <span className="text-xs uppercase text-neutral-400 block mb-4">
                Professional - ACE Project Space
              </span>

              <p className="text-sm leading-7 text-neutral-600 font-light mb-6">
                Community safety mobile application with a guardian-protected user system for at-risk populations.
                Architected complete user onboarding flows for both standard users and Guardian Angels,
                implementing Twilio OTP verification, real-time in-app notifications via Supabase,
                and secure authentication workflows. Built comprehensive user settings including
                password management, profile updates, and account deletion with multi-factor verification.
              </p>
              <div>
                <p className="text-xs uppercase text-neutral-500 mb-2">
                  Tech Stack
                </p>
                <p className="text-sm text-neutral-600 font-light">
                  React Native, Supabase, PostgreSQL, Twilio API
                </p>
              </div>
            </div>
          </div>

          <div className="border border-neutral-200 rounded-2xl p-10">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-neutral-800 mb-2">
                Evolve Athletics - Mock E-Commerce Platform
              </h3>
              <span className="text-xs uppercase text-neutral-400 block mb-4">
                Academic
              </span>

              <p className="text-sm leading-7 text-neutral-600 font-light mb-6">
                Full-stack fitness equipment e-commerce store featuring product catalog with category organization,
                session-based shopping cart with CRUD operations, and complete checkout flow with user authentication.
                Built admin dashboard for product management (CRUD), image handling, and dynamic content editing.
                Implemented RESTful routing, MVC architecture, and relational database design with customers,
                products, orders, and order details models.
              </p>

              <div>
                <p className="text-xs uppercase text-neutral-500 mb-2">
                  Tech Stack
                </p>
                <p className="text-sm text-neutral-600 font-light">
                  Ruby on Rails, PostgreSQL, HTML/CSS
                </p>
              </div>
            </div>
          </div>

          <div className="border border-neutral-200 rounded-2xl p-10">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-neutral-800 mb-2">
                D&D Monster Manual
              </h3>
              <span className="text-xs uppercase text-neutral-400 block mb-4">
                Academic
              </span>

              <p className="text-sm leading-7 text-neutral-600 font-light mb-6">
                Interactive monster database with search functionality for monsters, actions, and senses.
                Designed complex relational database schema with junction tables for many-to-many relationships
                between monsters, abilities, and actions. Implemented full-text search across multiple entities,
                RESTful API integration with D&D 5e API, and data migration workflows between SQLite and SQL Server.
              </p>

              <div>
                <p className="text-xs uppercase text-neutral-500 mb-2">
                  Tech Stack
                </p>
                <p className="text-sm text-neutral-600 font-light">
                  Ruby on Rails, PostgreSQL, HTML/CSS, API Integration
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-l border-neutral-200 pl-6">
          <p className="text-xs uppercase text-neutral-400 mb-4">In Progress</p>
          <p className="text-sm text-neutral-600 font-light">
            Currently building projects in JavaScript, React, Next.js, and C#/.NET
            to expand my portfolio with production-ready applications in my primary tech stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;