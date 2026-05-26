export default function Paragraph({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <p className="text-base leading-relaxed text-gray-700 mb-4">
      {children}
    </p>
  );
}