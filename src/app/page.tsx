import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Activity, 
  Stethoscope, 
  Pill, 
  ClipboardList, 
  AlertCircle, 
  ArrowRight,
  LogIn,
  UserPlus
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="glass-card rounded-full px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-primary hidden md:block">
              SWPC Healthcare
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-slate-600 font-medium hover:text-primary transition-colors flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>เข้าสู่ระบบ</span>
            </Link>
            <Link 
              href="/register" 
              className="btn-primary flex items-center gap-2 py-2 px-6"
            >
              <UserPlus className="w-4 h-4" />
              <span>สมัครสมาชิก</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-10 pointer-events-none">
          <Image 
            src="/images/hero-bg.png" 
            alt="Medical background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm border border-primary/20">
              <ShieldCheck className="w-4 h-4" />
              <span>ระบบจัดการงานเภสัชกรรมครบวงจร</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]">
              งานเภสัชกรรมปฐมภูมิ <br />
              <span className="text-primary italic">เครือข่ายบริการสุขภาพ</span> <br />
              อำเภอสวรรคโลก
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              แพลตฟอร์มการจัดการการบริการเภสัชกรรมปฐมภูมิ และการคุ้มครองผู้บริโภคด้านสุขภาพ (คบส.) 
              ออกแบบมาเพื่อ รพ.สต. และเภสัชกร เพื่อเพิ่มประสิทธิภาพในการดูแลความปลอดภัยด้านยาในชุมชน
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/register" 
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                เริ่มต้นใช้งานระบบ
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/login" 
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center"
              >
                เข้าสู่ระบบสำหรับบุคลากร
              </Link>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative z-10 glass-card p-4 rounded-3xl overflow-hidden aspect-square md:aspect-auto">
              <Image 
                src="/images/hero-bg.png" 
                alt="Healthcare platform demo" 
                width={800} 
                height={600} 
                className="rounded-2xl object-cover"
              />
            </div>
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl flex items-center gap-3 animate-bounce shadow-2xl z-20">
              <div className="bg-health-green/20 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-health-green" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Uptime</div>
                <div className="text-lg font-bold">99.9%</div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl space-y-2 shadow-2xl z-20 hidden sm:block">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-bold">ความปลอดภัยสูงสุด</span>
              </div>
              <p className="text-xs text-slate-500 w-48">
                ระบบรักษาความปลอดภัยข้อมูลผู้ป่วยมาตรฐานสากล พร้อมการสำรองข้อมูลแบบเรียลไทม์
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              ฟีเจอร์สำคัญสำหรับบุคลากรสาธารณสุข
            </h2>
            <p className="text-slate-500 text-lg">
              รวบรวมทุกเครื่องมือที่จำเป็นในการจัดการงานเภสัชกรรมและการคุ้มครองผู้บริโภคไว้ในที่เดียว
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Feature 1: Evaluation Criteria */}
            <div className="md:col-span-2 md:row-span-1 glass-card p-8 rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-primary hover:text-white transition-all duration-500">
              <div className="space-y-4">
                <div className="bg-primary/10 group-hover:bg-white/20 p-3 rounded-2xl w-fit transition-colors">
                  <ClipboardList className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold">เกณฑ์การประเมินส่วนที่ 7</h3>
                <p className="text-slate-500 group-hover:text-white/80">
                  ตรวจสอบและประเมินมาตรฐานงานเภสัชกรรมและ คบส. ตามเกณฑ์มาตรฐานปฐมภูมิ ครอบคลุมทุกด้านอย่างครบถ้วน
                </p>
              </div>
              <div className="flex justify-end pt-6">
                <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Feature 2: Medication Errors */}
            <div className="md:col-span-1 md:row-span-1 glass-card p-8 rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-health-green hover:text-white transition-all duration-500">
              <div className="space-y-4">
                <div className="bg-health-green/10 group-hover:bg-white/20 p-3 rounded-2xl w-fit transition-colors">
                  <AlertCircle className="w-8 h-8 text-health-green group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold">ระบบรายงาน ME</h3>
                <p className="text-slate-500 group-hover:text-white/80">
                  บันทึกและติดตามอุบัติการณ์ทางยา (Medication Error) แบบเรียลไทม์
                </p>
              </div>
              <div className="flex justify-end pt-6">
                <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Feature 3: Unsafe Products */}
            <div className="md:col-span-1 md:row-span-2 glass-card p-8 rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-accent hover:text-white transition-all duration-500 overflow-hidden relative">
              <div className="space-y-4 relative z-10">
                <div className="bg-accent/10 group-hover:bg-white/20 p-3 rounded-2xl w-fit transition-colors">
                  <Pill className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold">แจ้งผลิตภัณฑ์ไม่ปลอดภัย</h3>
                <p className="text-slate-500 group-hover:text-white/80">
                  เฝ้าระวังและแจ้งเตือนผลิตภัณฑ์สุขภาพที่ไม่ปลอดภัยในชุมชน พร้อมระบบติดตามสถานะการจัดการ
                </p>
              </div>
              <div className="flex justify-end relative z-10">
                <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Feature 4: Documents & Evidence */}
            <div className="md:col-span-2 md:row-span-1 glass-card p-8 rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-secondary hover:text-white transition-all duration-500">
              <div className="space-y-4">
                <div className="bg-secondary/10 group-hover:bg-white/20 p-3 rounded-2xl w-fit transition-colors">
                  <Stethoscope className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold">คลังเอกสารและหลักฐาน</h3>
                <p className="text-slate-500 group-hover:text-white/80">
                  จัดการไฟล์เอกสารหลักฐานสำหรับการนิเทศงาน เชื่อมต่อกับระบบจัดเก็บข้อมูลคลาวด์อย่างมีประสิทธิภาพ
                </p>
              </div>
              <div className="flex justify-end pt-6">
                <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Feature 5: Real-time Dashboard */}
            <div className="md:col-span-1 md:row-span-1 glass-card p-8 rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-500">
              <div className="space-y-4">
                <div className="bg-slate-900/10 group-hover:bg-white/20 p-3 rounded-2xl w-fit transition-colors">
                  <Activity className="w-8 h-8 text-slate-900 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold">สรุปผลงานวิจัย</h3>
                <p className="text-slate-500 group-hover:text-white/80">
                  แดชบอร์ดสรุปสถิติและรายงานผลการดำเนินงาน
                </p>
              </div>
              <div className="flex justify-end pt-6">
                <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-slate-900">SWPC Healthcare</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 เครือข่ายบริการสุขภาพอำเภอสวรรคโลก. สงวนลิขสิทธิ์.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">ติดต่อเรา</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
