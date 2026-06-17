import type { Work, AiImage } from '@/types'

export const works: Work[] = [
  {
    id: '1',
    title: '品牌视觉升级',
    description: '为科技创新企业打造全新品牌形象',
    detailDescription: '为「智云科技」完成品牌视觉系统升级，包括Logo设计、品牌色彩体系、字体规范以及全套VI应用设计。项目历时3个月，涵盖了从策略规划到视觉落地的全流程。设计理念融合了科技感与人文温度，通过渐变色彩和几何图形传达企业的创新精神。',
    category: '品牌视觉',
    year: 2024,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiM2NjdlZWEiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4=',
    link: 'https://www.behance.net/gallery/189273641/Brand-Identity-Upgrade'
  },
  {
    id: '2',
    title: '电商平台UI设计',
    description: '响应式电商平台界面设计',
    detailDescription: '为「优选商城」设计了一套完整的电商平台UI系统，包含首页、商品列表、商品详情、购物车和订单管理等核心页面。采用组件化设计思路，确保了良好的用户体验和视觉一致性。整体设计风格现代简约，突出商品展示。',
    category: 'UI设计',
    year: 2024,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiM3NjRiYTIiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4=',
    link: 'https://www.dribbble.com/shots/2345678-Ecommerce-Platform-UI'
  },
  {
    id: '3',
    title: '健康管理APP',
    description: '健康管理类应用设计',
    detailDescription: '为「健康宝」设计了完整的UI/UX方案，包括用户登录、健康数据展示、运动追踪、饮食记录等功能模块。注重用户体验和数据可视化呈现，采用清新的绿色为主色调，传达健康活力的品牌调性。',
    category: 'UI设计',
    year: 2023,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiNmMDkzZmIiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4=',
    link: 'https://www.behance.net/gallery/176543210/Health-App-Design'
  },
  {
    id: '4',
    title: '插画作品集',
    description: '数字插画艺术创作',
    detailDescription: '一组数字插画作品，涵盖人物、场景和抽象艺术等多个主题。使用Procreate和Photoshop完成，风格多样，色彩丰富。作品曾入选2023年度插画师协会优秀作品奖。',
    category: '插画',
    year: 2023,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiNmNTU3NmMiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4='
  },
  {
    id: '5',
    title: '金融科技官网',
    description: '金融科技企业网站',
    detailDescription: '为「汇通金融」设计的官方网站，包含首页、产品介绍、解决方案、关于我们等页面。设计风格现代简洁，采用深蓝色主色调，突出企业专业性和信任感。网站已获得Awwwards提名。',
    category: 'UI设计',
    year: 2024,
    date: '2026-06-10',
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiM0ZmFjZmUiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4=',
    link: 'https://www.dribbble.com/shots/2456789-Fintech-Website'
  },
  {
    id: '6',
    title: '包装设计',
    description: '食品品牌包装系列',
    detailDescription: '为「田园时光」有机食品品牌设计的系列包装，包括主视觉设计、包装结构设计和延展应用。注重环保材料的使用和可持续设计理念，获得2023年包装设计大奖。',
    category: '品牌视觉',
    year: 2023,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiMwMGYyZmUiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4='
  },
  {
    id: '7',
    title: '音乐节海报',
    description: '活动宣传海报系列',
    detailDescription: '为「极光音乐节」设计的宣传海报系列，涵盖主视觉海报、社交媒体配图、周边产品设计等。每张海报都有独特的视觉风格和创意表达，融合了音乐与艺术的碰撞。',
    category: '插画',
    year: 2024,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiM0M2U5N2IiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4='
  },
  {
    id: '8',
    title: '图标系统',
    description: '产品图标库设计',
    detailDescription: '为「云办公」产品设计的完整图标系统，包含100+个常用图标，支持多种尺寸和风格变体。采用统一的设计语言，确保在不同场景下的一致性。',
    category: 'UI设计',
    year: 2023,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiMzOGY5ZDciLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4=',
    link: 'https://www.behance.net/gallery/165432100/Icon-System'
  },
  {
    id: '9',
    title: '智能家居APP',
    description: '智能家居控制应用',
    detailDescription: '为「智慧家」智能家居品牌设计的移动端控制应用，支持灯光、空调、安防等设备的远程控制。界面简洁直观，采用卡片式布局，让用户轻松管理智能家居设备。',
    category: 'UI设计',
    year: 2024,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiNmYTcwOWEiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4='
  },
  {
    id: '10',
    title: '文化展览视觉',
    description: '艺术展览视觉设计',
    detailDescription: '为「当代艺术展」设计的全套视觉系统，包括展览主视觉、导视系统、宣传物料等。设计风格现代简约，突出艺术作品本身，为观众创造沉浸式观展体验。',
    category: '品牌视觉',
    year: 2024,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiNmZWUxNDAiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4='
  },
  {
    id: '11',
    title: '游戏UI设计',
    description: '移动端游戏界面',
    detailDescription: '为「星际冒险」手游设计的游戏UI界面，包括主菜单、游戏界面、商店系统等。采用科幻风格设计，色彩对比强烈，为玩家带来沉浸式游戏体验。',
    category: 'UI设计',
    year: 2023,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiNmZjlhOWUiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4='
  },
  {
    id: '12',
    title: '绘本插画',
    description: '儿童绘本插画创作',
    detailDescription: '为《小星星的冒险》儿童绘本创作的全套插画，包含24幅精美插图。画风温馨可爱，色彩柔和，深受小读者喜爱，已印刷出版。',
    category: '插画',
    year: 2023,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiNhMThjZDEiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4='
  },
  {
    id: '13',
    title: '品牌设计全案',
    description: '企业品牌视觉识别系统',
    detailDescription: '为新兴科技公司「云创科技」打造完整的品牌视觉识别系统，涵盖Logo设计、标准色、标准字体、办公物料、宣传海报等多个应用场景。项目包含多个阶段的设计成果展示。',
    category: '品牌视觉',
    year: 2024,
    cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiNmYmMyZWIiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9Ijc1Ij44MDDDlzQ1MDwvdGV4dD48L3N2Zz4=',
    images: [
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM2NjdlZWEiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg=='
    ],
    link: 'https://www.behance.net/gallery/190000000/Brand-Identity-System'
  },
  {
    id: '14',
    title: 'E-AI小程序',
    description: '设备智约助手',
    detailDescription: '为实验室设备预约场景设计的智能小程序，提供设备预约、报告分析、图文识别等核心功能。采用清新的蓝色主色调，界面简洁直观，让用户轻松管理实验室设备。项目包含首页、图文识别、报告分析、温度监控等多个页面设计。',
    category: 'UI设计',
    year: 2024,
    date: '2026-06-17',
    cover: '/images/1.jpg',
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg'
    ],
    link: 'https://huaban.com/discovery'
  }
]

export const aiImages: AiImage[] = [
  {
    id: '1',
    title: '未来都市',
    prompt: 'A breathtaking futuristic cyberpunk city at night with neon lights reflecting on wet streets, flying cars soaring between towering skyscrapers, holographic advertisements floating in the air, rainy atmosphere with cinematic lighting, ultra detailed, photorealistic, 8k resolution, cyberpunk aesthetic',
    negativePrompt: 'blurry, low quality, text, watermark, cartoon, anime',
    tool: 'Midjourney v6',
    category: '场景',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM2NjdlZWEiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM2NjdlZWEiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Aspect Ratio: 16:9, Style: Raw, Version: 6.0',
    createdAt: '2026-06-10'
  },
  {
    id: '2',
    title: '魔法森林',
    prompt: 'A magical enchanted forest at twilight with glowing mushrooms of various colors, ethereal light rays filtering through ancient trees, small magical creatures like fairies and fireflies, mystical atmosphere, fantasy art style, vibrant colors, hyper detailed, cinematic',
    negativePrompt: 'dark, scary, horror, realistic photography',
    tool: 'DALL·E 3',
    category: '场景',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM3NjRiYTIiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM3NjRiYTIiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Quality: HD, Style: Vivid',
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: '太空漫步',
    prompt: 'An astronaut floating in the vastness of space near a beautiful colorful nebula, surrounded by countless stars and galaxies, cosmic dust floating around, realistic space photography style, NASA aesthetic, breathtaking view of the universe',
    negativePrompt: 'earth, atmosphere, spaceship, text, watermark',
    tool: 'Midjourney v6',
    category: '科幻',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmMDkzZmIiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNmMDkzZmIiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Aspect Ratio: 16:9, Style: Realistic',
    createdAt: '2024-01-13'
  },
  {
    id: '4',
    title: '赛博少女',
    prompt: 'Portrait of a beautiful cyberpunk girl with neon pink hair and glowing blue eyes, wearing futuristic metallic accessories and cybernetic enhancements, standing in front of a neon-lit city background, anime art style, vibrant colors, detailed character design',
    negativePrompt: 'ugly, deformed, low quality, realistic, photo',
    tool: 'Stable Diffusion',
    category: '人物',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmNTU3NmMiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNmNTU3NmMiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Steps: 30, CFG: 7, Model: MeinaMix',
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    title: '水墨江南',
    prompt: 'Traditional Chinese ink wash painting style landscape featuring misty mountains, winding rivers, traditional pagodas and bridges, boats floating on water, minimalist composition, elegant brush strokes, monochrome with subtle color accents',
    negativePrompt: 'modern, colorful, realistic photography',
    tool: 'DALL·E 3',
    category: '艺术',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM0ZmFjZmUiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM0ZmFjZmUiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Style: Ink Painting',
    createdAt: '2026-06-10'
  },
  {
    id: '2',
    title: '机械巨龙',
    prompt: 'A majestic mechanical dragon made of intricate gears and polished metal, with glowing amber eyes and steam effects coming from its nostrils, standing in an industrial fantasy setting, dramatic cinematic lighting, highly detailed steampunk aesthetic',
    negativePrompt: 'cute, cartoon, childish, organic, biological',
    tool: 'Midjourney v6',
    category: '科幻',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMwMGYyZmUiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiMwMGYyZmUiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Aspect Ratio: 16:9, Style: Raw, Version: 6.0',
    createdAt: '2024-01-10'
  },
  {
    id: '7',
    title: '深海探秘',
    prompt: 'Beautiful underwater scene with vibrant coral reefs teeming with exotic tropical fish, rays gliding gracefully, sunlight filtering through the water surface creating beautiful light patterns, realistic marine life photography style, National Geographic aesthetic',
    negativePrompt: 'terrestrial, dry, dark, murky water',
    tool: 'DALL·E 3',
    category: '场景',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM0M2U5N2IiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM0M2U5N2IiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Quality: HD',
    createdAt: '2024-01-09'
  },
  {
    id: '8',
    title: '蒸汽都市',
    prompt: 'Victorian era steampunk cityscape with massive airships floating above, intricate clock towers, brass machinery and gears visible everywhere, cobblestone streets bustling with people in period clothing, warm sepia tones, detailed illustration style',
    negativePrompt: 'modern, futuristic, neon, digital',
    tool: 'Stable Diffusion',
    category: '科幻',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMzOGY5ZDciLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiMzOGY5ZDciLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Steps: 40, CFG: 8, Model: Anything v4',
    createdAt: '2024-01-08'
  },
  {
    id: '9',
    title: '精灵传说',
    prompt: 'Beautiful elf girl with pointed ears and flowing silver hair, wearing an ethereal forest green dress adorned with flowers, standing in a magical forest with glowing particles floating around, fantasy art style, delicate features, soft lighting',
    negativePrompt: 'dark, scary, realistic, modern clothing',
    tool: 'Midjourney v6',
    category: '人物',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmYTcwOWEiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNmYTcwOWEiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Style: Fantasy Art',
    createdAt: '2024-01-07'
  },
  {
    id: '10',
    title: '星际穿越',
    prompt: 'A sleek futuristic spaceship flying through an asteroid field in deep space, surrounded by stars and distant galaxies, sci-fi movie cinematography style, epic scale, dramatic lighting, photorealistic rendering',
    negativePrompt: 'cartoon, animated, low quality, earth atmosphere',
    tool: 'DALL·E 3',
    category: '科幻',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmZWUxNDAiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNmZWUxNDAiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Quality: HD, Style: Cinematic',
    createdAt: '2024-01-06'
  },
  {
    id: '11',
    title: '禅意山水',
    prompt: 'Traditional Chinese landscape painting with misty mountains, tranquil lake reflecting the scenery, ancient pine trees, minimalist composition, black ink on white paper, elegant brush strokes, Zen aesthetic',
    negativePrompt: 'colorful, modern, cluttered, photorealistic',
    tool: 'Midjourney v6',
    category: '艺术',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmZjlhOWUiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNmZjlhOWUiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Style: Traditional Chinese Painting',
    createdAt: '2024-01-05'
  },
  {
    id: '12',
    title: '未来建筑',
    prompt: 'Futuristic architecture with organic flowing shapes, massive glass and steel structures, floating platforms with lush greenery, sustainable eco-friendly design, ultra modern aesthetic, clean lines, dramatic lighting',
    negativePrompt: 'traditional, old, dirty, cluttered',
    tool: 'Stable Diffusion',
    category: '场景',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNhMThjZDEiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNhMThjZDEiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Steps: 35, CFG: 7, Model: ArchDaily',
    createdAt: '2024-01-04'
  },
  {
    id: '13',
    title: '猫咪咖啡馆',
    prompt: 'Cute anime style cat café interior with many adorable cats of different breeds relaxing on cushions and shelves, cozy warm atmosphere, soft lighting, pastel color palette, charming details like cat-shaped decorations',
    negativePrompt: 'dark, scary, realistic photography, messy',
    tool: 'DALL·E 3',
    category: '人物',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmYmMyZWIiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNmYmMyZWIiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Style: Anime, Quality: HD',
    createdAt: '2024-01-03'
  },
  {
    id: '14',
    title: '极光幻境',
    prompt: 'Beautiful northern lights aurora borealis dancing over snow-capped mountains, magical atmosphere with starry sky, long exposure photography style, vibrant green and purple colors reflecting on snow, breathtaking natural beauty',
    negativePrompt: 'city lights, pollution, cloudy sky',
    tool: 'Midjourney v6',
    category: '场景',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM4NGZhYjAiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM4NGZhYjAiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Aspect Ratio: 16:9, Style: Realistic',
    createdAt: '2024-01-02'
  },
  {
    id: '15',
    title: '数字梦境',
    prompt: 'Abstract digital art with flowing vibrant colors and geometric shapes, neon glow effects, modern contemporary style, dynamic composition, psychedelic aesthetic, colorful gradients',
    negativePrompt: 'realistic, figurative, dark, boring',
    tool: 'DALL·E 3',
    category: '艺术',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM4ZmQzZjQiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM4ZmQzZjQiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Style: Abstract',
    createdAt: '2024-01-01'
  },
  {
    id: '16',
    title: '魔法古籍',
    prompt: 'An ancient magical book floating in mid-air with glowing mystical runes surrounding it, mystical purple energy emanating from the pages, set against an enchanted library background with floating candles, fantasy art style, detailed illustration',
    negativePrompt: 'modern, plain, boring, realistic',
    tool: 'Stable Diffusion',
    category: '艺术',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGMzZmMiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNlMGMzZmMiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Steps: 40, CFG: 8, Model: Deliberate',
    createdAt: '2023-12-31'
  },
  {
    id: '17',
    title: '东方幻想',
    prompt: 'Beautiful Japanese anime style girl in traditional kimono standing under cherry blossoms, petals falling around her, soft pink and white color palette, gentle smile, detailed character design, romantic atmosphere',
    negativePrompt: 'dark, scary, modern clothing, realistic',
    tool: 'Midjourney v6',
    category: '人物',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM4ZWM1ZmMiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM4ZWM1ZmMiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Style: Anime, Version: 6.0',
    createdAt: '2023-12-30'
  },
  {
    id: '18',
    title: '沙漠遗迹',
    prompt: 'Ancient Egyptian pyramid complex in a vast desert landscape at golden hour, sand dunes stretching to the horizon, mysterious atmosphere with swirling sand, dramatic shadows, cinematic lighting, photorealistic rendering',
    negativePrompt: 'modern buildings, people, green vegetation',
    tool: 'DALL·E 3',
    category: '场景',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmZmVjZDIiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNmZmVjZDIiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Quality: HD, Style: Cinematic',
    createdAt: '2023-12-29'
  },
  {
    id: '19',
    title: '海底都市',
    prompt: 'Futuristic underwater city with glass domes and tunnels, bioluminescent creatures swimming around, sunlight filtering from above, advanced technology meets nature, science fiction aesthetic, detailed environmental design',
    negativePrompt: 'dry land, surface, dark, scary',
    tool: 'Stable Diffusion',
    category: '科幻',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmY2I2OWYiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNmY2I2OWYiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Steps: 35, CFG: 7, Model: Realistic Vision',
    createdAt: '2023-12-28'
  },
  {
    id: '20',
    title: '冬日童话',
    prompt: 'Cozy winter cottage covered in snow with smoke coming from the chimney, snowflakes falling gently, warm lights glowing from windows, peaceful winter wonderland scene, soft pastel colors, storybook illustration style',
    negativePrompt: 'dark, scary, crowded, modern',
    tool: 'Midjourney v6',
    category: '场景',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNhOGVkZWEiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNhOGVkZWEiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    params: 'Style: Storybook, Version: 6.0',
    createdAt: '2023-12-27'
  },
  {
    id: '21',
    title: '奇幻森林系列',
    prompt: 'A magical enchanted forest collection featuring different times of day - morning mist, golden hour, twilight, and starry night. Each scene with unique magical elements like glowing mushrooms, fairies, and mystical creatures. Fantasy art style, vibrant colors, hyper detailed.',
    negativePrompt: 'dark, scary, horror, realistic photography',
    tool: 'Midjourney v6',
    category: '场景',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM2NjdlZWEiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjY2LjY2NjY2NjY2NjY2NjY3Ij40MDDDlzQwMDwvdGV4dD48L3N2Zz4=',
    fullImage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM2NjdlZWEiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg==',
    images: [
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiM3NjRiYTIiLz48dGV4dCB4PSI2MDAiIHk9IjQwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzMy4zMzMzMzMzMzMzMzMzNCI+MTIwMMOXODAwPC90ZXh0Pjwvc3ZnPg=='
    ],
    params: 'Aspect Ratio: 16:9, Style: Raw, Version: 6.0',
    createdAt: '2023-12-26'
  }
]

export const categories = [
  { id: '1', name: 'UI设计', count: 6 },
  { id: '2', name: '品牌视觉', count: 3 },
  { id: '3', name: '插画', count: 3 },
  { id: '4', name: '场景', count: 7 },
  { id: '5', name: '科幻', count: 5 },
  { id: '6', name: '人物', count: 4 },
  { id: '7', name: '艺术', count: 4 }
]

export const tools = [
  { id: '1', name: 'Midjourney v6', count: 7 },
  { id: '2', name: 'DALL·E 3', count: 7 },
  { id: '3', name: 'Stable Diffusion', count: 6 }
]
