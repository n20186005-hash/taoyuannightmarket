export interface NearbyAttraction {
  slug: string;
  name: string;
  english: string;
  tagline: string;
  category: string;
  distance: string;
  address: string;
  admission: string;
  opening: string;
  duration: string;
  introduction: string;
  history: string;
  architecture: string;
  highlights: string[];
  tips: string[];
  itinerary: string[];
  photo: string;
  photoAlt: string;
  photoSource: string;
  source: string;
}

export const nearbyAttractions: NearbyAttraction[] = [
  {
    slug: "jingfu-temple", name: "桃園景福宮", english: "Jing Fu Gong Temple", tagline: "從桃園大廟讀懂舊城信仰與街市脈絡", category: "廟宇・歷史文化", distance: "約 1.03 公里", address: "330 桃園市桃園區中正路208號", admission: "免費參觀；宗教活動依現場規範", opening: "市府觀光資訊列每日 06:00–20:50；節慶活動可能調整", duration: "建議 20–40 分鐘", introduction: "景福宮被在地居民稱作「桃園大廟」，位於中正路舊城核心。廟宇的宗教活動與周邊店街共同見證城市發展，也是連結新民老街與站前商圈的步行節點。", history: "景福宮是桃園舊城長久的信仰中心。觀察廟宇周圍的街口，能理解早期商業與宗教活動如何相互帶動；廟會或祭典期間的動線及參觀空間也會不同。", architecture: "重點可看屋脊剪黏與龍形裝飾、正殿神龕、廟埕尺度，以及傳統屋頂與周圍現代建築的對比。拍照時避免干擾參拜。", highlights: ["中正路上的大廟城市地標", "廟埕與傳統屋頂裝飾", "景福宮—新民老街短距離舊城步行"], tips: ["入廟保持安靜，依現場指引參拜與拍照。", "節慶儀式時預留人潮與交通管制時間。", "若以建築為主題，可選日光充足時觀察屋脊細節。"], itinerary: ["景福宮廟埕與外觀", "沿新民街看街屋與巷弄", "傍晚轉往桃園觀光夜市"], photo: "/images/nearby/jingfu-temple.jpg", photoAlt: "桃園景福宮大廟入口與屋頂裝飾實景", photoSource: "https://www.tycg.gov.tw/NewsPage_Content.aspx?n=7&s=1607959", source: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/13"
  },
  {
    slug: "xinmin-old-street", name: "新民老街", english: "Xinmin Old Street", tagline: "在舊商店與新生活之間慢步桃園第一街", category: "歷史街區", distance: "約 1.11 公里", address: "330 桃園市桃園區新民街（街區範圍）", admission: "街區免費通行；各店消費另計", opening: "街道全年可通行；店家各自營業", duration: "建議 20–45 分鐘", introduction: "新民街緊鄰景福宮，是桃園舊城保存街巷尺度的重要場所。行走其間可看到不同時期的店面、民居、老字號商業與新進小店交錯。", history: "這條街與桃園早期商業發展緊密相連。傳統雜貨、生活服務與新式咖啡店並存，比起單一古蹟更適合觀察城市日常如何延續。", architecture: "留意窄巷路幅、店屋立面、騎樓或門廊處理、老招牌與後期改裝留下的層次。街區仍有人居住與營業，請尊重私人空間。", highlights: ["緊鄰景福宮的歷史街巷", "傳統店面與新舊招牌", "適合步行拍攝的街道細節"], tips: ["步道與車行空間可能交錯，留意機車。", "不要擋住商家出入口或拍攝私人住宅內部。", "想進店用餐請事先確認各店營業日。"], itinerary: ["從景福宮轉進新民街", "觀察街屋外牆與店面", "往桃園77藝文町或夜市延伸"], photo: "/images/nearby/xinmin-old-street.jpg", photoAlt: "桃園新民老街街道與兩側老店實景", photoSource: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/1465", source: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/1465"
  },
  {
    slug: "taoyuan-77", name: "桃園77藝文町", english: "Taoyuan 77 Cultural Streets", tagline: "走進老宿舍群，感受木構建築活化的藝文空間", category: "歷史建築・藝文園區", distance: "約 1.34 公里", address: "330 桃園市桃園區中正路77巷5號", admission: "園區與個別活動可能有不同收費規則，依當期公告", opening: "場館、商店與展演時段依營運公告", duration: "建議 30–60 分鐘", introduction: "桃園77藝文町由舊宿舍群活化為小尺度的文化空間，位在桃園車站與舊城之間。老屋、庭院、文創活動讓這裡適合安排在夜市之前。", history: "日式宿舍的再利用是桃園舊城活化的一環。園區不只是保留建築外殼，也透過展覽、工作坊與商業進駐，讓原有生活空間轉化為公共文化場所。", architecture: "可比較木構屋身、斜屋頂、簷廊與庭院植栽，以及修復構件和後期使用設施的差異。部分空間為店家營業區，不一定可自由入內。", highlights: ["低矮木構老宿舍與屋瓦", "庭院與綠蔭步行環境", "文創展演與城市再利用案例"], tips: ["活動、市集與展覽非每日都有。", "戶外適合觀察建築，室內拍攝遵守店家規定。", "可先逛站前商圈，再步行到景福宮與夜市。"], itinerary: ["從站前商圈沿中正路出發", "欣賞宿舍屋頂及庭院", "景福宮、新民街，最後吃夜市"], photo: "/images/nearby/taoyuan-77.webp", photoAlt: "桃園77藝文町日式木造宿舍與庭園實景", photoSource: "https://www.goteamjosh.com/blog/qiqi", source: "https://travel.tycg.gov.tw/zh-tw/travel/nearby-attractions/1424"
  },
  {
    slug: "arts-cinema", name: "桃園光影文化館（光影二館）", english: "Taoyuan Arts Cinema II", tagline: "從電影放映與影像活動認識城市文化", category: "影像文化場館", distance: "約 0.42 公里", address: "桃園市桃園區埔新路12號（出發前核對館別）", admission: "依當期活動或放映公告", opening: "依場館當期放映與展演公告", duration: "建議按場次安排，單純外觀約 10–20 分鐘", introduction: "光影文化館是桃園市區的影像文化據點。若想在夜市前安排電影、展覽或影像活動，可先查節目，再依場次決定到訪時間。", history: "文化空間以電影及藝術活動連結市民生活。其活動形式會隨年度策展調整，因此比起固定參觀時數，更應以當期節目作為行程核心。", architecture: "觀察入口、公共大廳與展演空間的動線；室內場地依放映及活動規範開放，切勿把公開大廳照片當成每個場次都可參觀的證明。", highlights: ["電影與影像文化活動", "距離夜市較近的室內備選點", "適合雨天先查場次再安排"], tips: ["光影文化館與名稱相近的館別可能不同，導航前核對地址。", "入場及拍攝依主辦單位規範。", "若無合適場次，可改成街區散步。"], itinerary: ["事先查場次與入場條件", "看展或欣賞放映", "步行至北埔路夜市"], photo: "/images/nearby/arts-cinema.jpg", photoAlt: "桃園光影文化館光影二館公共大廳實景", photoSource: "https://travel.tycg.gov.tw/en/travel/attraction/1479", source: "https://travel.tycg.gov.tw/zh-tw/travel/nearby-attractions/1478"
  },
  {
    slug: "micang-theater", name: "米倉劇場", english: "Mi Cang Theater", tagline: "老倉庫轉身成小型表演場館", category: "歷史建築・表演藝術", distance: "約 0.76 公里", address: "桃園市桃園區（請以文化局場館公告確認出入口）", admission: "依演出場次，可能免費或售票", opening: "表演日程與場館開放依文化局公告", duration: "有演出時依節目長度；外觀約 10–20 分鐘", introduction: "米倉劇場利用歷史米穀倉庫修復再生，將舊建築的記憶與當代表演結合。它適合有明確活動安排的旅客，不宜假設每天都能入內。", history: "桃園文化局資料指出，建物前身為日治時期米穀倉庫，後列為桃園市歷史建築並修復活化。地方物資流通空間轉型為劇場，折射城市產業與文化使用的變化。", architecture: "磚造外牆、木屋架與通氣窗是理解倉庫空間的重要線索；表演空間則增加燈光、音響與觀眾席。可從外觀比較新舊使用需求。", highlights: ["舊米倉歷史建築再利用", "磚造與木屋架特色", "小型演出與實驗展演空間"], tips: ["需依當期節目確認開放及購票方式。", "演出期間通常不宜攝影錄影。", "如無演出，勿期待能自由參觀內部。"], itinerary: ["依當期節目到劇場", "周邊舊城散步", "夜間前往桃園觀光夜市"], photo: "/images/nearby/micang-theater.jpg", photoAlt: "米倉劇場外觀與舊倉庫建築實景", photoSource: "https://www.broshood.com/pr42/", source: "https://culture.tycg.gov.tw/News_Content.aspx?n=11126&s=1067793"
  },
  {
    slug: "literature-museum", name: "桃園文學館", english: "Taoyuan Literature Museum", tagline: "從桃園文字與地方記憶，延伸一段舊城散步", category: "文學・文化館舍", distance: "約 1.31 公里", address: "桃園市桃園區忠孝街與東國街5巷一帶（請依館方入口指示）", admission: "依展覽與館方公告", opening: "館舍開放及休館資訊以文化局最新公告為準", duration: "建議 30–60 分鐘", introduction: "桃園文學館以地方文學、閱讀與展覽為核心，鄰近景福宮舊城區。對喜歡安靜看展的人來說，可先在這裡認識城市故事，再前往熱鬧夜市。", history: "文學館藉由常設與主題展覽介紹地方書寫、作者及作品，使桃園的文化記憶不只停留在地標，而能透過文本與展品被閱讀。", architecture: "館舍空間結合傳統街區脈絡與現代展覽需求。可注意書籍意象的外立面、樓層展間與閱讀空間如何串接；不同樓層的開放範圍依館方公告。", highlights: ["桃園文學史與主題展覽", "閱讀與展覽的室內慢遊", "景福宮附近的文化步行節點"], tips: ["事先查詢主題展、導覽與休館日。", "展品拍攝規範依現場標示。", "想同遊景福宮，建議先參觀有固定閉館時間的館舍。"], itinerary: ["進館認識桃園文學", "步行到景福宮與新民街", "晚上逛北埔路夜市"], photo: "/images/nearby/literature-museum.jpg", photoAlt: "桃園文學館建築外觀及入口空間實景", photoSource: "https://culture.tycg.gov.tw/News_Photo_Content.aspx?n=11168&s=1587471", source: "https://culture.tycg.gov.tw/News_Photo_Content.aspx?n=11168&s=1587471"
  },
  {
    slug: "fenghe-park", name: "風禾公園", english: "Fenghe Park", tagline: "在草地、生態湖與兒童遊戲空間放慢腳步", category: "都市公園・親子遊憩", distance: "約 1.53 公里", address: "桃園市桃園區慈文路688號", admission: "戶外公園免費，個別活動另計", opening: "戶外公園全天開放；設施維護時可能暫停使用", duration: "建議 40–90 分鐘", introduction: "風禾公園有開闊草地、景觀步道、生態湖與親子遊戲設施。它與夜市的氣氛不同，適合把白天的戶外活動與傍晚小吃分成兩段。", history: "作為市區公園，風禾以休閒活動與城市綠地為主。公園中的調節、綠化與遊戲空間，使附近居民能在住宅區旁散步、運動與親子活動。", architecture: "觀察開放草地、湖邊步道與遊戲場如何分區；園內設有長型滾輪溜滑梯及其他遊具。雨後設備及坡面可能濕滑，請依現場標示使用。", highlights: ["大型草地與湖邊步道", "親子遊戲及滾輪溜滑梯", "日間戶外活動與夜市晚餐組合"], tips: ["帶水、防曬與適合步行的鞋。", "兒童遊具需由陪同者照看並依年齡使用。", "下雨或高溫時可縮短戶外停留。"], itinerary: ["白天在草地和湖邊散步", "孩子依設施規定遊玩", "傍晚再前往夜市晚餐"], photo: "/images/nearby/fenghe-park.jpg", photoAlt: "桃園風禾公園綠地、步道與水景實景", photoSource: "https://tyfdc.org.tw/node/53", source: "https://travel.tycg.gov.tw/zh-tw/travel/tour/359"
  },
  {
    slug: "station-district", name: "桃園火車站前商圈", english: "Taoyuan Station Shopping District", tagline: "從百貨街區走向大廟，感受桃園商業新舊交會", category: "城市街區・購物", distance: "約 1.5 公里", address: "桃園市桃園區桃園車站前中正路至中山路景福宮一帶", admission: "街區免費；購物餐飲另計", opening: "公共街道全天可通行，各商家依個別營業時間", duration: "建議 45–90 分鐘", introduction: "桃園站前商圈從火車站沿中正路延伸，聚集百貨、服飾與餐飲；往景福宮方向又能接上歷史舊城。適合旅客把車站周邊、老街與夜市串成半日遊。", history: "車站交通帶動現代商業聚集，景福宮周邊又保留傳統市場與飲食。市府把商圈分成站前百貨、成功路周邊及大廟一帶，正好呈現不同年代的街市脈絡。", architecture: "觀察大路口、高密度招牌、商業建築與老街轉折。車流量大，拍攝都市街景時應使用行人空間，不要停在車道。", highlights: ["車站到大廟的商業廊帶", "新式百貨與傳統小吃交錯", "可直接串連桃園77藝文町"], tips: ["車站周邊車流密集，遵守號誌。", "不要把整條商圈當作單一店家營業時間。", "晚上想吃夜市，先把車站周邊採買排在前段。"], itinerary: ["桃園車站前中正路商圈", "桃園77藝文町與景福宮", "北埔路桃園觀光夜市"], photo: "/images/nearby/station-district.png", photoAlt: "桃園火車站前商圈街道與商店招牌實景", photoSource: "https://www.accupass.com/event/2107061906285592633180", source: "https://travel.tycg.gov.tw/zh-tw/consume/detail/1995"
  },
  {
    slug: "lianhua-temple", name: "桃園蓮華寺", english: "Taoyuan Lianhua Temple", tagline: "在市區巷弄認識觀音信仰與地方日常", category: "宗教文化・廟宇", distance: "市區短程順遊", address: "330 桃園市桃園區慈文路410號", admission: "參拜原則上免費；祈福服務依廟方現場資訊", opening: "參拜時段與活動日期依廟方公告", duration: "建議 20–40 分鐘", introduction: "桃園蓮華寺是桃園市區的觀音信仰場所。與熱鬧的夜市相比，廟宇適合慢下來觀察殿堂、神像和居民如何使用宗教空間。", history: "蓮華寺的地方信仰與日常祭祀連結桃園社區。廟宇可能因修繕留下不同年代的構件；建寺沿革與年代請以廟方碑文及公開資料為準。", architecture: "從入口、殿堂屋脊與神龕的佈置觀察廟宇空間，留意剪黏、彩繪與供桌的位置；遇到法會不要佔用參拜動線。", highlights: ["觀音信仰的地方文化", "殿堂雕飾與祭祀空間", "與夜市形成安靜和熱鬧的對照"], tips: ["保持安靜並依廟方指引參拜。", "香火、供品和攝影遵守現場規範。", "導航前以廟名核對入口與路口。"], itinerary: ["先確認廟方當日開放範圍", "觀看屋脊、殿堂與文化細節", "傍晚前往桃園觀光夜市"], photo: "/images/nearby/lianhua-temple.jpg", photoAlt: "桃園蓮華寺寺院祭祀空間實景", photoSource: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/1645", source: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/1645"
  },
  {
    slug: "damiaokou-police-station", name: "大廟口派出所－舊城再生基地", english: "Damiaokou Police Station Heritage Site", tagline: "從昭和時期警政建築閱讀桃園舊城再生", category: "歷史建築・舊城文化", distance: "約 1 公里（區域參考）", address: "330 桃園市桃園區中正路198號", admission: "建築外觀可於公共街道欣賞；室內開放與活動依管理公告", opening: "戶外街景可觀看；館舍開放依市府活動公告", duration: "建議 15–35 分鐘", introduction: "大廟口派出所位於景福宮旁，是桃園舊城行政與公共生活的珍貴見證。舊警察建築經保存與活化，轉型成介紹舊城再生的文化據點。", history: "建物於日治時期昭和二年（1927）興建，曾為地方派出所。保存後改作舊城再生基地，讓警政歷史與街區更新在同一棟建築相遇。", architecture: "觀察老派出所的立面比例、門窗形式、轉角與景福宮廟埕的空間關係；修復細節呈現歷史建物與當代用途如何共存。", highlights: ["1927 年興建的警政歷史建築", "景福宮旁的舊城街景", "文化資產活化與地方再生"], tips: ["避免誤認為現役警局或每日開放展館。", "室內參觀需依活動時段及公告。", "站在公共人行空間觀察外觀，勿阻擋路口。"], itinerary: ["景福宮前觀察街道", "步行至中正路198號看建築外觀", "接續新民老街與夜市"], photo: "/images/nearby/damiaokou-police-station.jpg", photoAlt: "大廟口派出所歷史建築外觀實景", photoSource: "https://culture.tycg.gov.tw/News_Photo_Content.aspx?n=11168&s=1431688", source: "https://culture.tycg.gov.tw/News_Photo_Content.aspx?n=11168&s=1431688"
  },
  {
    slug: "cihu-temple", name: "桃園慈護宮", english: "Taoyuan Cihu Temple", tagline: "沿舊城街區探訪媽祖信仰與傳統工藝", category: "宗教文化・媽祖廟", distance: "市中心順遊（以導航計算）", address: "330 桃園市桃園區復興路275號", admission: "一般參拜免費；個別服務依廟方公告", opening: "廟方參拜時間與祭典安排可能變動", duration: "建議 20–45 分鐘", introduction: "桃園慈護宮是地方媽祖信仰中心之一。前往時除了參拜，也可觀察屋頂、石雕和彩繪如何講述傳統信仰與社群生活。", history: "慈護宮與桃園地方媽祖信仰及節慶活動相連。歷經地方社會與街區環境變化，廟宇持續承擔祭祀和居民交流的功能。", architecture: "可從廟埕、屋脊裝飾、門神彩繪與石雕細節理解傳統宮廟的層次，宗教儀式進行時以參拜者為先。", highlights: ["媽祖信仰與地方節慶", "彩繪、石刻及廟宇屋脊", "桃園市區文化散步"], tips: ["事先查看廟方祭典及開放公告。", "別在參拜人潮中架設腳架。", "慈護宮與景福宮是不同地點，地圖不可互用。"], itinerary: ["核對慈護宮入口", "參觀殿堂與文化裝飾", "再搭配景福宮或夜市行程"], photo: "/images/nearby/cihu-temple.jpg", photoAlt: "桃園慈護宮寺廟正面實景", photoSource: "https://travel.tycg.gov.tw/zh-tw/Travel/Attraction/1372", source: "https://travel.tycg.gov.tw/zh-tw/Travel/Attraction/1372"
  },
  {
    slug: "railway-pavilion", name: "桃園軌道願景館", english: "Taoyuan Railway Vision Museum", tagline: "在舊鐵道倉庫探索城市交通的過去與未來", category: "鐵道歷史・展示館", distance: "桃園車站周邊", address: "330 桃園市桃園區萬壽路三段245號", admission: "入館與特別活動費用以館方公告為準", opening: "展館營運及休館日依當期公告", duration: "建議 40–70 分鐘", introduction: "桃園軌道願景館以舊鐵路倉庫保存再利用為背景，透過軌道展示和互動內容讓人理解桃園的交通發展。適合與桃園車站、站前商圈安排成一段主題行程。", history: "館舍由舊鐵道倉庫活化而來，展出桃園軌道建設歷程與交通願景。老倉庫本身即是鐵道運輸記憶的一部分。", architecture: "沿長形倉庫建築觀察屋架、立面和展示動線的配置，對照歷史儲運功能與新式模型、展板及互動裝置。", highlights: ["舊鐵路倉庫再利用", "軌道建設與城市交通展示", "車站附近親子室內文化行程"], tips: ["入館前查開放時段及維修公告。", "互動設施使用依工作人員指示。", "與夜市不是同一街區，預留轉乘時間。"], itinerary: ["從台鐵桃園站辨認館舍方位", "參觀鐵道歷史與模型展示", "沿站前商圈、舊城前往夜市"], photo: "/images/nearby/railway-pavilion.jpg", photoAlt: "桃園軌道願景館修復鐵道倉庫建築實景", photoSource: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/1423", source: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/1423"
  },
  {
    slug: "tudigong-museum", name: "桃園市土地公文化館", english: "Taoyuan Tudigong Culture Museum", tagline: "從土地公信仰、民俗文物與互動展覽認識桃園", category: "民俗文化・博物館", distance: "桃園市區，需另查路線", address: "330 桃園市桃園區三民路一段100號", admission: "免費入館；個別活動依館方公告", opening: "週二至週日 09:00–17:00，週一休館；國定假日另行公告", duration: "建議 45–90 分鐘", introduction: "桃園市土地公文化館於2017年開館，聚焦在臺灣各地常見的土地公信仰。館舍透過神像、民俗物件與教育活動，把社區日常祭祀與地方歷史介紹給不同年齡的訪客。", history: "土地公信仰與聚落開墾、農耕生活和商街發展密切相關。文化館以展示、講座與親子工作坊整理民間信仰的多樣面貌；它是介紹文化的公共館舍，不是單純的廟宇參拜點。", architecture: "現代展館以不同樓層安排文物及民俗主題展廳。參觀時可比較神像的造型、服飾和供奉方式，再觀察民俗展示如何轉化為互動教育空間。", highlights: ["土地公神像與地方民俗主題展", "適合親子與文化學習的室內行程", "由民間信仰理解桃園聚落歷史"], tips: ["週一固定休館，國定假日及連假請查看館方公告。", "文物展櫃拍攝須遵守展覽規範，不使用閃光燈。", "工作坊與導覽非每日提供，報名前先查場次。"], itinerary: ["從三民路一段100號入館查看展覽", "依展線觀看土地公造像與民俗文化", "接續舊城景福宮或晚間夜市"], photo: "https://ws.tycg.gov.tw/001/Upload/1/RelPic/7885/635371/IMG_8303.JPG", photoAlt: "桃園市土地公文化館及文化中心開幕時的建築外觀實景", photoSource: "https://www.tycg.gov.tw/NewsPage_Content.aspx?n=10&s=635371", source: "https://culture.tycg.gov.tw/News_Content.aspx?n=11168&s=1067201"
  },
  {
    slug: "taoyuan-main-library", name: "桃園市立圖書館總館", english: "Taoyuan Public Library Main Branch", tagline: "走進生命樹概念的城市閱讀地標", category: "現代建築・公共圖書館", distance: "約 1.8 公里（藝文特區區域參考）", address: "330 桃園市桃園區南平路303號", admission: "一般公共閱讀空間免費；特別活動另依公告", opening: "各樓層、服務櫃檯與休館日依桃園市立圖書館當期公告", duration: "建議 45–90 分鐘", introduction: "桃園市立圖書館總館位在藝文特區，外觀以層層環繞的綠化露臺和玻璃立面形成城市地標。館內串連閱讀、學習及文化活動，適合把白天的室內行程與夜間夜市分開安排。", history: "新總館以公共閱讀服務與城市文化生活為核心，建築設計由郭自強建築師事務所與日本梓設計團隊合作，提出「生命樹」的構想。它反映桃園從傳統街區向新興公共文化空間延伸的城市面貌。", architecture: "館舍以綠色螺旋、知識螺旋、圓錐形通風採光井及節能外皮為設計要素。可從戶外看樓層錯落與植栽，再在開放區域觀看挑高中庭、閱讀動線和採光變化。", highlights: ["層疊綠化露臺與玻璃建築", "生命樹概念與中央採光井", "藝文特區的閱讀與公共文化活動"], tips: ["圖書館以安靜閱讀為主，攝影勿打擾讀者。", "展覽、活動及書店等附屬設施有各自時段。", "從夜市前往藝文特區需預留交通時間，勿直接按直線距離估算步行。"], itinerary: ["從南平路303號欣賞建築外觀", "在開放樓層觀察中庭與閱讀空間", "沿藝文特區散步後前往夜市"], photo: "https://plisnet.nlpi.edu.tw/public/upload/LibAlbum/23111303373567987377783.jpg", photoAlt: "桃園市立圖書館總館室內書架、閱讀區及挑高中庭實景", photoSource: "https://plisnet.nlpi.edu.tw/Frontend/LibraryFamily/LibraryDetail?LIID=Lib0000121", source: "https://travel.tycg.gov.tw/zh-tw/travel/attraction/1656"
  }
];

export const nearbyMapUrl = (place: NearbyAttraction) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.address}`)}`;

// 依管理機關公開地址校正早期只標示街區的資料。
const verifiedVenueAddresses: Record<string, string> = {
  "micang-theater": "330 桃園市桃園區新生路169號",
  "literature-museum": "330 桃園市桃園區忠孝街11號"
};
for (const place of nearbyAttractions) {
  if (verifiedVenueAddresses[place.slug]) place.address = verifiedVenueAddresses[place.slug];
}
