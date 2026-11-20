import React from 'react';
import Skeleton from '@/components/ui/skeleton';

export default function CriteriaLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-emerald-50/30">
      {/* Top Navbar Skeleton */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="w-9 h-9 rounded-xl" />
            <div className="bg-teal-600/20 p-2 rounded-xl">
              <Skeleton className="w-6 h-6 rounded-md bg-teal-600/30" />
            </div>
            <div>
              <Skeleton className="w-32 h-5" />
              <Skeleton className="w-48 h-3.5 mt-1 hidden sm:block" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block space-y-1">
              <Skeleton className="w-28 h-4 ml-auto" />
              <Skeleton className="w-20 h-3 ml-auto" />
            </div>
            <Skeleton className="w-9 h-9 rounded-xl" />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Top 3 Stats Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white/80 rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-8 h-8 rounded-lg" />
              </div>
              <div className="flex items-baseline gap-2">
                <Skeleton className="w-16 h-8" />
                <Skeleton className="w-12 h-4" />
              </div>
              <Skeleton className="w-full h-2 rounded-full" />
            </div>
          ))}
        </div>

        {/* Filter Toolbar & Search */}
        <div className="bg-white/80 rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <Skeleton className="w-20 h-9 rounded-xl" />
            <Skeleton className="w-36 h-9 rounded-xl" />
            <Skeleton className="w-40 h-9 rounded-xl" />
          </div>
          <Skeleton className="w-full md:w-64 h-9 rounded-xl" />
        </div>

        {/* Criteria Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Skeleton className="w-10 h-10 rounded-xl shrink-0" />
                  <div className="space-y-1.5">
                    <Skeleton className="w-48 h-5" />
                    <Skeleton className="w-32 h-3.5" />
                  </div>
                </div>
                <Skeleton className="w-16 h-6 rounded-full shrink-0" />
              </div>

              <div className="space-y-2 pt-2">
                <Skeleton className="w-full h-3.5" />
                <Skeleton className="w-5/6 h-3.5" />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Skeleton className="w-24 h-4" />
                <Skeleton className="w-28 h-8 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
