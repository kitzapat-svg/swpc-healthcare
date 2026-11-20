import React from 'react';
import Skeleton from '@/components/ui/skeleton';

export default function RootLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-emerald-50/30">
      {/* Top Navbar Skeleton */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-xl" />
            <div className="space-y-1.5">
              <Skeleton className="w-36 h-5" />
              <Skeleton className="w-48 h-3.5" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="w-28 h-8 rounded-full hidden sm:block" />
            <Skeleton className="w-9 h-9 rounded-xl" />
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Banner / Title Area */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <Skeleton className="w-48 h-7" />
            <Skeleton className="w-72 h-4" />
          </div>
          <Skeleton className="w-32 h-10 rounded-xl" />
        </div>

        {/* 4 Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white/80 rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4"
            >
              <Skeleton className="w-12 h-12 rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="w-3/4 h-5" />
                <Skeleton className="w-full h-3" />
                <Skeleton className="w-5/6 h-3" />
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-4 h-4 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Content Table / Card Skeleton */}
        <div className="bg-white/80 rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Skeleton className="w-44 h-6" />
            <Skeleton className="w-24 h-8 rounded-lg" />
          </div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-8 h-8 rounded-lg" />
                  <div className="space-y-1">
                    <Skeleton className="w-40 h-4" />
                    <Skeleton className="w-24 h-3" />
                  </div>
                </div>
                <Skeleton className="w-20 h-6 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
