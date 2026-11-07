export interface HospitalOption {
  id: string;
  name: string;
}

export const HOSPITALS: HospitalOption[] = [
  { id: 'hosp_swpc', name: 'โรงพยาบาลสวรรคโลก (แม่ข่าย)' },
  { id: 'sso_swpc', name: 'สำนักงานสาธารณสุขอำเภอสวรรคโลก (สสอ.)' },
  { id: 'rpst_naimueang', name: 'รพ.สต. ในเมือง' },
  { id: 'rpst_klongkrachong', name: 'รพ.สต. คลองกระจง' },
  { id: 'rpst_yanyao', name: 'รพ.สต. ย่านยาว' },
  { id: 'rpst_nongklap', name: 'รพ.สต. หนองกลับ' },
  { id: 'rpst_paknam', name: 'รพ.สต. ปากน้ำ' },
  { id: 'rpst_wangmaikhon', name: 'รพ.สต. วังไม้ขอน' },
  { id: 'rpst_wangpinphat', name: 'รพ.สต. วังพิณพาทย์' },
  { id: 'rpst_pakumkoh', name: 'รพ.สต. ป่ากุมเกาะ' },
  { id: 'rpst_muangbangkhlang', name: 'รพ.สต. เมืองบางขลัง' },
  { id: 'rpst_thatong', name: 'รพ.สต. ท่าทอง' },
  { id: 'other', name: 'หน่วยบริการอื่นในเครือข่าย' },
];

export const USER_ROLES = [
  { 
    id: 'staff', 
    label: 'เจ้าหน้าที่ รพ.สต. (Staff)', 
    description: 'บันทึก ME, แจ้งผลิตภัณฑ์ไม่ปลอดภัย, แนบหลักฐานประเมิน' 
  },
  { 
    id: 'pharmacist', 
    label: 'เภสัชกร / ผู้รับผิดชอบงาน คบส. (Pharmacist)', 
    description: 'จัดการองค์ความรู้เกณฑ์ประเมิน, ตรวจสอบและรับเรื่องผลิตภัณฑ์' 
  },
] as const;
