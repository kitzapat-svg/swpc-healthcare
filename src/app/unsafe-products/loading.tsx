import React from 'react';
import Skeleton from '@/components/ui/skeleton';

export default function UnsafeProductsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-emerald-50/30 pb-20">
      {/* Top Navbar Skeleton */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Skeleton className="w-9 h-9 rounded-xl" />
            <div className="bg-sky-600/20 p-2 rounded-xl">
              <Skeleton className="w-6 h-6 rounded-md bg-sky-600/30" />
            </div>
            <div>
              <Skeleton className="w-64 h-5" />
              <Skeleton className="w-80 h-3.5 mt-1" />
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-center">
            <Skeleton className="w-32 h-9 rounded-xl" />
            <Skeleton className="w-36 h-9 rounded-xl" />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Search & Filter Toolbar */}
        <div className="bg-white/80 rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <Skeleton className="w-20 h-9 rounded-xl" />
            <Skeleton className="w-28 h-9 rounded-xl" />
            <Skeleton className="w-28 h-9 rounded-xl" />
            <Skeleton className="w-28 h-9 rounded-xl" />
          </div>
          <Skeleton className="w-full md:w-64 h-9 rounded-xl" />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview Box */}
              <div className="h-48 w-full bg-slate-200/60 skeleton-shimmer relative">
                <div className="absolute top-3 left-3">
                  <Skeleton className="w-24 h-6 rounded-full bg-white/70" />
                </div>
                <div className="absolute top-3 right-3">
                  <Skeleton className="w-20 h-6 rounded-full bg-white/70" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <Skeleton className="w-3/4 h-5" />
                  <Skeleton className="w-full h-3.5" />
                  <Skeleton className="w-2/3 h-3.5" />
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Skeleton className="w-24 h-4" />
                  <Skeleton className="w-16 h-7 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
