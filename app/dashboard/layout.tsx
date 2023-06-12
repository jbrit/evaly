import Navbar from "@/components/nav/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Navbar />
      <main
        style={{ backgroundColor: "#FAFAFA" }}
        className="min-h-screen p-8 w-full"
      >
        {children}
      </main>
    </div>
  );
}
