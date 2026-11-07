import React from 'react';
import Link from 'next/link';
import { Activity, ShieldCheck } from 'lucide-react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 flex flex-col justify-between">
      {/* Header bar */}
      <header className="p-6 max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2.5 rounded-2xl shadow-md group-hover:scale-105 transition-transform">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="font-bold text-xl text-slate-800 tracking-tight block">
              SWPC Healthcare
            </span>
            <span className="text-xs text-slate-500 font-medium">
              เครือข่ายบริการสุขภาพอำเภอสวรรคโลก
            </span>
          </div>
        </Link>
        <div className="hidden sm:flex items-center gap-2 text-xs text-primary bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/20 shadow-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>ระบบบริหารงานเภสัชกรรมปฐมภูมิ & คบส.</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-lg">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-slate-500">
        © 2026 เครือข่ายบริการสุขภาพอำเภอสวรรคโลก จังหวัดสุโขทัย. สงวนลิขสิทธิ์.
      </footer>
    </div>
  );
}
