type ProjectLinkVariant = "solid" | "outline";

const variants: Record<ProjectLinkVariant, string> = {
  solid: "bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-700 hover:border-cyan-700",
  outline: "bg-transparent text-cyan-700 border-cyan-300 hover:bg-cyan-50 hover:border-cyan-500"
}

interface ProjectLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ProjectLinkVariant;
}

export default function ProjectLink({
  href, children, variant = "outline"
}: ProjectLinkProps)
{
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${variants[variant]}`}
    >
      <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        {children}
      </span>
    </a>
  );
}