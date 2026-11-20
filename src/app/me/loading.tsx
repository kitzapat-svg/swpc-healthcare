import React from 'react';
import Skeleton from '@/components/ui/skeleton';

export default function MELoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-emerald-50/30 pb-20">
      {/* Top Navbar Skeleton */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Skeleton className="w-9 h-9 rounded-xl" />
            <div className="bg-emerald-600/20 p-2 rounded-xl">
              <Skeleton className="w-6 h-6 rounded-md bg-emerald-600/30" />
            </div>
            <div>
              <Skeleton className="w-56 h-5" />
              <Skeleton className="w-72 h-3.5 mt-1" />
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-center">
            <Skeleton className="w-28 h-9 rounded-xl" />
            <Skeleton className="w-36 h-9 rounded-xl" />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* 4 KPI Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="w-28 h-3.5" />
                <Skeleton className="w-8 h-8 rounded-lg" />
              </div>
              <div className="flex items-baseline gap-2">
                <Skeleton className="w-16 h-8" />
                <Skeleton className="w-12 h-3.5" />
              </div>
              <Skeleton className="w-full h-1.5 rounded-full" />
            </div>
          ))}
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white/80 rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full md:w-auto">
            <Skeleton className="w-full md:w-48 h-9 rounded-xl" />
            <Skeleton className="w-full md:w-44 h-9 rounded-xl" />
            <Skeleton className="w-full md:w-36 h-9 rounded-xl" />
          </div>
          <Skeleton className="w-full md:w-64 h-9 rounded-xl" />
        </div>

        {/* Incidents Data Table Skeleton */}
        <div className="bg-white/90 rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton className="w-40 h-5" />
              <Skeleton className="w-24 h-3" />
            </div>
            <Skeleton className="w-24 h-8 rounded-lg" />
          </div>

          <div className="divide-y divide-slate-100">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-9 h-9 rounded-xl shrink-0" />
                  <div className="space-y-1.5">
                    <Skeleton className="w-48 h-4" />
                    <Skeleton className="w-64 h-3" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Skeleton className="w-20 h-6 rounded-full hidden sm:block" />
                  <Skeleton className="w-24 h-6 rounded-full" />
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
