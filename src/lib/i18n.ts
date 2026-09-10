import type { Food } from './foods';

export type Language = 'vi' | 'en';

export const copy = {
  vi: {
    tiers: ['QUỐC DÂN', 'HIẾM', 'CỰC PHẨM', 'TỐI MẬT', '★ ĐẶC BIỆT'],
    title: 'Mở hòm ăn trưa', counterPrefix: 'Đã ghi nhận', counterSuffix: 'hòm',
    counterTitle: 'Lượt quay hoàn tất được ghi nhận trên website này', caseLabel: 'Mở hòm món ăn',
    soundOn: 'Âm thanh bật', soundOff: 'Âm thanh tắt', turnSoundOff: 'Tắt âm thanh', turnSoundOn: 'Bật âm thanh',
    github: 'Mở mã nguồn trên GitHub', starsPending: 'chưa tải', language: 'Switch to English',
    spend: 'Mức chi thường ngày', custom: 'Tuỳ chỉnh', customSpend: 'Mức chi tuỳ chỉnh (nghìn đồng)',
    thousandPerMeal: 'nghìn / bữa', spendError: 'Nhập từ 30 đến 180 nghìn.', vegetarianPool: 'Pool hiện tại: trung bình',
    vegetarianOnly: 'Chỉ ăn chay', vegetarian: 'Ăn chay', opening: 'ĐANG MỞ HÒM…', openAgain: 'MỞ LẠI', open: 'MỞ HÒM',
    newItem: 'VẬT PHẨM MỚI', referencePrice: 'Giá tham khảo', perPerson: '/ người', find: 'TÌM QUÁN', continue: 'TIẾP TỤC', nearby: 'gần đây',
    locationsDescription: 'Tất cả {count} cơ sở Vikings Gaming', openMap: 'Mở bản đồ', close: 'ĐÓNG', locationsNote: 'Nguồn: vikings.vn/cyber · cập nhật 10/09/2026.', newBranch: 'Mới', comingSoon: 'Sắp mở', branchPage: 'Trang chi nhánh',
    whatsInside: 'TRONG HÒM CÓ GÌ?', items: 'Vật phẩm trong hòm', mystery: '★ MÓN BÍ ẨN', mysteryAlt: 'Món bí ẩn hạng vàng',
    footer: 'Fan-made · SFX: Valve /', lunchDish: 'Món ăn trưa', vegetarianDish: 'Chay',
  },
  en: {
    tiers: ['MIL-SPEC', 'RESTRICTED', 'CLASSIFIED', 'COVERT', '★ SPECIAL ITEM'],
    title: 'Open a lunch case', counterPrefix: 'Recorded', counterSuffix: 'cases',
    counterTitle: 'Completed spins recorded on this website', caseLabel: 'Open a lunch case',
    soundOn: 'Sound on', soundOff: 'Sound off', turnSoundOff: 'Mute sound', turnSoundOn: 'Enable sound',
    github: 'Open source on GitHub', starsPending: 'not loaded', language: 'Chuyển sang tiếng Việt',
    spend: 'Usual lunch spend', custom: 'Custom', customSpend: 'Custom spend (thousand VND)',
    thousandPerMeal: 'thousand VND / meal', spendError: 'Enter 30–180 thousand VND.', vegetarianPool: 'Current pool average',
    vegetarianOnly: 'Vegetarian only', vegetarian: 'Vegetarian', opening: 'OPENING CASE…', openAgain: 'OPEN AGAIN', open: 'OPEN CASE',
    newItem: 'NEW ITEM', referencePrice: 'Typical price', perPerson: '/ person', find: 'FIND NEARBY', continue: 'CONTINUE', nearby: 'near me',
    locationsDescription: 'All {count} Vikings Gaming locations', openMap: 'Open map', close: 'CLOSE', locationsNote: 'Source: vikings.vn/cyber · updated 2026-09-10.', newBranch: 'New', comingSoon: 'Coming soon', branchPage: 'Branch page',
    whatsInside: "WHAT'S IN THE CASE?", items: 'Items in this case', mystery: '★ MYSTERY DISH', mysteryAlt: 'Gold-tier mystery dish',
    footer: 'Fan-made · SFX: Valve /', lunchDish: 'Lunch dish', vegetarianDish: 'Vegetarian',
  },
} as const;

export function foodName(food: Food, _language: Language) {
  return food.name;
}

export function foodSubtitle(food: Food, _language: Language) {
  return food.sub;
}

export function priceLabel(thousands: number | string, language: Language, approximate = false) {
  const value = Number(thousands) * 1000;
  const formatted = language === 'en' ? `₫${new Intl.NumberFormat('en-US').format(value)}` : `${new Intl.NumberFormat('vi-VN').format(value)}đ`;
  return `${approximate ? '~' : ''}${formatted}`;
}
