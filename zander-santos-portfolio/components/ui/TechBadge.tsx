type TechBadgeVariant = "cyan" | "purple";

const variants: Record<TechBadgeVariant, string> = {
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200"
}

interface TechBadgeProps {
  children: React.ReactNode;
  variant: TechBadgeVariant;
}

export default function TechBadge({
  children, variant
}: TechBadgeProps)
{
  return (
    <span className={`px-3 py-1.5 border rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}