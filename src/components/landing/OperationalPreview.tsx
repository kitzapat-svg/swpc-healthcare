'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  FileText, 
  ChevronRight
} from 'lucide-react';

export default function OperationalPreview() {
  const [activeTab, setActiveTab] = useState<'me' | 'unsafe' | 'criteria'>('me');

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 overflow-hidden">
      {/* Top Window Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 hidden sm:inline">
            SWPC Operational Telemetry <span className="font-mono text-slate-500">v1.0.0</span>
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('me')}
            className={`px-3 py-1 text-xs rounded-md font-medium transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${
              activeTab === 'me'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            เฝ้าระวังยา (ME)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('unsafe')}
            className={`px-3 py-1 text-xs rounded-md font-medium transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${
              activeTab === 'unsafe'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            คุ้มครองผู้บริโภค (คบส.)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('criteria')}
            className={`px-3 py-1 text-xs rounded-md font-medium transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${
              activeTab === 'criteria'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            เกณฑ์ส่วนที่ 7 (82 ข้อ)
          </button>
        </div>
      </div>

      {/* Main Preview Screen */}
      <div className="p-5 sm:p-6 min-h-[340px] flex flex-col justify-between">
        {activeTab === 'me' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  NCC MERP Index
                </span>
                <span className="text-xs text-slate-400">อุบัติการณ์ระดับความรุนแรง A ถึง I</span>
              </div>
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> บันทึกเรียบร้อย (A4 Ready)
              </span>
            </div>

            {/* Simulated ME Card */}
            <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xs">
                      C
                    </span>
                    <h4 className="text-sm font-semibold text-slate-100">
                      เกิดความคลาดเคลื่อนถึงผู้ป่วย แต่ไม่เกิดอันตราย (Error, No Harm)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    ขั้นตอน Dispensing (การจ่ายยา): จ่ายยาความดันโลหิตสลับความแรง (Amlodipine 5mg แทน 10mg)
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  รพ.สต.ย่านยาว
                </span>
              </div>

              {/* Steps Progress */}
              <div className="grid grid-cols-4 gap-2 pt-2">
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400">1. สั่งยา</div>
                  <div className="text-xs font-semibold text-slate-300">ถูกต้อง</div>
                </div>
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400">2. คัดลอกคำสั่ง</div>
                  <div className="text-xs font-semibold text-slate-300">ถูกต้อง</div>
                </div>
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/40 text-center">
                  <div className="text-[10px] text-amber-300">3. การจัด/จ่าย</div>
                  <div className="text-xs font-semibold text-amber-400">จุดเกิดเหตุ</div>
                </div>
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400">4. การบริหารยา</div>
                  <div className="text-xs font-semibold text-emerald-400">ดักจับทัน</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>เภสัชกรผู้ตรวจสอบ: ภก.ผู้รับผิดชอบเครือข่าย</span>
              <span className="text-teal-400">ส่งออก A4 สำหรับการประชุม กวป. ได้ทันที</span>
            </div>
          </div>
        )}

        {activeTab === 'unsafe' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  G-RDU Community
                </span>
                <span className="text-xs text-slate-400">เฝ้าระวังยาชุดและสเตียรอยด์ในชุมชน</span>
              </div>
              <span className="text-xs text-teal-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> ปักหมุด GPS ร้านค้าเสี่ยง
              </span>
            </div>

            {/* Simulated Unsafe Product Card */}
            <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      ยาชุดสมุนไพรลูกกลอน
                    </span>
                    <span className="text-xs text-slate-400">ตรวจพบ Dexamethasone</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-100 mt-1">
                    ร้านชำป้าทอง ม.3 ต.ในเมือง อ.สวรรคโลก
                  </h4>
                  <p className="text-xs text-slate-400">
                    เจ้าหน้าที่ รพ.สต. เข้าสุ่มตรวจชุดทดสอบเบื้องต้น (Test Kit) พบแถบสเตียรอยด์ผลบวก
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                    ขั้นตอน: ตักเตือน/ส่งตรวจ
                  </span>
                </div>
              </div>

              {/* 4 Steps Risk Cycle */}
              <div className="flex items-center justify-between gap-1 text-[11px] pt-1">
                <div className="flex-1 py-1 px-2 rounded bg-slate-900 text-slate-400 border border-slate-800 text-center">
                  1. รับแจ้ง
                </div>
                <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                <div className="flex-1 py-1 px-2 rounded bg-slate-900 text-slate-400 border border-slate-800 text-center">
                  2. สุ่มตรวจ
                </div>
                <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                <div className="flex-1 py-1 px-2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-center font-medium">
                  3. จัดการความเสี่ยง
                </div>
                <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                <div className="flex-1 py-1 px-2 rounded bg-slate-900 text-slate-500 border border-slate-800 text-center">
                  4. ชุมชนปลอดภัย
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>การบันทึกภาพ: บีบอัดภาพหน้างานอัตโนมัติก่อนส่ง Cloud</span>
              <span className="text-amber-300 font-mono">17.181° N, 99.829° E</span>
            </div>
          </div>
        )}

        {activeTab === 'criteria' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  เกณฑ์คุณภาพ รพ.สต. ส่วนที่ 7
                </span>
                <span className="text-xs text-slate-400">8 หมวด รวม 82 คะแนน</span>
              </div>
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" /> Google Drive ตรวจหลักฐานครบ 17 แห่ง
              </span>
            </div>

            {/* Criteria Categories Progress */}
            <div className="grid sm:grid-cols-2 gap-2.5">
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-200">หมวด 1: ระบบจัดการยาและคลังเวชภัณฑ์</div>
                  <div className="text-[11px] text-slate-400">อุณหภูมิตู้เย็น, FEFO, ยาช่วยชีวิตฉุกเฉิน</div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-400">12 / 12</span>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-200">หมวด 2: การใช้ยาอย่างสมเหตุผล (RDU)</div>
                  <div className="text-[11px] text-slate-400">อัตราการใช้ยาปฏิชีวนะในหวัด / ท้องร่วง</div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-400">14 / 14</span>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-200">หมวด 3: บริบาลทางเภสัชกรรม (NCD)</div>
                  <div className="text-[11px] text-slate-400">ผู้ป่วยเบาหวาน ความดัน ไตเรื้อรัง และเยี่ยมบ้าน</div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-400">15 / 15</span>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-200">หมวด 4: คุ้มครองผู้บริโภคด้านสุขภาพ</div>
                  <div className="text-[11px] text-slate-400">ร้านชำปลอดสเตียรอยด์ ยาชุด และผลิตภัณฑ์เสี่ยง</div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-400">15 / 15</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>ผลการตรวจประเมิน: ภก. สามารถให้ข้อเสนอแนะและตรวจทานรายข้อ</span>
              <span className="text-emerald-400 font-medium">คะแนนรวมสูงสุด <span className="font-mono">82</span> คะแนน</span>
            </div>
          </div>
        )}

        {/* Operational Footer Bar */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-pulse motion-reduce:animate-none" />
            <span>เครือข่ายบริการสุขภาพปฐมภูมิ อำเภอสวรรคโลก จังหวัดสุโขทัย</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>17 หน่วยบริการปฐมภูมิ</span>
            <span>•</span>
            <span>1 รพ.แม่ข่าย</span>
          </div>
        </div>
      </div>
    </div>
  );
}
