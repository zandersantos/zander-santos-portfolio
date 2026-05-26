export default function RoleBadge({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <span className="self-start inline-flex w-fit whitespace-nowrap text-xs sm:text-sm uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-200 px-3 py-1.5 rounded-full font-medium">
      {children}
    </span>
  );
}