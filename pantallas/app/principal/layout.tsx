// app/layout.tsx
import Sidebar from "../../components/sidebar";

export default function principalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="grid grid-cols-1 md:grid-cols-[16rem_1fr]">
        <Sidebar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
