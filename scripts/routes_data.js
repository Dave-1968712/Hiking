
module.exports = [
    {
        id: 1,
        category: "hiking",
        title: "雨崩神湖徒步",
        location: "云南·德钦",
        difficulty: "moderate", // easy, moderate, hard
        distance: "55km+",
        duration: "4-5天",
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["高海拔", "雪山", "森林", "神瀑"],
        desc: "不去天堂，就去雨崩。梅里雪山脚下的世外桃源，感受神瀑的洗礼。",
        fullDesc: "雨崩村位于云南德钦县云岭乡境内，坐落在梅里雪山神女峰、念慈母峰、五冠峰等高大的山体脚下。这里曾是与世隔绝的桃花源，如今已成为国内顶级的徒步圣地。你可以近距离接触梅里雪山，感受藏族文化的神秘与虔诚。",
        altitude: "3000m - 4600m",
        bestSeason: "5-6月（杜鹃花季），9-11月（秋色、日照金山）",
        gear: [
            "登山杖（双杖）",
            "中高帮防水徒步鞋",
            "冲锋衣裤（防风防水）",
            "保暖层（抓绒/羽绒）",
            "冰爪/雪套（冬春季必备）"
        ],
        itinerary: [
            { day: "Day 1", title: "飞来寺 - 西当/尼农 - 上雨崩", desc: "乘车或徒步进村，入住上雨崩，适应海拔。" },
            { day: "Day 2", title: "冰湖线（往返14km）", desc: "上雨崩 - 笑农大本营 - 冰湖 - 上雨崩。主要看雪山冰川。" },
            { day: "Day 3", title: "神瀑线（往返12km）", desc: "上雨崩 - 下雨崩 - 神瀑 - 下雨崩。藏民转山必去之地，沐浴圣水。" },
            { day: "Day 4", title: "神湖线或尼塞线", desc: "神湖线难度极大（海拔爬升1500m+），量力而行；或选择尼塞牧场休闲游。" },
            { day: "Day 5", title: "出村", desc: "尼农峡谷徒步出村，欣赏壮丽的峡谷风光。" }
        ]
    },
    {
        id: 2,
        title: "武功山云海穿越",
        location: "江西·萍乡",
        difficulty: "moderate",
        distance: "25km",
        duration: "2-3天",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["高山草甸", "云海", "日出", "反穿"],
        desc: "华东户外圣地，万亩高山草甸，体验在云端行走的震撼。",
        fullDesc: "武功山以其连绵起伏的高山草甸和壮观的云海日出而闻名。这里是华东地区最热门的徒步线路之一，被称为“云中草原”。反穿路线避开了景区的人流，更具野趣和挑战性。",
        altitude: "500m - 1918.3m (金顶)",
        bestSeason: "5-10月（草甸转绿），9月帐篷节，12-1月（雪景）",
        gear: [
            "防晒用品（无遮挡，紫外线强）",
            "速干衣物",
            "防风外套",
            "登山杖",
            "护膝（上下坡较多）"
        ],
        itinerary: [
            { day: "Day 1", title: "龙山村 - 发云界", desc: "从龙山村起步，一路爬升至发云界，晚上在此住宿或露营，看晚霞。" },
            { day: "Day 2", title: "发云界 - 绝望坡 - 金顶", desc: "行走在山脊线上，翻越绝望坡，抵达金顶，若运气好可见云海翻腾。" },
            { day: "Day 3", title: "金顶 - 景区大门", desc: "看日出后，徒步或乘坐索道下山，结束行程。" }
        ]
    },
    {
        id: 3,
        title: "徽杭古道",
        location: "安徽·绩溪",
        difficulty: "easy",
        distance: "15-20km",
        duration: "1-2天",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["古道", "历史", "人文", "轻徒步"],
        desc: "入门级经典线路，重走徽商之路，感受江南山水的清秀。",
        fullDesc: "徽杭古道是继“丝绸之路”、“茶马古道”之后的中国第三条著名古道。它是古时徽商和浙商互通贸易的重要通道。沿途风景秀丽，古迹众多，是户外新手的入门首选。",
        altitude: "200m - 1050m (蓝天凹)",
        bestSeason: "3-5月（油菜花、映山红），10-11月（秋高气爽）",
        gear: [
            "轻便徒步鞋/运动鞋",
            "透气衣物",
            "双肩包",
            "水壶"
        ],
        itinerary: [
            { day: "Day 1", title: "绩溪鱼川 - 江南第一关 - 黄茅培", desc: "从鱼川入口进入，攀登江南第一关，感受古道险峻，宿黄茅培或下雪堂。" },
            { day: "Day 2", title: "下雪堂 - 蓝天凹 - 永来村", desc: "翻越蓝天凹（最高点），打卡拍照，一路下坡至浙江临安永来村出口。" }
        ]
    },
    {
        id: 4,
        title: "鳌太线穿越",
        location: "陕西·秦岭",
        difficulty: "hard",
        distance: "100km+",
        duration: "5-7天",
        image: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["无人区", "极寒", "挑战", "硬核"],
        desc: "中国最顶级的徒步线路之一，被称为'行走在中华龙脊'，极具挑战性。",
        fullDesc: "【警告：目前该线路处于管制状态，严禁非法穿越】鳌太线是纵贯秦岭鳌山与太白山之间的一条主脉线路。这里气候多变，地形复杂，大部分路段在海拔3000米以上，被称为“死亡线路”。仅适合极具经验的专业户外人士在获得许可的前提下进行。",
        altitude: "1740m - 3767m (拔仙台)",
        bestSeason: "6-9月（相对适宜，但气候依然多变）",
        gear: [
            "重装背包 (60L+)",
            "高山帐篷",
            "-15度羽绒睡袋",
            "GPS导航设备",
            "专业冲锋衣裤",
            "足够路餐与燃料"
        ],
        itinerary: [
            { day: "Day 1", title: "塘口 - 2900营地", desc: "从塘口出发，适应性爬升，抵达2900营地扎营。" },
            { day: "Day 2", title: "2900营地 - 鳌山大梁 - 导航架", desc: "翻越鳌山大梁，经过标志性的导航架。" },
            { day: "Day 3-5", title: "飞机梁 - 2800营地 - 塔1 - 塔2", desc: "漫长的山脊线行走，经历石海、草甸，需克服大风与缺氧。" },
            { day: "Day 6", title: "大爷海 - 拔仙台 - 下撤", desc: "登顶秦岭最高峰拔仙台，经大爷海下撤至汤峪或鹦鸽镇。" }
        ]
    },
    {
        id: 5,
        title: "贡嘎大环线",
        location: "四川·甘孜",
        difficulty: "hard",
        distance: "70km+",
        duration: "5-7天",
        image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["蜀山之王", "冰川", "藏族风情", "日照金山"],
        desc: "近距离仰望蜀山之王贡嘎，穿越日乌且垭口，风景绝美。",
        fullDesc: "贡嘎山是四川最高峰，被称为“蜀山之王”。贡嘎大环线是一条世界级的徒步线路，你将围绕主峰行走，穿越原始森林、高山草甸，翻越海拔4900米的垭口，欣赏壮丽的冰川和神圣的雪山。",
        altitude: "3000m - 4900m (日乌且垭口)",
        bestSeason: "5-6月，9-10月（避开雨季）",
        gear: [
            "高帮防水徒步鞋",
            "羽绒服（晚间极冷）",
            "防晒霜/墨镜",
            "登山杖",
            "个人药品（抗高反）"
        ],
        itinerary: [
            { day: "Day 1", title: "成都 - 康定 - 老榆林", desc: "乘车抵达康定，进入老榆林电站，适应海拔。" },
            { day: "Day 2", title: "老榆林 - 格西草原 - 两岔河", desc: "开始徒步，穿越原始森林，抵达两岔河营地。" },
            { day: "Day 3", title: "两岔河 - 下日乌且 - 上日乌且", desc: "海拔逐渐升高，视野开阔，可看到小贡嘎和嘉子峰。" },
            { day: "Day 4", title: "上日乌且 - 日乌且垭口 - 莫溪沟", desc: "翻越最高点日乌且垭口（4900m），极具挑战，随后下坡至莫溪沟。" },
            { day: "Day 5-6", title: "贡嘎寺 - 子梅村 - 巴王海", desc: "前往贡嘎寺朝拜，经子梅村穿越巴王海，结束行程。" }
        ]
    },
    {
        id: 6,
        title: "莫干山竹海",
        location: "浙江·湖州",
        difficulty: "easy",
        distance: "10-15km",
        duration: "1天",
        image: "https://images.unsplash.com/photo-1596327663938-23910c2a2b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["竹海", "避暑", "亲子", "民宿"],
        desc: "漫步在千亩竹海之中，清凉避暑，适合全家出游的休闲线路。",
        fullDesc: "莫干山是中国四大避暑胜地之一，以竹、云、泉“三胜”和清、静、绿、凉“四优”而驰名。这里有连绵的竹海、百年的别墅和清澈的山泉，非常适合周末休闲徒步。",
        altitude: "200m - 700m",
        bestSeason: "6-9月（避暑），10-12月（赏枫）",
        gear: [
            "休闲运动鞋",
            "驱蚊水",
            "防晒衣",
            "相机"
        ],
        itinerary: [
            { day: "上午", title: "后坞 - 蒋公道", desc: "从后坞村出发，沿着蒋公道漫步竹林，享受清凉。" },
            { day: "中午", title: "庾村集镇", desc: "在庾村品尝当地美食，参观民国风情建筑。" },
            { day: "下午", title: "剑池 - 怪石角", desc: "游览著名的剑池飞瀑，登怪石角远眺，随后返程。" }
        ]
    },
    {
        id: 7,
        category: "photography",
        title: "江西婺源·最美乡村摄影",
        location: "江西·上饶",
        difficulty: "easy",
        distance: "30km",
        duration: "3-4天",
        image: "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["油菜花", "徽派建筑", "晒秋", "晨雾"],
        desc: "中国最美乡村，春赏万亩花海，秋观古村晒秋，摄影爱好者的天堂。",
        fullDesc: "婺源被誉为“中国最美乡村”，四季皆有景。春季江岭的万亩梯田油菜花海金黄遍野，粉墙黛瓦掩映其中；秋季篁岭的“晒秋”民俗红红火火，晨雾中的石城如梦似幻。这里是人文与自然完美结合的摄影圣地。",
        altitude: "100m - 500m",
        bestSeason: "3-4月（花季），11-12月（红叶/晒秋）",
        gear: [
            "广角镜头",
            "长焦镜头",
            "三脚架",
            "无人机",
            "偏振镜"
        ],
        itinerary: [
            { 
                day: "Day 1", 
                title: "抵达婺源 - 月亮湾日落", 
                desc: "抵达婺源，前往月亮湾拍摄竹筏与夕阳，入住县城或景区。",
                photos: [
                    {
                        url: "https://images.unsplash.com/photo-1526462980138-090409c31404?q=80&w=1200",
                        desc: "月亮湾竹筏夕阳：金黄色的水面与渔夫撑船剪影。",
                        params: "Time: 18:30 | f/11 | 1/125s | ISO 100"
                    }
                ]
            },
            { 
                day: "Day 2", 
                title: "江岭晨拍花海 - 庆源古村", 
                desc: "清晨前往江岭拍摄梯田花海晨雾，下午游览原生态庆源古村。",
                photos: [
                    {
                        url: "https://images.unsplash.com/photo-1520625902143-693a9d701633?q=80&w=1200",
                        desc: "江岭梯田花海：晨雾缭绕中的金黄油菜花与黑白徽派建筑。",
                        params: "Time: 06:15 | f/16 | 1/60s | ISO 100"
                    }
                ]
            },
            { 
                day: "Day 3", 
                title: "篁岭晒秋/古建 - 汪口", 
                desc: "拍摄篁岭特色的晒秋景观和徽派古建，下午前往汪口拍摄全景。",
                photos: [
                    {
                        url: "https://images.unsplash.com/photo-1534078306532-3518e2c04068?q=80&w=1200",
                        desc: "篁岭晒秋：五彩斑斓的农作物晾晒在古村屋顶。",
                        params: "Time: 10:00 | f/8 | 1/200s | ISO 200"
                    }
                ]
            },
            { 
                day: "Day 4", 
                title: "石城晨雾 - 返程", 
                desc: "早起拍摄石城晨雾与红枫，感受水墨画般的意境，随后返程。",
                photos: [
                    {
                        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200",
                        desc: "石城晨雾红枫：炊烟袅袅中的红叶与古村落。",
                        params: "Time: 06:45 | f/8 | 1/30s | ISO 400"
                    }
                ]
            }
        ],
        scenicSpots: [
            {
                id: 'moonbay',
                name: '月亮湾',
                type: 'nature',
                tags: ['摄影天堂', '日落', '竹筏'],
                image: 'https://images.unsplash.com/photo-1526462980138-090409c31404?q=80&w=1200',
                desc: '一弯如月的小岛，水墨画般的意境，摄影师的必争之地。',
                details: {
                    bestTime: '傍晚日落时分（17:00-18:30）或清晨晨雾',
                    ticket: '免费（观景台），竹筏漂流约 30元/人',
                    transport: '距离县城 5km，推荐打车或包车前往（约 15分钟）',
                    tips: '最佳机位在路边半山腰的观景台，需使用长焦镜头拍摄特写，或广角拍摄全景。'
                }
            },
            {
                id: 'jiangling',
                name: '江岭',
                type: 'flower',
                tags: ['油菜花海', '梯田', '晨雾'],
                image: 'https://images.unsplash.com/photo-1520625902143-693a9d701633?q=80&w=1200',
                desc: '中国四大花海之一，万亩梯田油菜花与古村落交相辉映。',
                details: {
                    bestTime: '3月中旬至4月上旬（花期），清晨6:00-8:00（晨雾）',
                    ticket: '80元/人（包含在210元通票内）',
                    transport: '东线热门景点，县城有直达班车，旺季建议包车避免拥堵',
                    tips: '一号观景台视野最开阔，可俯瞰整个花海梯田；二号观景台适合拍摄局部特写。'
                }
            },
            {
                id: 'huangling',
                name: '篁岭',
                type: 'village',
                tags: ['晒秋', '古村', '鲜花小镇'],
                image: 'https://images.unsplash.com/photo-1534078306532-3518e2c04068?q=80&w=1200',
                desc: '挂在山崖上的古村，独特的“晒秋”农俗闻名遐迩。',
                details: {
                    bestTime: '全年皆宜，秋季（9-11月）看晒秋，春季看花海',
                    ticket: '145元/人（含上下索道）',
                    transport: '距离县城约 40km，有景区直通车（19元/人）',
                    tips: '必拍点：晒工坊（俯瞰全景）、五桂堂（推窗拍摄）、摄影吧。'
                }
            },
            {
                id: 'likeng',
                name: '李坑',
                type: 'village',
                tags: ['小桥流水', '徽派建筑', '夜景'],
                image: 'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?q=80&w=1200',
                desc: '小桥流水人家，保存完好的明清徽派古建筑群。',
                details: {
                    bestTime: '清晨或傍晚亮灯时分，避开白天人流高峰',
                    ticket: '60元/人（包含在210元通票内）',
                    transport: '距离县城 12km，打车约 30元，公交十分便利',
                    tips: '村内小溪两旁的茶楼酒肆非常有氛围，适合慢门拍摄流水与灯笼。'
                }
            }
        ]
    },
    {
        id: 8,
        category: "photography",
        title: "浙江丽水·江南秘境摄影",
        location: "浙江·丽水",
        difficulty: "easy",
        distance: "20km",
        duration: "3-4天",
        image: "https://images.unsplash.com/photo-1531393527264-9b1689252328?q=80&w=1200",
        tags: ["云和梯田", "古堰画乡", "仙都", "帆船"],
        desc: "最后的江南秘境，云和梯田的云海日出，古堰画乡的帆影重重。",
        fullDesc: "丽水被誉为“最后的江南秘境”。云和梯田被CNN评为中国最美梯田之一，云海日出蔚为壮观；古堰画乡有着千年古樟群和瓯江帆影，是天然的画卷；仙都景区的鼎湖峰更是武侠剧的御用取景地。",
        altitude: "200m - 1000m",
        bestSeason: "4-6月（灌水期），9-10月（稻黄）",
        gear: [
            "三脚架（必带）",
            "减光镜(ND)",
            "渐变镜(GND)",
            "防水鞋"
        ],
        itinerary: [
            { day: "Day 1", title: "缙云仙都 - 鼎湖峰", desc: "拍摄鼎湖峰倒影，运气好可拍到老汉牵牛过桥的经典画面。" },
            { day: "Day 2", title: "云和梯田日出 - 松阳古村落", desc: "清晨拍摄“中国最美梯田”日出云海，下午探访松阳古村落。" },
            { day: "Day 3", title: "古堰画乡晨拍 - 瓯江帆影", desc: "拍摄古樟树与瓯江帆影，感受画里的水乡风情。" },
            { day: "Day 4", title: "南尖岩云海 - 返程", desc: "前往南尖岩拍摄云海梯田，随后结束行程。" }
        ]
    },
    {
        id: 9,
        category: "photography",
        title: "安徽黄山·水墨仙境摄影",
        location: "安徽·黄山",
        difficulty: "moderate",
        distance: "30km",
        duration: "3天",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
        tags: ["云海", "奇松", "怪石", "日出"],
        desc: "五岳归来不看山，黄山归来不看岳。捕捉云海苍松的极致水墨画卷。",
        fullDesc: "黄山以“奇松、怪石、云海、温泉、冬雪”五绝著称于世。对于摄影师而言，黄山是一幅永远拍不完的水墨画。北海的日出、西海大峡谷的落日、光明顶的云海，每一处都是大片的诞生地。",
        altitude: "1600m - 1864m",
        bestSeason: "全年（冬季云海概率高，春秋色彩丰富）",
        gear: [
            "超广角",
            "长焦(70-200)",
            "稳固三脚架",
            "快门线",
            "防寒衣物"
        ],
        itinerary: [
            { day: "Day 1", title: "云谷寺上山 - 始信峰 - 北海日落", desc: "乘索道上山，拍摄始信峰奇松，傍晚在北海或清凉台拍摄日落。" },
            { day: "Day 2", title: "光明顶日出 - 西海大峡谷", desc: "早起光明顶拍日出，白天深入西海大峡谷拍摄壮丽峡谷风光。" },
            { day: "Day 3", title: "飞来石 - 宏村/西递 - 返程", desc: "拍摄飞来石，下山后可前往宏村或西递拍摄古村落夜景/晨景，随后返程。" }
        ]
    }
];
