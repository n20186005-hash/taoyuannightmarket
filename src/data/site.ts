export type FoodCategory = "主食" | "點心" | "甜品";

export interface FoodItem {
  name: string;
  category: FoodCategory;
  description: string;
  note: string;
  imageBase: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  share: string;
  location: string;
  sourceUrl: string;
}

export interface RoutePlan {
  id: "classic" | "couple" | "family";
  label: string;
  duration: string;
  summary: string;
  steps: Array<{ time: string; title: string; description: string }>;
}

export const quickFacts = [
  { label: "一般營業", value: "每日 17:30–00:00", hint: "各攤商時間不同" },
  { label: "建議抵達", value: "18:00–19:00", hint: "攤位較齊、較好行走" },
  { label: "建議停留", value: "1.5–2.5 小時", hint: "排隊名店可再加時" },
  { label: "主要入口", value: "中正路 × 北埔路", hint: "由此開始最好辨認" }
];

export const highlights = [
  {
    eyebrow: "老桃園味",
    title: "從舊城長出來的夜市",
    description: "夜市早期圍繞景福宮與中正路發展，1988 年遷至北埔路、正康二街一帶，至今仍是桃園人的晚餐與宵夜記憶。"
  },
  {
    eyebrow: "超過 200 攤",
    title: "不是只有一條街",
    description: "攤位散布於北埔路、正康二街及周邊巷弄，從傳統小吃、甜品，到服飾、生活用品與遊戲攤都有。"
  },
  {
    eyebrow: "在地日常",
    title: "比打卡更重要的是好好吃",
    description: "這裡不是整齊劃一的新式園區，而是保留街區尺度、熟客節奏與老店煙火氣的生活型夜市。"
  }
];

export const foods: FoodItem[] = [
  {
    name: "黑人鼎邊趖",
    category: "主食",
    description: "米漿沿鍋邊炊成薄片，搭配羹湯與多樣配料，是夜市具代表性的老味道。",
    note: "適合先吃，暖胃又有飽足感",
    imageBase: "/images/food-dingbian",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "台式湯麵與雞蛋餐點示意",
    share: "1 人主食",
    location: "北埔路、正康二街一帶",
    sourceUrl: "https://dongwa.tw/black-dingbianchan/"
  },
  {
    name: "阿財鍋貼",
    category: "主食",
    description: "底部煎得焦香，適合兩人共享，也能作為一輪小吃前的主食。",
    note: "熱門時段可能需要等候",
    imageBase: "/images/food-potstickers",
    imageWidth: 1200,
    imageHeight: 1800,
    imageAlt: "煎至金黃的鍋貼餐點示意",
    share: "2 人分食",
    location: "正康二街一帶",
    sourceUrl: "https://www.viviyu.com/archives/63515"
  },
  {
    name: "嘉義順蚵仔煎",
    category: "主食",
    description: "蚵仔煎與花枝羹是經典台灣夜市組合，一次吃到煎香與鮮甜。",
    note: "多人同行可分食兩樣",
    imageBase: "/images/food-oyster-omelette",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "煎蛋類台式小吃餐點示意",
    share: "1～2 人",
    location: "北埔路 59 號一帶",
    sourceUrl: "https://news.ustv.com.tw/food/shop/975"
  },
  {
    name: "頭頓煎蝦餅",
    category: "點心",
    description: "帶有越南風味的酥脆蝦餅，是桃園多元飲食文化很有辨識度的一味。",
    note: "趁熱吃口感最好",
    imageBase: "/images/food-shrimp-cake",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "金黃酥脆的煎炸點心餐點示意",
    share: "2 人分食",
    location: "夜市街區內",
    sourceUrl: "https://fullfenblog.tw/taoyuan-night-market/"
  },
  {
    name: "ㄉㄨㄞ ㄉㄨㄞ地瓜球",
    category: "點心",
    description: "外層酥、內裡帶嚼勁，適合邊走邊吃，也是親子容易分享的點心。",
    note: "先買小份，留胃給其他老店",
    imageBase: "/images/food-sweet-potato-balls",
    imageWidth: 1200,
    imageHeight: 1801,
    imageAlt: "金黃色炸薯球餐點示意",
    share: "2～3 人分食",
    location: "北埔路、正康二街一帶",
    sourceUrl: "https://fullfenblog.tw/taoyuan-night-market/"
  },
  {
    name: "冬瓜粉圓豆花",
    category: "甜品",
    description: "清爽豆花搭配粉圓與糖水，適合平衡前段炸物與重口味小吃。",
    note: "甜品品項依當日現場為準",
    imageBase: "/images/food-tofu-pudding",
    imageWidth: 1200,
    imageHeight: 1600,
    imageAlt: "豆花與粉圓甜品餐點示意",
    share: "1 人甜品",
    location: "北埔路、正康二街一帶",
    sourceUrl: "https://food-safetyws.tycg.gov.tw/Download.ashx?n=5qGD5ZyS6KeA5YWJ5aSc5biCLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvMS9yZWxmaWxlLzEwMTQ3LzQ5ODEvODJkYzI5YzctM2VlOC00MWY5LWFlMjEtMWZmOTQ2ZDVhNTcxLnBkZg%3D%3D"
  },
  {
    name: "桃園觀光夜市烤馬鈴薯",
    category: "點心",
    description: "整顆馬鈴薯搭配乳酪與多種配料，份量扎實，適合當作共享鹹食。",
    note: "配料與供應狀況依現場為準",
    imageBase: "/images/food-baked-potato",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "鋪有起司與配料的烤馬鈴薯餐點示意",
    share: "2 人分食",
    location: "北埔路、正康二街一帶",
    sourceUrl: "https://travel.tycg.gov.tw/zh-tw/consume/detail/1913"
  },
  {
    name: "張傢店排骨酥",
    category: "點心",
    description: "酥香肉塊適合邊走邊吃，也能和鍋貼或湯品搭配成一輪鹹食。",
    note: "現炸餐點請留意溫度",
    imageBase: "/images/food-pork-ribs",
    imageWidth: 1200,
    imageHeight: 807,
    imageAlt: "金黃酥脆的炸豬肉塊餐點示意",
    share: "2～3 人分食",
    location: "北埔路與正康一街口",
    sourceUrl: "https://food-safetyws.tycg.gov.tw/Download.ashx?n=5qGD5ZyS6KeA5YWJ5aSc5biCLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvMS9yZWxmaWxlLzEwMTQ3LzQ5ODEvODJkYzI5YzctM2VlOC00MWY5LWFlMjEtMWZmOTQ2ZDVhNTcxLnBkZg%3D%3D"
  }
];

export const timeGuidance = [
  { time: "17:30–18:30", title: "適合親子與長者", description: "通常較容易行走，也方便先找座位與洗手間。", tone: "quiet" },
  { time: "18:30–20:30", title: "攤位陸續到齊", description: "晚餐時段人潮增加，想吃熱門店要預留排隊時間。", tone: "rising" },
  { time: "20:30–22:00", title: "夜市氣氛最完整", description: "燈光與人潮最有夜市感，主要路段也可能較擁擠。", tone: "peak" },
  { time: "22:00 以後", title: "部分攤位可能收攤", description: "適合簡單吃宵夜，指定攤位建議先確認當晚狀況。", tone: "late" }
];

export const nearbyPlaces = [
  { name: "桃園光影文化館", distance: "約 422 公尺", stay: "建議 30～60 分鐘", bestTime: "白天至傍晚", description: "先看展或短暫休息，再步行前往夜市。" },
  { name: "景福宮", distance: "約 1.03 公里", stay: "建議 20～40 分鐘", bestTime: "午後", description: "從桃園舊城信仰中心，理解夜市早期發展脈絡。" },
  { name: "新民老街", distance: "約 1.11 公里", stay: "建議 30～45 分鐘", bestTime: "午後", description: "沿老街散步、感受街廓，再接續傍晚夜市行程。" },
  { name: "桃園 77 藝文町", distance: "約 1.34 公里", stay: "建議 45～60 分鐘", bestTime: "白天至傍晚", description: "日式宿舍與藝文空間，適合作為舊城半日遊起點。" }
];

export const routes: RoutePlan[] = [
  {
    id: "classic",
    label: "90 分鐘精華",
    duration: "約 90 分鐘",
    summary: "第一次來最穩妥的走法：先主食、再點心、最後甜品，不必把每條巷弄都走完。",
    steps: [
      { time: "18:00", title: "中正路 × 北埔路集合", description: "從主要入口進場，先確認回程方向與同行者集合點。" },
      { time: "18:10", title: "北埔路先吃主食", description: "先選鼎邊趖、鍋貼或蚵仔煎，避免一開始只吃炸物。" },
      { time: "18:45", title: "轉入正康二街", description: "挑一份煎蝦餅、地瓜球或蔥油餅，邊走邊看攤位。" },
      { time: "19:20", title: "甜品收尾", description: "以米糕粥、芋湯、豆花或燒麻糬結束，再沿較寬道路離場。" }
    ]
  },
  {
    id: "couple",
    label: "兩人分享",
    duration: "約 2 小時",
    summary: "每攤只點一份，主食、炸物與甜品輪流共享，吃得到更多而不會太快飽。",
    steps: [
      { time: "18:00", title: "一份主食共食", description: "鼎邊趖或鍋貼選一樣，先墊胃並保留空間。" },
      { time: "18:30", title: "挑兩樣手拿小吃", description: "煎蝦餅配地瓜球，或蔥油餅搭烤物，口感不要重複。" },
      { time: "19:10", title: "慢逛遊戲與雜貨攤", description: "穿插非美食區，讓用餐節奏放慢，也比較不會一路排隊。" },
      { time: "19:35", title: "一冷一熱甜品", description: "依天氣選豆花、芋湯或燒麻糬，最後再決定是否加碼。" }
    ]
  },
  {
    id: "family",
    label: "親子輕鬆",
    duration: "約 75–100 分鐘",
    summary: "提早抵達、少走回頭路，把遊戲攤放在中段，盡量在晚間八點前完成主要行程。",
    steps: [
      { time: "17:40", title: "趁人潮較少入場", description: "嬰兒車與幼童更容易通行，也較方便先找洗手間。" },
      { time: "17:55", title: "先吃能坐下的主食", description: "選有座位或方便分食的店家，避免孩子邊走邊吃熱食。" },
      { time: "18:30", title: "安排一次遊戲攤", description: "預先設定遊戲預算與次數，體驗後再繼續找點心。" },
      { time: "19:00", title: "點心後提早離場", description: "選地瓜球或豆花收尾，避開晚間最密集的人潮。" }
    ]
  }
];

export const faqs = [
  { question: "桃園觀光夜市幾點開始營業？開到幾點？", answer: "桃園觀光夜市一般營業時間為每日 17:30 至午夜 00:00（深夜 12 點）。多數攤位約 17:30 起陸續準備，18:00 後較齊全；熱門美食攤位可能提早售完或延後收攤，想指定店家建議提早前往。註：桃園市官方旅遊網不同頁面對開始營業時間有 17:00 與 17:30 兩種表述，個別攤商也有各自休息日，本站資訊於 2026 年 10 月核對，實際狀況請以現場與官方公告為準。" },
  { question: "桃園觀光夜市今天有開嗎？每天都營業嗎？", answer: "官方商圈資料列為週一至週日皆營業，時間約 17:30–00:00，多數日子都有營業。但夜市由許多獨立攤商組成，個別店家有各自的休息日、備料與天候考量，指定店家仍應以現場或店家公告為準。" },
  { question: "桃園觀光夜市在哪裡？地址與主要入口？", answer: "桃園觀光夜市位於台灣桃園市桃園區，範圍以北埔路與正康二街一帶為主（郵遞區號 330）。主要入口為「中正路與北埔路口」，導航或 Google 地圖可直接搜尋「桃園觀光夜市」。" },
  { question: "桃園觀光夜市附近有停車場嗎？開車方便嗎？", answer: "有。周邊同時有路邊收費停車格與民營平面、立體停車場，但晚餐至宵夜尖峰時段車位流動慢、容易客滿，舊城街區也較容易壅塞。建議 18:00 前抵達，或停在外圍再步行進入，也可改搭大眾運輸或計程車。本站不推薦特定停車場，費率與空位請以現場公告為準。" },
  { question: "幾點去最適合？", answer: "第一次到訪建議 18:00–19:00 抵達。此時多數攤位已陸續開張，又比晚間八點後更容易行走與用餐。" },
  { question: "桃園觀光夜市和中壢觀光夜市一樣嗎？", answer: "不一樣。本站介紹的是桃園區中正路與北埔路口一帶的桃園觀光夜市；中壢觀光夜市則位於中壢區。" },
  { question: "從桃園火車站怎麼去？", answer: "可搭公車至北埔路口等鄰近站點，或直接搭計程車前往中正路與北埔路口。路線與班次可能調整，出發前請使用即時導航確認。" },
  { question: "下雨天可以逛嗎？", answer: "可以，但街區沒有全程連續遮棚。雨傘會壓縮步行空間，若遇大雨，體驗會明顯下降。" },
  { question: "適合帶小孩或嬰兒車嗎？", answer: "適合提早到訪。建議 17:30–18:30 進場，優先走較寬路段，避開晚間最擁擠時段，並留意熱油攤位與車流。" },
  { question: "需要準備現金嗎？", answer: "建議準備適量現金。部分店家可能支援電子支付，但街邊攤位的付款方式並不一致。" },
  { question: "桃園觀光夜市在 Google 地圖上的評分是多少？", answer: "本站頁面顯示的評分為 4.0 分（約 21,141 則評價），評分與評價數同步自 Google 地圖使用者評價，同步時間為 2026 年 10 月。Google 地圖評分會隨新評價持續變動，最新數據請以 Google 地圖即時顯示為準。" }
];

export const attraction = {
  fullName: "桃園觀光夜市",
  shortName: "桃園夜市",
  englishName: "Taoyuan Night Market",
  city: "桃園區",
  region: "桃園市",
  country: "台灣",
  countryCode: "TW",
  postalCode: "330",
  telephone: "+88633347940",
  mapsShareUrl: "https://maps.app.goo.gl/go5NgBtPjFxGCXhL7",
  govtTourismUrl: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/969"
};

export const googleRating = {
  rating: 4.0,
  reviewCount: 21141,
  syncLabel: "2026 年 10 月"
};

// 營業時間說明：官方旅遊網不同頁面對「開始營業」有 17:00 與 17:30 兩種表述，
// 夜市由許多獨立攤商組成，個別店家另有各自休息日。以下為一般參考時段，
// 實際狀況請以現場與官方公告為準；數值會定期向桃園市觀光旅遊網核對。
export const hoursInfo = {
  general: "每日 17:30–00:00（週一至週日）",
  generalNote: "多數攤位約 17:30 起陸續準備，18:00 後較齊全；熱門美食攤可能提早售完或延後收攤。",
  sourceNote: "桃園市觀光旅遊網不同頁面對開始營業時間有 17:00 與 17:30 兩種表述，本站以多數攤位實際營業經驗採 17:30 起。",
  verified: "核對時間：2026 年 10 月（來源：桃園市觀光旅遊網）"
};

export const sourceReferences = [
  {
    tag: "評價",
    title: "Google 地圖使用者評價",
    meta: "同步時間 2026 年 10 月",
    note: "同步自 Google 地圖用戶評價，同步時間 2026 年 10 月；版權歸原作者與 Google 地圖所有。",
    url: "https://maps.app.goo.gl/go5NgBtPjFxGCXhL7",
    linkText: "在谷歌地图查看全部评价"
  },
  {
    tag: "官方旅遊資料",
    title: "桃園市觀光旅遊網",
    meta: "桃園市政府觀光旅遊局",
    note: "夜市位置、一般營業時段與周邊景點，以桃園市官方旅遊資料為主要依據。",
    url: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/969",
    linkText: "前往官方旅遊網"
  },
  {
    tag: "地圖資料",
    title: "Google 地圖",
    meta: "位置、導航與嵌入地圖",
    note: "頁面內的地圖嵌入、導航連結與定位資訊，均來自 Google 地圖。",
    url: "https://maps.app.goo.gl/go5NgBtPjFxGCXhL7",
    linkText: "在 Google 地圖開啟"
  },
  {
    tag: "天氣資料",
    title: "即時天氣與未來預報",
    meta: "自動更新",
    note: "天氣資訊為自動更新資料，僅供行程安排參考；颱風、豪雨與臨時管制請以中央氣象署與現場公告為準。",
    url: "https://www.cwa.gov.tw/",
    linkText: "前往中央氣象署"
  }
];

export interface FacilityItem {
  icon: string;
  label: string;
  title: string;
  points: string[];
  note: string;
}

// 訪客服務與周邊設施：僅就「設施類型」做客觀概述，不指名、不推薦任何特定商戶。
export const visitorFacilities: FacilityItem[] = [
  {
    icon: "wc",
    label: "洗手間（WC）",
    title: "以鄰近公共與店家設施為主",
    points: [
      "夜市屬開放式街區，沒有單一的遊客服務型洗手間，多數人會就近使用鄰近公園、公有市場與廟宇周邊的公共廁所。",
      "便利商店、速食店與部分餐飲店通常設有洗手間，尖峰時段可能需排隊或配合店家消費規定。",
      "建議進場前先確認一處洗手間位置，帶幼童者尤其建議提早安排。"
    ],
    note: "夜間部分公共設施可能關閉，實際開放情況以現場標示為準。"
  },
  {
    icon: "parking",
    label: "停車",
    title: "路邊車格與民營停車場並存",
    points: [
      "周邊同時有路邊收費停車格與民營平面、立體停車場，選擇多元，並非單一型式。",
      "晚餐至宵夜尖峰時段車位流動慢、容易客滿，舊城街區也較易壅塞。",
      "自駕者可以考慮停在外圍再步行進入，或改搭大眾運輸，省下找車位的時間。"
    ],
    note: "本站不推薦特定停車場；費率、營業時間與車位數請以現場公告為準。"
  },
  {
    icon: "food",
    label: "餐飲與飲水",
    title: "夜市攤商與周邊餐飲店密集",
    points: [
      "場域本身即以小吃攤商為主，周邊另有小吃店、餐廳與手搖飲料店等不同類型的餐飲選擇。",
      "便利商店可補充飲水、飲料與簡便食品，適合買瓶裝水備用。",
      "用餐尖峰多集中在 18:30–20:30，想避開排隊可提早或錯開時段。"
    ],
    note: "各攤商營業日與供應品項不同，實際情況以現場為準。"
  },
  {
    icon: "bed",
    label: "住宿",
    title: "以商務旅館與旅店類型為主",
    points: [
      "周邊住宿大致涵蓋商務旅館、一般旅店、青年旅館（背包客棧）與汽車旅館等類型。",
      "選擇時可優先考慮步行或短程車程可達夜市者，方便安排晚餐與宵夜後回程。",
      "假日前後與連續假期住房需求較高，建議提前預訂。"
    ],
    note: "本站不做個別住宿推薦；房型、價格與評價請自行比較後決定。"
  },
  {
    icon: "store",
    label: "便利商店與超市",
    title: "便利商店密度高，採買方便",
    points: [
      "周邊便利商店分布密集，可購買飲水、雨具、藥品、口罩與日用品。",
      "另有超市與量販類型的門市，適合需要較大量採購或購買生鮮的旅客。",
      "夜間時段以便利商店最為便利，超商也多設有座位區與洗手間。"
    ],
    note: "本段僅描述設施類型，未指名任何品牌或門市。"
  },
  {
    icon: "fuel",
    label: "加油與充電",
    title: "加油站與充電設施皆有",
    points: [
      "周邊設有加油站，適合自駕旅客在進入舊城區前先補給。",
      "電動車充電樁多附設於停車場或商場，數量與規格（交流／直流、接頭型式）不一。",
      "出發前可先以導航或充電服務 App 確認即時可用狀態。"
    ],
    note: "站點位置、營業時間與費率以現場標示為準。"
  },
  {
    icon: "cash",
    label: "提款（ATM）",
    title: "提款機多設於便利商店與銀行",
    points: [
      "便利商店與金融機構據點通常設有 ATM，可提領現金。",
      "多數攤商以現金交易為主，建議出發前準備適量現金。",
      "部分店家可能支援電子支付，但街邊攤位的收款方式並不一致。"
    ],
    note: "跨行提款可能產生手續費，依各金融機構規定。"
  },
  {
    icon: "medical",
    label: "藥局與醫療",
    title: "藥局、診所與緊急服務",
    points: [
      "周邊有藥局與診所，可處理輕微不適或購買常備藥品。",
      "緊急狀況請撥 119（消防與救護）、110（警察）。",
      "人潮擁擠時請留意孩童與長者動向，並記下同行者集合點。"
    ],
    note: "夜間部分藥局未營業，急症請直接就醫或撥打緊急電話。"
  },
  {
    icon: "accessible",
    label: "無障礙與親子",
    title: "開放街區，通行需多加留意",
    points: [
      "夜市為開放街區，部分路段有騎樓與人行道高低差，攤位密集處通行寬度較有限。",
      "建議由主要道路側進出、避開最擁擠時段，並放慢速度以策安全。",
      "哺乳與親子設施可於鄰近百貨、便利商店或公共場館尋找。"
    ],
    note: "如需輪椅或推車同行，建議先以街景服務了解現場路況。"
  },
  {
    icon: "info",
    label: "服務中心與遺失物",
    title: "無單一服務台，就近求助",
    points: [
      "夜市沒有統一的遊客服務中心，遇到問題可就近詢問攤商或店家。",
      "遺失物品可洽周邊派出所或場域管理單位協助。",
      "消費爭議建議先與店家溝通，必要時保留憑證並尋求相關單位協助。"
    ],
    note: "本區塊為一般性說明，不構成任何商業推薦。"
  }
];

export const seasonalGuide = [
  { season: "春季 3–5 月", temp: "約 18–26°C", rain: "鋒面與短暫陣雨", feel: "涼爽舒適，適合緩步逛", tip: "帶薄外套與折傘，留意早晚溫差。" },
  { season: "梅雨 5–6 月", temp: "約 24–29°C", rain: "滯留鋒面、降雨綿長", feel: "潮濕悶熱，地面易濕滑", tip: "備折傘與防潑水鞋，盡量避開連續大雨時段。" },
  { season: "夏季 7–8 月", temp: "約 27–34°C", rain: "午後雷陣雨、颱風季", feel: "高溫悶熱，體感偏黏", tip: "多補水、穿透氣衣物；颱風期間留意停班停課與管制公告。" },
  { season: "秋季 9–11 月", temp: "約 22–29°C", rain: "天氣轉穩、偶有鋒面", feel: "涼爽宜人，逛起來最舒服", tip: "公認最適合造訪的季節，仍建議帶一件薄外套。" },
  { season: "冬季 12–2 月", temp: "約 14–20°C", rain: "東北季風、涼冷偶雨", feel: "濕冷，熱湯熱食更對味", tip: "防風外套與保暖衣物，雨天記得帶傘。" }
];

export const seasonalNote =
  "上表為桃園地區長期氣候平均的概略歸納，並非即時預報；實際天候仍以當日氣象與現場狀況為準。";

export interface AudiencePlan {
  id: string;
  icon: string;
  label: string;
  duration: string;
  bestTime: string;
  summary: string;
  focus: string[];
  care: string[];
}

export const audiencePlans: AudiencePlan[] = [
  {
    id: "family",
    icon: "family",
    label: "親子家庭",
    duration: "約 75–100 分鐘",
    bestTime: "17:30–19:00",
    summary: "提早進場、少走回頭路，把遊戲攤安排在體力還夠的中段，並在晚間人潮最密集前完成主要行程。",
    focus: [
      "優先走較寬的主幹道，避開攤位密集的巷弄。",
      "先找可用餐的座位，避免讓孩子邊走邊吃熱食。",
      "遊戲攤先約定預算與次數，體驗後再繼續找點心。"
    ],
    care: [
      "為幼童準備推車或背巾，並相約走失時的集合點。",
      "留意熱油、熱湯攤位與來往車輛。",
      "隨身帶濕紙巾與水，方便清潔與補水。"
    ]
  },
  {
    id: "photo",
    icon: "camera",
    label: "攝影夜拍",
    duration: "約 2–3 小時",
    bestTime: "18:30–21:00",
    summary: "夜市的燈光、招牌與人潮本身就是題材，從環境紀實到食物特寫都能拍，關鍵在光線運用與拍攝禮貌。",
    focus: [
      "以招牌燈、燈籠與攤位燈箱作為主要光源，善用大光圈與較高 ISO。",
      "食物特寫可靠近拍，但請先徵得攤商同意，不要擋住取餐動線。",
      "人像可選擇較暗的背景搭配燈光散景，營造夜市氛圍。"
    ],
    care: [
      "避免使用閃光燈直射攤商與其他顧客。",
      "拍攝人物前先徵詢意願，尊重他人隱私。",
      "貴重器材請留意隨身，人潮擁擠處避免頻繁換鏡頭。"
    ]
  },
  {
    id: "accessible",
    icon: "accessible",
    label: "低體力與無障礙",
    duration: "約 60–90 分鐘",
    bestTime: "17:30–18:30",
    summary: "以短程、少折返為原則，選擇路面較平、寬度較足的路段，並事先規劃休息點與洗手間位置。",
    focus: [
      "由主要道路側進出，優先走騎樓或人行道較完整的路段。",
      "安排中段休息點，可於便利商店或周邊店家稍作停留。",
      "把想吃的攤位集中在同一區，減少來回走動。"
    ],
    care: [
      "留意騎樓高低差、地面濕滑與散落雜物。",
      "輪椅或推車同行者建議先以街景服務確認路況。",
      "感覺不適時儘早就近休息，必要時求助。"
    ]
  }
];

export const dayTripPlans = [
  {
    id: "half",
    icon: "clock",
    label: "半日遊",
    duration: "約 4–5 小時",
    summary: "以舊城散步搭配夜市晚餐為主，適合下午抵達、當天來回的旅客。",
    steps: [
      { time: "14:00", title: "舊城藝文散步", description: "從桃園 77 藝文町或新民老街出發，感受日式宿舍與老街街廓。" },
      { time: "15:30", title: "廟口與信仰中心", description: "走訪景福宮一帶，理解夜市早期的廟口市集脈絡。" },
      { time: "16:30", title: "光影文化館小憩", description: "看展或短暫休息，為傍晚的夜市行程保留體力。" },
      { time: "17:40", title: "夜市開吃", description: "由中正路與北埔路入口進場，先主食、再點心、最後甜品。" }
    ]
  },
  {
    id: "full",
    icon: "sun",
    label: "全日遊",
    duration: "約 8–10 小時",
    summary: "把舊城白天行程與夜市夜晚體驗串成一整天，適合專程造訪、想慢慢認識桃園的旅客。",
    steps: [
      { time: "10:30", title: "藝文町開場", description: "以日式宿舍群與文創空間作為一天的起點。" },
      { time: "12:00", title: "舊城午餐", description: "在舊城區用餐，順道認識街區與在地店家。" },
      { time: "14:00", title: "新民老街散步", description: "沿老街慢行，看看老屋立面與街屋格局。" },
      { time: "15:30", title: "景福宮與市集", description: "參訪舊城信仰中心，並在周邊短暫停留。" },
      { time: "17:00", title: "休息與補水", description: "找一處可坐下的地方休息，準備進入夜市時段。" },
      { time: "18:00", title: "夜市慢慢吃", description: "依路線分輪品嘗主食、炸物與甜品，穿插遊戲與雜貨攤。" },
      { time: "21:00", title: "宵夜與收尾", description: "以甜品或熱湯收尾，再依交通方式從容離場。" }
    ]
  }
];

export const visitorResponsibility = [
  {
    icon: "spark",
    title: "夜市文化小知識",
    points: [
      "台灣夜市多從廟口與市集發展而來，兼具飲食、購物與社交功能。",
      "夜市是城市的「共同廚房」，也是公共空間，逛夜市的節奏往往是邊走邊吃、邊聊邊買。",
      "不同攤商的營業日、備料與休假日各異，這正是街區型夜市的日常樣貌。"
    ]
  },
  {
    icon: "food",
    title: "飲食安全與衛生",
    points: [
      "生食與熟食分開食用，海鮮、生冷食品與冰品依個人腸胃狀況適量攝取。",
      "留意餐點是否充分加熱，現做餐點請稍放涼再入口，避免燙口。",
      "對特定食材過敏者請先向攤商確認成分，並留意個人衛生。"
    ]
  },
  {
    icon: "leaf",
    title: "環境與減塑",
    points: [
      "垃圾請投入垃圾桶或自行帶走，落實垃圾不落地與資源回收。",
      "可自備環保餐具、購物袋與水壺，減少一次性用品。",
      "食物適量購買、避免浪費，也是對環境與食材的尊重。"
    ]
  },
  {
    icon: "shield",
    title: "交通與隨身安全",
    points: [
      "穿越道路請走行人穿越設施並留意來車，勿邊走邊滑手機。",
      "人潮擁擠處請留意隨身財物，背包建議前背或置於視線可及處。",
      "如有飲酒，請勿駕車，改搭大眾運輸或計程車。"
    ]
  },
  {
    icon: "info",
    title: "尊重在地與攤商",
    points: [
      "排隊時依序等候，不插隊、不長時間佔用座位。",
      "不隨意阻擋攤位動線，拍攝前先徵詢攤商與他人意願。",
      "控制音量、保持環境整潔，尊重周邊住戶的安寧。"
    ]
  },
  {
    icon: "ticket",
    title: "消費與禮儀",
    points: [
      "先確認價格與份量再點餐，避免退換爭議。",
      "以現金交易為主，部分店家可能支援電子支付。",
      "理性消費、支持在地攤商，並保留消費憑證以備不時之需。"
    ]
  }
];

export const heritageTimeline = [
  { era: "清代至日治時期", title: "廟口聚市", description: "桃園舊城的商業與信仰以廟宇為中心，廟口周邊聚集攤販，形成市集的雛形。" },
  { era: "戰後至 1980 年代", title: "中正路夜市聚落", description: "隨著城市發展，攤販沿中正路一帶聚集，逐漸形成居民口中的「中正路夜市」。" },
  { era: "1988 年", title: "遷址現地", description: "為改善交通與市容，市集遷移至北埔路、正康二街一帶，成為今日的桃園觀光夜市。" },
  { era: "1990 年代至今", title: "觀光夜市定位", description: "在官方與商圈共同經營下，夜市成為桃園具代表性的夜間美食與觀光據點之一。" }
];

export const heritageStories = [
  {
    icon: "spark",
    title: "廟口記憶：夜市從信仰開始",
    text: "台灣許多夜市的前身是廟口市集。信仰帶來人潮，人潮帶來攤販，攤販再慢慢長成一條可以被記住的街。桃園觀光夜市的源頭，也與舊城的廟口生活緊密相連。"
  },
  {
    icon: "food",
    title: "老攤的傳承：同一鍋味道",
    text: "在夜市裡，不少攤位由家族一代傳一代，同一鍋湯、同一種調味，成為熟客辨認的記號。對在地人而言，夜市不只是吃東西的地方，更是記憶與人情味的所在。"
  },
  {
    icon: "family",
    title: "節慶與廟會：一年裡最熱鬧的時候",
    text: "每逢節慶與廟會繞境，夜市周邊往往比平日更加熱鬧。地方相傳，這些節慶不僅凝聚信仰，也讓夜市成為鄰里交流、彼此問候的重要場合。"
  }
];

export const heritageNote =
  "本區內容整理自公開文史資料與地方口述，部分敘述為地方相傳，旨在協助旅客認識在地脈絡，非嚴謹學術考證。";
