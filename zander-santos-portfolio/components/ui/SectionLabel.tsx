export default function SectionLabel({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <span className="inline-block px-5 py-2 bg-white text-black rounded-full text-md uppercase tracking-[0.2em] font-bold mb-8">
      {children}
    </span>
  );
}