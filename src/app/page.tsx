import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Activity, 
  ClipboardList, 
  AlertCircle, 
  ArrowRight, 
  LogIn, 
  UserPlus, 
  FileSpreadsheet, 
  CheckCircle2, 
  Printer, 
  Building2, 
  ExternalLink, 
  ChevronRight,
  Pill
} from 'lucide-react';
import OperationalPreview from '@/components/landing/OperationalPreview';

export default function LandingPage() {
  const pcuNetwork = [
    { code: '07450', name: 'รพ.สต.คลองกระจง' },
    { code: '07451', name: 'รพ.สต.วังพิณพาทย์' },
    { code: '07452', name: 'รพ.สต.วังไม้ขอน' },
    { code: '07453', name: 'รพ.สต.ย่านยาว' },
    { code: '07454', name: 'รพ.สต.นาทุ่ง' },
    { code: '07455', name: 'รพ.สต.คลองยาง' },
    { code: '07456', name: 'รพ.สต.บ้านไผ่ตะล่อม (ต.คลองยาง)' },
    { code: '07457', name: 'รพ.สต.เมืองบางยม' },
    { code: '07458', name: 'รพ.สต.ท่าทอง' },
    { code: '07459', name: 'รพ.สต.ปากน้ำ' },
    { code: '07460', name: 'รพ.สต.ป่ากุมเกาะ' },
    { code: '07461', name: 'รพ.สต.เมืองบางขลัง' },
    { code: '07462', name: 'รพ.สต.หนองกลับ' },
    { code: '14051', name: 'รพ.สต.บ้านมาบป่าเลา (ต.ปากน้ำ)' },
    { code: '14052', name: 'รพ.สต.บ้านใหม่โพธิ์งาม (ต.ป่ากุมเกาะ)' },
    { code: '14053', name: 'รพ.สต.บ้านขอนซุง (ต.เมืองบางขลัง)' },
    { code: '14857', name: 'ศสม.เทศบาลเมืองสวรรคโลก' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 overflow-x-clip selection:bg-teal-100 selection:text-teal-900">
      {/* Top Banner: Official Affiliation */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-medium text-slate-200">กลุ่มงานเภสัชกรรมและคุ้มครองผู้บริโภค โรงพยาบาลสวรรคโลก</span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline">เครือข่ายบริการสุขภาพปฐมภูมิ จังหวัดสุโขทัย</span>
          </div>
          <div className="text-[11px] text-teal-300">
            17 หน่วยบริการปฐมภูมิ และ 1 รพ.แม่ข่าย (เกณฑ์ส่วนที่ 7)
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
          >
            <div className="bg-teal-600 text-white p-2 rounded-xl group-hover:bg-teal-700 transition-[background-color] duration-150">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 leading-tight block">
                SWPC Healthcare
              </span>
              <span className="text-[11px] text-slate-500 block -mt-0.5">
                Primary Care Pharmacy & Consumer Protection
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-3">
            <Link 
              href="/criteria" 
              className="hidden md:inline-flex text-xs font-medium text-slate-600 hover:text-teal-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              เกณฑ์มาตรฐาน 82 ข้อ
            </Link>
            <Link 
              href="/login" 
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-teal-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>เข้าสู่ระบบ</span>
            </Link>
            <Link 
              href="/register" 
              className="btn-primary text-xs !py-2 !px-4"
            >
              <UserPlus className="w-3.5 h-3.5 mr-1" />
              <span>ลงทะเบียน รพ.สต.</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Hero Copy & Call-to-actions */}
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200/80 rounded-full text-xs font-medium text-teal-800">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>ระบบสารสนเทศงานเภสัชกรรมปฐมภูมิ เครือข่ายอำเภอสวรรคโลก</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                ยกระดับความปลอดภัยด้านยา <br />
                <span className="text-teal-700">และการคุ้มครองผู้บริโภคด้านสุขภาพ</span> <br />
                ในระดับปฐมภูมิอย่างเป็นระบบ
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                ศูนย์กลางการบริหารงานเภสัชกรรมสำหรับเครือข่าย 17 หน่วยบริการปฐมภูมิ และโรงพยาบาลสวรรคโลก รองรับการประเมินเกณฑ์ส่วนที่ 7 เฝ้าระวังอุบัติการณ์ทางยา (ME) และตัดวงจรผลิตภัณฑ์สุขภาพอันตรายในชุมชน
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link 
                  href="/login" 
                  className="btn-primary text-sm gap-2"
                >
                  <span>เข้าสู่ระบบสำหรับบุคลากร</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/criteria" 
                  className="btn-secondary text-sm gap-2"
                >
                  <span>คู่มือเกณฑ์ประเมิน 8 หมวด</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Facts & Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-900">17</div>
                <div className="text-xs font-medium text-slate-500 mt-1">รพ.สต. / ศสม. ในเครือข่าย</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-teal-700">82</div>
                <div className="text-xs font-medium text-slate-500 mt-1">คะแนนเกณฑ์มาตรฐานส่วนที่ 7</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">A ถึง I</div>
                <div className="text-xs font-medium text-slate-500 mt-1">ระดับเฝ้าระวัง ME (NCC MERP)</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-700">4 ขั้นตอน</div>
                <div className="text-xs font-medium text-slate-500 mt-1">วงจรตัดความเสี่ยงยาชุดชุมชน</div>
              </div>
            </div>

            {/* Interactive Signature Element: Operational Hub Preview */}
            <div className="pt-2">
              <div className="text-xs text-slate-500 mb-2 flex items-center justify-between">
                <span>จำลองการแสดงผลฟังก์ชันจริงของระบบ (Interactive Operational Preview)</span>
                <span className="text-teal-700 hidden sm:inline">คลิกสลับแท็บเพื่อดูการทำงาน</span>
              </div>
              <OperationalPreview />
            </div>
          </div>
        </section>

        {/* 5 Core Modules Section */}
        <section className="py-16 px-4 sm:px-6 bg-white border-t border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                5 โมดูลหลัก ออกแบบเพื่อบุคลากรสาธารณสุขหน้างาน
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                ผสานการทำงานระหว่างผู้ปฏิบัติงานใน รพ.สต. และเภสัชกรผู้รับผิดชอบเครือข่ายอย่างราบรื่น
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Module 1: Criteria */}
              <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-[border-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">เกณฑ์มาตรฐานงานเภสัชกรรม</h3>
                    <div className="text-xs text-teal-700 font-medium mt-0.5">ส่วนที่ 7 (8 หมวด รวม 82 คะแนน)</div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    ครอบคลุม 8 หมวดงาน: การบริหารจัดการระบบยา, คลังยาและเวชภัณฑ์, คุณภาพการใช้ยา RDU, และงานคุ้มครองผู้บริโภค พร้อมคลังความรู้ประกอบ
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-200">
                  <Link 
                    href="/criteria" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
                  >
                    <span>ดูรายละเอียดเกณฑ์ทั้งหมด</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Module 2: ME Reporting */}
              <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-[border-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">เฝ้าระวังความคลาดเคลื่อนทางยา</h3>
                    <div className="text-xs text-rose-700 font-medium mt-0.5">มาตรฐาน NCC MERP Index</div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    บันทึกและวิเคราะห์ Medication Error ระดับ A ถึง I จำแนก 4 ขั้นตอน: สั่งใช้ยา, คัดลอกคำสั่ง, จัดหรือจ่ายยา และบริหารยา พร้อมแบบพิมพ์รายงาน A4 ทันที
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-200">
                  <Link 
                    href="/me" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
                  >
                    <span>เข้าระบบรายงาน ME</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Module 3: Unsafe Products */}
              <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-[border-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">เฝ้าระวังผลิตภัณฑ์ไม่ปลอดภัย</h3>
                    <div className="text-xs text-amber-700 font-medium mt-0.5">G-RDU และคุ้มครองผู้บริโภค</div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    เฝ้าระวังยาชุด, สเตียรอยด์, อาหารปนเปื้อน และเครื่องสำอางอันตราย พร้อมบีบอัดภาพถ่ายหน้างาน, พิกัด GPS ร้านชำ และบันทึกลิงก์ Google Drive
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-200">
                  <Link 
                    href="/unsafe-products" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
                  >
                    <span>เข้าระบบเฝ้าระวังผลิตภัณฑ์</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Module 4: Evidence Inspection */}
              <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-[border-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">ส่งและตรวจหลักฐานประเมิน</h3>
                    <div className="text-xs text-blue-700 font-medium mt-0.5">กระบวนการ Review Workflow</div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    ส่งลิงก์โฟลเดอร์ Google Drive ราย รพ.สต. เพื่อตรวจประเมินทั้ง 8 หมวด เภสัชกรสามารถตรวจสอบ ตรวจทานสถานะ และให้ข้อเสนอแนะกลับรายข้อ
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-200">
                  <Link 
                    href="/evidence" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
                  >
                    <span>เข้าระบบตรวจหลักฐาน</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Module 5: User & Hospital Management */}
              <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-[border-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">บริหารจัดการเครือข่ายสถานพยาบาลและผู้ใช้</h3>
                    <div className="text-xs text-emerald-700 font-medium mt-0.5">การกำกับดูแลเครือข่ายระดับอำเภอ</div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    ระบบอนุมัติผู้ใช้งาน 3 ระดับ (รออนุมัติ, เจ้าหน้าที่ รพ.สต., เภสัชกรผู้ดูแล), การมอบหมายเภสัชกรผู้รับผิดชอบประจำ รพ.สต., ระบบจัดการหน่วยบริการ, และการรีเซ็ตรหัสผ่านอย่างปลอดภัย
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    รักษาความปลอดภัยข้อมูลด้วย Row Level Security (RLS)
                  </span>
                  <Link 
                    href="/dashboard" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
                  >
                    <span>เข้าสู่แดชบอร์ดผู้ดูแล</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standards & Trust Section */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto bg-slate-900 text-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-800">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full text-xs font-medium text-teal-300">
                  <Printer className="w-3.5 h-3.5" />
                  <span>รองรับงานราชการเต็มรูปแบบ</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  แบบพิมพ์รายงาน A4 มาตรฐาน <br />
                  พร้อมใช้งานในทุกโมดูล
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ทุกรายงานในระบบได้รับการออกแบบด้วย Pure CSS Print Layout ขนาดกระดาษ A4 แนวตั้งมาตรฐานราชการไทย ซ่อนเครื่องมือหน้าจออัตโนมัติเมื่อสั่งพิมพ์ เพื่อใช้เป็นเอกสารประกอบการตรวจราชการและการประชุมคณะกรรมการพัฒนาระบบยา (กวป.)
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">รายงานอุบัติการณ์ ME</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">รายงานสรุปผลเกณฑ์ส่วนที่ 7</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">รายงานเฝ้าระวังผลิตภัณฑ์อันตราย</span>
                </div>
              </div>

              <div className="bg-slate-950/70 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>หลักประกันความมั่นคงปลอดภัยข้อมูลสุขภาพ</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <span>ระบบแยกข้อมูลรายหน่วยบริการ (Hospital Isolation) ป้องกันการเข้าถึงข้ามหน่วยงาน</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <span>ระบบคัดกรองการอนุมัติผู้ใช้รายบุคคลโดยเภสัชกรผู้ดูแลระบบ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <span>โครงสร้างฐานข้อมูลมาตรฐาน PostgreSQL บน Supabase พร้อม Row Level Security (RLS)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PCUs Network Directory Section */}
        <section className="py-14 px-4 sm:px-6 bg-slate-100/60 border-t border-slate-200">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  เครือข่ายบริการสุขภาพปฐมภูมิ อำเภอสวรรคโลก
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  1 โรงพยาบาลแม่ข่าย และ 17 หน่วยบริการปฐมภูมิตามทะเบียนเครือข่ายบริการสุขภาพ อ.สวรรคโลก
                </p>
              </div>
              <span className="text-xs text-teal-700 font-semibold">
                17 หน่วยบริการปฐมภูมิ และ 1 รพ.แม่ข่าย
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
              {pcuNetwork.map((pcu) => (
                <div 
                  key={pcu.code} 
                  className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 flex flex-col justify-between gap-1 shadow-2xs hover:border-teal-300 transition-[border-color] duration-150"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span className="truncate">{pcu.name}</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 pl-3">{pcu.code}</span>
                </div>
              ))}
              <div className="bg-teal-50 p-3 rounded-xl border border-teal-200 text-xs font-semibold text-teal-900 flex flex-col justify-between gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-700 shrink-0" />
                  <span className="truncate">รพ.สวรรคโลก (แม่ข่าย)</span>
                </div>
                <span className="font-mono text-[10px] text-teal-600 pl-3">11248</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="bg-teal-600 text-white p-1.5 rounded-lg">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">SWPC Healthcare</span>
              <span className="text-[11px] text-slate-400 block">กลุ่มงานเภสัชกรรมและคุ้มครองผู้บริโภค โรงพยาบาลสวรรคโลก</span>
            </div>
          </div>

          <p className="text-center md:text-left">
            © 2026 เครือข่ายบริการสุขภาพปฐมภูมิ อำเภอสวรรคโลก จังหวัดสุโขทัย. สงวนลิขสิทธิ์.
          </p>

          <div className="flex gap-4">
            <Link 
              href="/criteria" 
              className="text-slate-600 hover:text-teal-700 transition-[color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
            >
              เกณฑ์ส่วนที่ 7
            </Link>
            <Link 
              href="/login" 
              className="text-slate-600 hover:text-teal-700 transition-[color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
            >
              เข้าสู่ระบบ
            </Link>
            <Link 
              href="/register" 
              className="text-slate-600 hover:text-teal-700 transition-[color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
            >
              ลงทะเบียน รพ.สต.
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
