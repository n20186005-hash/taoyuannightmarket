export interface TopicPageLink {
  slug: string;
  href: string;
  kicker: string;
  title: string;
  description: string;
}

// 四個長尾專題頁；首頁、頁尾與各專題頁互鏈均引用同一份清單，保持一致。
export const topicPages: TopicPageLink[] = [
  {
    slug: "hours",
    href: "/hours/",
    kicker: "營業時間",
    title: "今天有開嗎？幾點開始與結束",
    description: "一般營業時段、今日是否營業、人潮時段與個別攤商差異一次看。"
  },
  {
    slug: "food",
    href: "/food/",
    kicker: "必吃美食",
    title: "必吃小吃與攤位指南",
    description: "8 款代表性在地小吃，先主食、再點心、最後甜品的吃法建議。"
  },
  {
    slug: "parking",
    href: "/parking/",
    kicker: "停車攻略",
    title: "附近停車場與步行入口",
    description: "路邊車格、民營停車場與步行進場建議，避開尖峰找車位。"
  },
  {
    slug: "transport",
    href: "/transport/",
    kicker: "交通地圖",
    title: "桃園車站、公車與入口導航",
    description: "從桃園火車站、機場與外圍怎麼到中正路與北埔路口。"
  }
];
