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
  { question: "桃園觀光夜市每天都有營業嗎？", answer: "官方商圈資料列為週一至週日 17:30–00:00，但各攤商有自己的休息日、備料與天候考量，指定店家仍應以現場為準。" },
  { question: "幾點去最適合？", answer: "第一次到訪建議 18:00–19:00 抵達。此時多數攤位已陸續開張，又比晚間八點後更容易行走與用餐。" },
  { question: "桃園觀光夜市和中壢觀光夜市一樣嗎？", answer: "不一樣。本站介紹的是桃園區中正路與北埔路口一帶的桃園觀光夜市；中壢觀光夜市則位於中壢區。" },
  { question: "從桃園火車站怎麼去？", answer: "可搭公車至北埔路口等鄰近站點，或直接搭計程車前往中正路與北埔路口。路線與班次可能調整，出發前請使用即時導航確認。" },
  { question: "開車方便嗎？", answer: "周邊有路邊停車格與民營停車場，但舊城街區在晚餐尖峰容易塞車與客滿。自駕建議提早抵達，或停在外圍再步行進入。" },
  { question: "下雨天可以逛嗎？", answer: "可以，但街區沒有全程連續遮棚。雨傘會壓縮步行空間，若遇大雨，體驗會明顯下降。" },
  { question: "適合帶小孩或嬰兒車嗎？", answer: "適合提早到訪。建議 17:30–18:30 進場，優先走較寬路段，避開晚間最擁擠時段，並留意熱油攤位與車流。" },
  { question: "需要準備現金嗎？", answer: "建議準備適量現金。部分店家可能支援電子支付，但街邊攤位的付款方式並不一致。" }
];
