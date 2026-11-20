import React from 'react';
import Skeleton from '@/components/ui/skeleton';

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      {/* Top Navbar Skeleton */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100/80 flex items-center justify-center">
              <Skeleton className="w-6 h-6 rounded-md bg-teal-200/80" />
            </div>
            <div>
              <Skeleton className="w-36 h-5" />
              <Skeleton className="w-28 h-3 mt-1.5" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block space-y-1">
              <Skeleton className="w-32 h-4 ml-auto" />
              <Skeleton className="w-24 h-3 ml-auto" />
            </div>
            <Skeleton className="w-9 h-9 rounded-xl" />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Hero Welcome Banner Skeleton */}
        <div className="rounded-3xl p-8 bg-gradient-to-r from-teal-700/80 via-teal-600/80 to-emerald-600/80 shadow-md relative overflow-hidden">
          <div className="space-y-4 max-w-xl">
            <Skeleton className="w-36 h-6 rounded-full bg-white/30" />
            <Skeleton className="w-64 h-8 bg-white/40" />
            <Skeleton className="w-80 h-4 bg-white/25" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Skeleton className="w-40 h-8 rounded-xl bg-white/20" />
            <Skeleton className="w-32 h-8 rounded-xl bg-white/20" />
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Skeleton className="w-40 h-6" />
            <Skeleton className="w-56 h-3.5" />
          </div>
        </div>

        {/* 4 Navigation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { color: 'bg-teal-50' },
            { color: 'bg-emerald-50' },
            { color: 'bg-sky-50' },
            { color: 'bg-indigo-50' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between h-56"
            >
              <div className="space-y-3">
                <Skeleton className={`w-12 h-12 rounded-xl ${item.color}`} />
                <Skeleton className="w-3/4 h-5" />
                <Skeleton className="w-full h-3" />
                <Skeleton className="w-5/6 h-3" />
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Skeleton className="w-24 h-3.5" />
                <Skeleton className="w-4 h-4 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Admin Management Table Skeleton */}
        <div className="bg-white/80 rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="space-y-1.5">
              <Skeleton className="w-48 h-6" />
              <Skeleton className="w-64 h-3.5" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="w-28 h-9 rounded-xl" />
              <Skeleton className="w-28 h-9 rounded-xl" />
            </div>
          </div>

          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50/70 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="w-36 h-4" />
                    <Skeleton className="w-48 h-3" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton className="w-20 h-6 rounded-full" />
                  <Skeleton className="w-16 h-8 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
