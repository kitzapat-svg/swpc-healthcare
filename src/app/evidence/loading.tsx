import React from 'react';
import Skeleton from '@/components/ui/skeleton';

export default function EvidenceLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-emerald-50/30 pb-20">
      {/* Top Navbar Skeleton */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Skeleton className="w-9 h-9 rounded-xl" />
            <div className="bg-teal-600/20 p-2 rounded-xl">
              <Skeleton className="w-6 h-6 rounded-md bg-teal-600/30" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Skeleton className="w-40 h-5" />
                <Skeleton className="w-20 h-4 rounded-full" />
              </div>
              <Skeleton className="w-56 h-3.5 mt-1" />
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-center">
            <Skeleton className="w-32 h-9 rounded-xl" />
            <Skeleton className="w-24 h-9 rounded-xl" />
            <Skeleton className="w-9 h-9 rounded-xl" />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Filter Controls Row */}
        <div className="bg-white/80 rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Skeleton className="w-24 h-3.5" />
              <Skeleton className="w-full h-10 rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="w-20 h-3.5" />
              <Skeleton className="w-full h-10 rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="w-24 h-3.5" />
              <Skeleton className="w-full h-10 rounded-xl" />
            </div>
          </div>

          {/* Category Tabs & Status Filter */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <div className="flex gap-2">
              <Skeleton className="w-20 h-8 rounded-lg" />
              <Skeleton className="w-32 h-8 rounded-lg" />
              <Skeleton className="w-32 h-8 rounded-lg" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="w-20 h-8 rounded-full" />
              <Skeleton className="w-24 h-8 rounded-full" />
            </div>
          </div>
        </div>

        {/* Overall Progress Card Skeleton */}
        <div className="bg-white/90 rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <Skeleton className="w-48 h-5" />
              <Skeleton className="w-64 h-3.5" />
            </div>
            <Skeleton className="w-20 h-7 rounded-xl" />
          </div>

          <Skeleton className="w-full h-3.5 rounded-full" />

          {/* 4 Mini Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3"
              >
                <Skeleton className="w-9 h-9 rounded-lg shrink-0" />
                <div className="space-y-1">
                  <Skeleton className="w-16 h-3" />
                  <Skeleton className="w-10 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion Group Skeletons */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden"
            >
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-9 h-9 rounded-xl" />
                  <div className="space-y-1">
                    <Skeleton className="w-56 h-5" />
                    <Skeleton className="w-36 h-3" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton className="w-24 h-6 rounded-full" />
                  <Skeleton className="w-6 h-6 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
