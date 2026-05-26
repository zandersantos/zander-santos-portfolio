export default function Title({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <h3 className="text-3xl font-semibold text-gray-900">
      {children}
    </h3>
  );
}