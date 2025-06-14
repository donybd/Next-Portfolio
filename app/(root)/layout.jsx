"use client";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
