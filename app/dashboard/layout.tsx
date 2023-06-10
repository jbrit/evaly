export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside
        className="min-h-screen"
        style={{ width: "250px", backgroundColor: "#ffffff" }}
      ></aside>
      <main
        style={{ backgroundColor: "#FAFAFA" }}
        className="min-h-screen p-8 w-full"
      >
        {children}
      </main>
    </div>
  );
}
