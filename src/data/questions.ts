import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'q1',
    prompt: '你更想走进哪个空间？',
    choices: [
      { id: 'q1a', label: 'A', gradient: 'linear-gradient(135deg, #1a2a3a, #5a8a9a)', description: '月光洒落的静谧庭院', colorData: { hue: 200, saturation: 40, brightness: 50, warmth: -30, contrast: 30 }, spaceData: { style: '现代东方', material: '青瓷', light: '月光', mood: '静谧' } },
      { id: 'q1b', label: 'B', gradient: 'linear-gradient(135deg, #2d5a3d, #6b9b6b)', description: '晨雾中的森林小径', colorData: { hue: 140, saturation: 45, brightness: 45, warmth: 0, contrast: 25 }, spaceData: { style: '自然主义', material: '原木', light: '晨雾', mood: '清新' } },
      { id: 'q1c', label: 'C', gradient: 'linear-gradient(135deg, #8b5e2d, #c88a4a)', description: '夕阳下的老图书馆', colorData: { hue: 30, saturation: 55, brightness: 60, warmth: 60, contrast: 40 }, spaceData: { style: '复古', material: '皮革', light: '夕阳', mood: '温暖' } },
      { id: 'q1d', label: 'D', gradient: 'linear-gradient(135deg, #0a2a4a, #2a6a8a)', description: '深海中的玻璃穹顶', colorData: { hue: 210, saturation: 60, brightness: 35, warmth: -50, contrast: 45 }, spaceData: { style: '现代极简', material: '玻璃', light: '水下', mood: '深邃' } },
    ]
  },
  {
    id: 'q2',
    prompt: '哪个建筑入口最吸引你？',
    choices: [
      { id: 'q2a', label: 'A', gradient: 'linear-gradient(135deg, #5a8a9a, #d4e0e8)', description: '拱形青石门廊', colorData: { hue: 195, saturation: 30, brightness: 65, warmth: -20, contrast: 35 }, spaceData: { style: '古典', material: '青石', light: '自然光', mood: '雅致' } },
      { id: 'q2b', label: 'B', gradient: 'linear-gradient(135deg, #2a5a3d, #8bae8b)', description: '藤蔓缠绕的木门', colorData: { hue: 130, saturation: 40, brightness: 50, warmth: 10, contrast: 30 }, spaceData: { style: '田园', material: '木', light: '树影', mood: '自然' } },
      { id: 'q2c', label: 'C', gradient: 'linear-gradient(135deg, #5a3a1a, #c88a4a)', description: '黄铜装饰的拱门', colorData: { hue: 35, saturation: 50, brightness: 55, warmth: 50, contrast: 50 }, spaceData: { style: '新古典', material: '黄铜', light: '暖光', mood: '华贵' } },
      { id: 'q2d', label: 'D', gradient: 'linear-gradient(135deg, #0a2a3a, #4a7a9a)', description: '全玻璃的极简入口', colorData: { hue: 205, saturation: 55, brightness: 40, warmth: -40, contrast: 55 }, spaceData: { style: '现代主义', material: '玻璃', light: '天光', mood: '通透' } },
    ]
  },
  {
    id: 'q3',
    prompt: '你希望房间的墙面是什么质感？',
    choices: [
      { id: 'q3a', label: 'A', gradient: 'linear-gradient(135deg, #4a7a5a, #a8c5b0)', description: '细腻的微水泥，有手工痕迹', colorData: { hue: 150, saturation: 25, brightness: 55, warmth: 0, contrast: 20 }, spaceData: { style: '侘寂', material: '微水泥', light: '漫射光', mood: '质朴' } },
      { id: 'q3b', label: 'B', gradient: 'linear-gradient(135deg, #8a6a3a, #c8a86a)', description: '暖色砂岩质感', colorData: { hue: 40, saturation: 35, brightness: 60, warmth: 45, contrast: 25 }, spaceData: { style: '大地色', material: '砂岩', light: '暖光', mood: '温暖' } },
      { id: 'q3c', label: 'C', gradient: 'linear-gradient(135deg, #3a3a4a, #8a8a9a)', description: '光滑的灰泥，极简无痕', colorData: { hue: 240, saturation: 10, brightness: 45, warmth: -30, contrast: 15 }, spaceData: { style: '极简', material: '灰泥', light: '冷光', mood: '冷静' } },
      { id: 'q3d', label: 'D', gradient: 'linear-gradient(135deg, #5a2a6a, #9a6aba)', description: '深紫色丝绒护墙板', colorData: { hue: 280, saturation: 45, brightness: 40, warmth: 10, contrast: 50 }, spaceData: { style: '奢华', material: '丝绒', light: '暖色射灯', mood: '神秘' } },
    ]
  },
  {
    id: 'q4',
    prompt: '你偏爱哪种光影氛围？',
    choices: [
      { id: 'q4a', label: 'A', gradient: 'linear-gradient(135deg, #1a3a4a, #8ac0d0)', description: '透过百叶窗的斑驳日光', colorData: { hue: 195, saturation: 35, brightness: 55, warmth: -10, contrast: 40 }, spaceData: { style: '现代', material: '木百叶', light: '日光', mood: '宁静' } },
      { id: 'q4b', label: 'B', gradient: 'linear-gradient(135deg, #3a1a0a, #c88a4a)', description: '壁炉中跳动的火焰光', colorData: { hue: 25, saturation: 60, brightness: 55, warmth: 70, contrast: 60 }, spaceData: { style: '田园', material: '石', light: '火光', mood: '温馨' } },
      { id: 'q4c', label: 'C', gradient: 'linear-gradient(135deg, #0a0a15, #4a4a5a)', description: '极暗空间中一束顶光', colorData: { hue: 240, saturation: 15, brightness: 25, warmth: -40, contrast: 70 }, spaceData: { style: '戏剧性', material: '混凝土', light: '束光', mood: '戏剧' } },
      { id: 'q4d', label: 'D', gradient: 'linear-gradient(135deg, #2a4a2a, #8ab88a)', description: '树荫下筛落的碎光', colorData: { hue: 120, saturation: 30, brightness: 50, warmth: 5, contrast: 35 }, spaceData: { style: '自然', material: '草地', light: '树影', mood: '悠闲' } },
    ]
  },
  {
    id: 'q5',
    prompt: '你更向往哪种窗外风景？',
    choices: [
      { id: 'q5a', label: 'A', gradient: 'linear-gradient(135deg, #1a4a6a, #4a7a9a)', description: '远山与海的蓝色地平线', colorData: { hue: 210, saturation: 50, brightness: 40, warmth: -40, contrast: 30 }, spaceData: { style: '沿海', material: '玻璃', light: '天光', mood: '开阔' } },
      { id: 'q5b', label: 'B', gradient: 'linear-gradient(135deg, #2d5a3d, #6b9b6b)', description: '层峦叠翠的森林', colorData: { hue: 140, saturation: 45, brightness: 45, warmth: 0, contrast: 35 }, spaceData: { style: '山林', material: '木', light: '绿影', mood: '悠然' } },
      { id: 'q5c', label: 'C', gradient: 'linear-gradient(135deg, #4a3a1a, #c8a86a)', description: '金色麦田与炊烟', colorData: { hue: 40, saturation: 45, brightness: 55, warmth: 50, contrast: 40 }, spaceData: { style: '乡村', material: '砖', light: '夕阳', mood: '温暖' } },
      { id: 'q5d', label: 'D', gradient: 'linear-gradient(135deg, #1a1a2a, #5a5a6a)', description: '城市夜色中的万家灯火', colorData: { hue: 230, saturation: 25, brightness: 30, warmth: -20, contrast: 60 }, spaceData: { style: '都市', material: '混凝土', light: '夜景', mood: '繁华' } },
    ]
  },
  {
    id: 'q6',
    prompt: '你最喜欢哪种材质的地面？',
    choices: [
      { id: 'q6a', label: 'A', gradient: 'linear-gradient(135deg, #5a4a3a, #8a7a6a)', description: '温暖的原木地板', colorData: { hue: 30, saturation: 20, brightness: 45, warmth: 30, contrast: 15 }, spaceData: { style: '北欧', material: '原木', light: '自然光', mood: '温馨' } },
      { id: 'q6b', label: 'B', gradient: 'linear-gradient(135deg, #6a6a7a, #9a9aaa)', description: '磨光的水磨石地面', colorData: { hue: 240, saturation: 10, brightness: 55, warmth: -10, contrast: 20 }, spaceData: { style: '现代', material: '水磨石', light: '漫射光', mood: '简约' } },
      { id: 'q6c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '深色竹地板', colorData: { hue: 140, saturation: 20, brightness: 35, warmth: 5, contrast: 20 }, spaceData: { style: '东方', material: '竹', light: '柔和光', mood: '禅意' } },
      { id: 'q6d', label: 'D', gradient: 'linear-gradient(135deg, #1a1a2a, #4a4a6a)', description: '深色大理石，带天然纹理', colorData: { hue: 240, saturation: 20, brightness: 30, warmth: -30, contrast: 40 }, spaceData: { style: '奢华', material: '大理石', light: '射灯', mood: '高贵' } },
    ]
  },
  {
    id: 'q7',
    prompt: '你会选哪种椅子坐一下午？',
    choices: [
      { id: 'q7a', label: 'A', gradient: 'linear-gradient(135deg, #4a7a6a, #8ab0a0)', description: '藤编吊椅，角落有绿植', colorData: { hue: 165, saturation: 25, brightness: 50, warmth: 5, contrast: 20 }, spaceData: { style: '度假', material: '藤编', light: '自然光', mood: '放松' } },
      { id: 'q7b', label: 'B', gradient: 'linear-gradient(135deg, #6a3a2a, #b07a5a)', description: '深棕色皮质阅读椅', colorData: { hue: 15, saturation: 40, brightness: 45, warmth: 40, contrast: 35 }, spaceData: { style: '经典', material: '皮革', light: '台灯', mood: '沉静' } },
      { id: 'q7c', label: 'C', gradient: 'linear-gradient(135deg, #5a5a6a, #9a9aaa)', description: '极简白色悬臂椅', colorData: { hue: 240, saturation: 5, brightness: 60, warmth: -10, contrast: 25 }, spaceData: { style: '包豪斯', material: '塑料/金属', light: '天光', mood: '专注' } },
      { id: 'q7d', label: 'D', gradient: 'linear-gradient(135deg, #6a3a5a, #a06a8a)', description: '粉色丝绒扶手椅', colorData: { hue: 320, saturation: 30, brightness: 45, warmth: 20, contrast: 30 }, spaceData: { style: '装饰艺术', material: '丝绒', light: '暖光', mood: '慵懒' } },
    ]
  },
  {
    id: 'q8',
    prompt: '你更愿意在哪里工作/创作？',
    choices: [
      { id: 'q8a', label: 'A', gradient: 'linear-gradient(135deg, #2a4a5a, #5a8aaa)', description: '落地窗前，面朝大海', colorData: { hue: 205, saturation: 40, brightness: 40, warmth: -20, contrast: 40 }, spaceData: { style: '海景', material: '玻璃', light: '日光', mood: '灵感' } },
      { id: 'q8b', label: 'B', gradient: 'linear-gradient(135deg, #3a2a1a, #8a6a4a)', description: '有壁炉的温暖书房', colorData: { hue: 30, saturation: 35, brightness: 40, warmth: 45, contrast: 35 }, spaceData: { style: '书房', material: '木', light: '暖光', mood: '专注' } },
      { id: 'q8c', label: 'C', gradient: 'linear-gradient(135deg, #0a0a1a, #3a3a5a)', description: '极简工作室，只有一张桌和一束光', colorData: { hue: 240, saturation: 20, brightness: 20, warmth: -40, contrast: 60 }, spaceData: { style: '极简工作室', material: '混凝土', light: '束光', mood: '沉静' } },
      { id: 'q8d', label: 'D', gradient: 'linear-gradient(135deg, #3a4a2a, #7a9a5a)', description: '植物环绕的阳光房', colorData: { hue: 100, saturation: 30, brightness: 50, warmth: 15, contrast: 30 }, spaceData: { style: '温室', material: '玻璃', light: '阳光', mood: '活力' } },
    ]
  },
  {
    id: 'q9',
    prompt: '哪种灯光最能让你放松？',
    choices: [
      { id: 'q9a', label: 'A', gradient: 'linear-gradient(135deg, #1a2a3a, #4a7a9a)', description: '柔和的蓝色夜灯', colorData: { hue: 210, saturation: 30, brightness: 35, warmth: -30, contrast: 15 }, spaceData: { style: '卧室', material: '织物', light: '夜灯', mood: '安宁' } },
      { id: 'q9b', label: 'B', gradient: 'linear-gradient(135deg, #3a1a0a, #c87a4a)', description: '暖黄色壁炉火光', colorData: { hue: 25, saturation: 55, brightness: 50, warmth: 65, contrast: 50 }, spaceData: { style: '客厅', material: '木', light: '壁炉', mood: '温暖' } },
      { id: 'q9c', label: 'C', gradient: 'linear-gradient(135deg, #1a3a1a, #5a8a5a)', description: '蜡烛的温暖微光', colorData: { hue: 120, saturation: 25, brightness: 40, warmth: 20, contrast: 35 }, spaceData: { style: '餐厅', material: '木', light: '烛光', mood: '浪漫' } },
      { id: 'q9d', label: 'D', gradient: 'linear-gradient(135deg, #2a1a3a, #7a5a9a)', description: '淡紫色香薰灯', colorData: { hue: 270, saturation: 25, brightness: 40, warmth: 5, contrast: 25 }, spaceData: { style: '浴室', material: '陶瓷', light: '香薰灯', mood: '舒缓' } },
    ]
  },
  {
    id: 'q10',
    prompt: '你更想住在哪种建筑风格里？',
    choices: [
      { id: 'q10a', label: 'A', gradient: 'linear-gradient(135deg, #1a2a3a, #4a6a8a)', description: '日式极简，大量留白', colorData: { hue: 210, saturation: 30, brightness: 35, warmth: -20, contrast: 30 }, spaceData: { style: '日式侘寂', material: '纸/木', light: '柔和光', mood: '禅意' } },
      { id: 'q10b', label: 'B', gradient: 'linear-gradient(135deg, #5a3a1a, #b08a5a)', description: '地中海白墙蓝窗', colorData: { hue: 35, saturation: 40, brightness: 55, warmth: 40, contrast: 45 }, spaceData: { style: '地中海', material: '白墙', light: '阳光', mood: '明媚' } },
      { id: 'q10c', label: 'C', gradient: 'linear-gradient(135deg, #3a3a3a, #7a7a7a)', description: '工业风 loft，高挑空', colorData: { hue: 0, saturation: 0, brightness: 40, warmth: 0, contrast: 40 }, spaceData: { style: '工业', material: '混凝土/钢', light: '天光', mood: '自由' } },
      { id: 'q10d', label: 'D', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '林中玻璃屋，被自然包围', colorData: { hue: 140, saturation: 20, brightness: 40, warmth: 5, contrast: 35 }, spaceData: { style: '现代自然', material: '玻璃/木', light: '自然光', mood: '通透' } },
    ]
  },
  {
    id: 'q11',
    prompt: '你希望卧室的主色调是？',
    choices: [
      { id: 'q11a', label: 'A', gradient: 'linear-gradient(135deg, #2a3a4a, #5a7a9a)', description: '静谧的雾蓝色', colorData: { hue: 210, saturation: 25, brightness: 35, warmth: -25, contrast: 20 }, spaceData: { style: '现代', material: '织物', light: '柔和', mood: '安宁' } },
      { id: 'q11b', label: 'B', gradient: 'linear-gradient(135deg, #4a3a2a, #8a7a5a)', description: '温暖的米驼色', colorData: { hue: 40, saturation: 20, brightness: 45, warmth: 30, contrast: 15 }, spaceData: { style: '自然', material: '亚麻', light: '暖光', mood: '温馨' } },
      { id: 'q11c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '淡雅的鼠尾草绿', colorData: { hue: 130, saturation: 20, brightness: 40, warmth: 0, contrast: 20 }, spaceData: { style: '田园', material: '棉麻', light: '自然光', mood: '清新' } },
      { id: 'q11d', label: 'D', gradient: 'linear-gradient(135deg, #3a2a3a, #6a4a6a)', description: '深沉的薰衣草紫', colorData: { hue: 290, saturation: 20, brightness: 35, warmth: 5, contrast: 25 }, spaceData: { style: '浪漫', material: '丝绒', light: '夜灯', mood: '梦幻' } },
    ]
  },
  {
    id: 'q12',
    prompt: '你更喜欢哪种材质的窗帘？',
    choices: [
      { id: 'q12a', label: 'A', gradient: 'linear-gradient(135deg, #4a6a7a, #8ab0c0)', description: '飘逸的亚麻薄纱', colorData: { hue: 195, saturation: 20, brightness: 50, warmth: -10, contrast: 15 }, spaceData: { style: '北欧', material: '亚麻', light: '柔和光', mood: '轻盈' } },
      { id: 'q12b', label: 'B', gradient: 'linear-gradient(135deg, #3a2a1a, #7a5a3a)', description: '厚重的丝绒帷幔', colorData: { hue: 30, saturation: 30, brightness: 35, warmth: 35, contrast: 30 }, spaceData: { style: '古典', material: '丝绒', light: '暗光', mood: '私密' } },
      { id: 'q12c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '竹编卷帘', colorData: { hue: 140, saturation: 15, brightness: 40, warmth: 5, contrast: 20 }, spaceData: { style: '东方', material: '竹', light: '自然光', mood: '禅意' } },
      { id: 'q12d', label: 'D', gradient: 'linear-gradient(135deg, #5a5a6a, #9a9aaa)', description: '极简垂直百叶帘', colorData: { hue: 240, saturation: 5, brightness: 50, warmth: -15, contrast: 25 }, spaceData: { style: '现代', material: '铝合金', light: '漫射光', mood: '理性' } },
    ]
  },
  {
    id: 'q13',
    prompt: '你希望客厅有一件什么家具？',
    choices: [
      { id: 'q13a', label: 'A', gradient: 'linear-gradient(135deg, #3a5a4a, #6a9a7a)', description: '一张大而柔软的绿色沙发', colorData: { hue: 150, saturation: 25, brightness: 45, warmth: 0, contrast: 25 }, spaceData: { style: '现代', material: '织物', light: '自然光', mood: '舒适' } },
      { id: 'q13b', label: 'B', gradient: 'linear-gradient(135deg, #5a3a1a, #a07a4a)', description: '一张老式木质书桌', colorData: { hue: 30, saturation: 40, brightness: 45, warmth: 40, contrast: 30 }, spaceData: { style: '复古', material: '木', light: '台灯', mood: '沉静' } },
      { id: 'q13c', label: 'C', gradient: 'linear-gradient(135deg, #1a1a2a, #4a4a6a)', description: '一件极简黑色展示架', colorData: { hue: 240, saturation: 15, brightness: 25, warmth: -35, contrast: 45 }, spaceData: { style: '极简', material: '金属/玻璃', light: '射灯', mood: '现代' } },
      { id: 'q13d', label: 'D', gradient: 'linear-gradient(135deg, #6a4a3a, #a0806a)', description: '一个复古壁炉', colorData: { hue: 20, saturation: 25, brightness: 45, warmth: 45, contrast: 35 }, spaceData: { style: '乡村', material: '石', light: '火光', mood: '温馨' } },
    ]
  },
  {
    id: 'q14',
    prompt: '哪种季节的氛围最让你舒适？',
    choices: [
      { id: 'q14a', label: 'A', gradient: 'linear-gradient(135deg, #1a3a4a, #5a8aa0)', description: '初秋清晨的凉爽与天光', colorData: { hue: 200, saturation: 35, brightness: 40, warmth: -15, contrast: 30 }, spaceData: { style: '过渡', material: '棉', light: '清晨光', mood: '清爽' } },
      { id: 'q14b', label: 'B', gradient: 'linear-gradient(135deg, #3a1a0a, #b06a3a)', description: '深秋傍晚的暖阳与红叶', colorData: { hue: 25, saturation: 55, brightness: 50, warmth: 60, contrast: 45 }, spaceData: { style: '秋日', material: '木', light: '夕阳', mood: '浓郁' } },
      { id: 'q14c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a8a5a)', description: '初春新绿与和风', colorData: { hue: 130, saturation: 30, brightness: 45, warmth: 10, contrast: 30 }, spaceData: { style: '春日', material: '植物', light: '阳光', mood: '生机' } },
      { id: 'q14d', label: 'D', gradient: 'linear-gradient(135deg, #3a3a4a, #7a7a8a)', description: '冬日雪后的静谧', colorData: { hue: 240, saturation: 5, brightness: 40, warmth: -30, contrast: 25 }, spaceData: { style: '冬日', material: '毛绒', light: '雪光', mood: '宁静' } },
    ]
  },
  {
    id: 'q15',
    prompt: '你会在墙上挂什么样的装饰？',
    choices: [
      { id: 'q15a', label: 'A', gradient: 'linear-gradient(135deg, #1a3a5a, #4a7a9a)', description: '一幅抽象蓝色油画', colorData: { hue: 210, saturation: 40, brightness: 35, warmth: -30, contrast: 45 }, spaceData: { style: '当代', material: '油画布', light: '射灯', mood: '艺术' } },
      { id: 'q15b', label: 'B', gradient: 'linear-gradient(135deg, #3a2a1a, #8a6a4a)', description: '一幅黑白摄影作品', colorData: { hue: 30, saturation: 10, brightness: 40, warmth: 10, contrast: 60 }, spaceData: { style: '极简', material: '相纸', light: '自然光', mood: '深沉' } },
      { id: 'q15c', label: 'C', gradient: 'linear-gradient(135deg, #2a4a2a, #6a9a6a)', description: '一幅植物水彩画', colorData: { hue: 130, saturation: 25, brightness: 50, warmth: 5, contrast: 25 }, spaceData: { style: '清新', material: '纸', light: '自然光', mood: '柔和' } },
      { id: 'q15d', label: 'D', gradient: 'linear-gradient(135deg, #3a1a3a, #7a4a7a)', description: '一面圆形彩色玻璃窗', colorData: { hue: 290, saturation: 35, brightness: 35, warmth: 5, contrast: 55 }, spaceData: { style: '复古', material: '彩色玻璃', light: '透光', mood: '梦幻' } },
    ]
  },
  {
    id: 'q16',
    prompt: '你更喜欢哪种楼梯？',
    choices: [
      { id: 'q16a', label: 'A', gradient: 'linear-gradient(135deg, #3a4a5a, #6a8a9a)', description: '旋转玻璃楼梯，轻盈通透', colorData: { hue: 200, saturation: 20, brightness: 45, warmth: -15, contrast: 35 }, spaceData: { style: '现代', material: '玻璃/钢', light: '天光', mood: '灵动' } },
      { id: 'q16b', label: 'B', gradient: 'linear-gradient(135deg, #4a3a2a, #8a6a4a)', description: '老式木质旋转楼梯', colorData: { hue: 35, saturation: 30, brightness: 45, warmth: 35, contrast: 30 }, spaceData: { style: '古典', material: '木', light: '暖光', mood: '优雅' } },
      { id: 'q16c', label: 'C', gradient: 'linear-gradient(135deg, #2a2a3a, #5a5a6a)', description: '混凝土极简悬挑楼梯', colorData: { hue: 240, saturation: 10, brightness: 35, warmth: -25, contrast: 45 }, spaceData: { style: '工业', material: '混凝土', light: '冷光', mood: '硬朗' } },
      { id: 'q16d', label: 'D', gradient: 'linear-gradient(135deg, #3a5a3a, #6a9a6a)', description: '绿植环绕的螺旋石阶', colorData: { hue: 140, saturation: 25, brightness: 45, warmth: 5, contrast: 35 }, spaceData: { style: '花园', material: '石', light: '树影', mood: '自然' } },
    ]
  },
  {
    id: 'q17',
    prompt: '你希望浴室是什么感觉？',
    choices: [
      { id: 'q17a', label: 'A', gradient: 'linear-gradient(135deg, #3a6a7a, #7ab0c0)', description: '水疗中心般的蓝绿色空间', colorData: { hue: 190, saturation: 30, brightness: 50, warmth: -10, contrast: 25 }, spaceData: { style: '水疗', material: '石材', light: '柔光', mood: '放松' } },
      { id: 'q17b', label: 'B', gradient: 'linear-gradient(135deg, #4a3a2a, #8a7a5a)', description: '温暖的大理石与黄铜', colorData: { hue: 40, saturation: 25, brightness: 45, warmth: 30, contrast: 35 }, spaceData: { style: '奢华', material: '大理石/黄铜', light: '暖光', mood: '精致' } },
      { id: 'q17c', label: 'C', gradient: 'linear-gradient(135deg, #2a2a3a, #5a5a7a)', description: '极简微水泥，无缝一体', colorData: { hue: 240, saturation: 15, brightness: 35, warmth: -20, contrast: 30 }, spaceData: { style: '极简', material: '微水泥', light: '冷光', mood: '纯净' } },
      { id: 'q17d', label: 'D', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '绿植浴室，像在森林里', colorData: { hue: 140, saturation: 20, brightness: 40, warmth: 5, contrast: 25 }, spaceData: { style: '自然', material: '木/石', light: '天光', mood: '治愈' } },
    ]
  },
  {
    id: 'q18',
    prompt: '你更想要什么样的阳台？',
    choices: [
      { id: 'q18a', label: 'A', gradient: 'linear-gradient(135deg, #1a3a5a, #4a7a9a)', description: '可以远眺海景的简洁阳台', colorData: { hue: 210, saturation: 40, brightness: 35, warmth: -25, contrast: 35 }, spaceData: { style: '观景', material: '金属/玻璃', light: '阳光', mood: '开阔' } },
      { id: 'q18b', label: 'B', gradient: 'linear-gradient(135deg, #4a3a1a, #8a7a4a)', description: '种满花草的木阳台', colorData: { hue: 40, saturation: 30, brightness: 45, warmth: 35, contrast: 30 }, spaceData: { style: '花园', material: '木', light: '阳光', mood: '生机' } },
      { id: 'q18c', label: 'C', gradient: 'linear-gradient(135deg, #2a2a3a, #5a5a6a)', description: '极简无栏杆的玻璃阳台', colorData: { hue: 240, saturation: 10, brightness: 35, warmth: -20, contrast: 50 }, spaceData: { style: '极简', material: '玻璃', light: '日光', mood: '冒险' } },
      { id: 'q18d', label: 'D', gradient: 'linear-gradient(135deg, #3a4a2a, #6a8a5a)', description: '有藤架和吊床的绿荫阳台', colorData: { hue: 110, saturation: 25, brightness: 45, warmth: 10, contrast: 25 }, spaceData: { style: '度假', material: '藤', light: '树影', mood: '悠闲' } },
    ]
  },
  {
    id: 'q19',
    prompt: '桌上放什么让你觉得安心？',
    choices: [
      { id: 'q19a', label: 'A', gradient: 'linear-gradient(135deg, #3a5a6a, #6a9aaa)', description: '一杯热茶和一本书', colorData: { hue: 200, saturation: 25, brightness: 40, warmth: -10, contrast: 25 }, spaceData: { style: '书房', material: '陶瓷', light: '台灯', mood: '宁静' } },
      { id: 'q19b', label: 'B', gradient: 'linear-gradient(135deg, #3a2a1a, #8a6a4a)', description: '一杯咖啡和一束鲜花', colorData: { hue: 30, saturation: 35, brightness: 45, warmth: 40, contrast: 30 }, spaceData: { style: '客厅', material: '玻璃', light: '自然光', mood: '惬意' } },
      { id: 'q19c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '一盏香薰和一株盆栽', colorData: { hue: 140, saturation: 20, brightness: 40, warmth: 5, contrast: 20 }, spaceData: { style: '卧室', material: '陶瓷', light: '柔和', mood: '放松' } },
      { id: 'q19d', label: 'D', gradient: 'linear-gradient(135deg, #2a1a3a, #5a3a7a)', description: '一本画册和一支笔', colorData: { hue: 280, saturation: 30, brightness: 30, warmth: 5, contrast: 35 }, spaceData: { style: '工作室', material: '纸', light: '射灯', mood: '创作' } },
    ]
  },
  {
    id: 'q20',
    prompt: '你更偏爱哪种光线的质感？',
    choices: [
      { id: 'q20a', label: 'A', gradient: 'linear-gradient(135deg, #2a4a6a, #6a9ac0)', description: '透过云层的柔光', colorData: { hue: 205, saturation: 35, brightness: 45, warmth: -15, contrast: 20 }, spaceData: { style: '现代', material: '玻璃', light: '漫射光', mood: '宁静' } },
      { id: 'q20b', label: 'B', gradient: 'linear-gradient(135deg, #4a2a0a, #c08a4a)', description: '午后金黄色的暖光', colorData: { hue: 30, saturation: 50, brightness: 55, warmth: 60, contrast: 40 }, spaceData: { style: '地中海', material: '白墙', light: '暖光', mood: '温暖' } },
      { id: 'q20c', label: 'C', gradient: 'linear-gradient(135deg, #1a1a2a, #4a4a6a)', description: '夜晚的冷色月光', colorData: { hue: 240, saturation: 15, brightness: 25, warmth: -40, contrast: 35 }, spaceData: { style: '极简', material: '玻璃', light: '月光', mood: '清冷' } },
      { id: 'q20d', label: 'D', gradient: 'linear-gradient(135deg, #3a4a2a, #7a9a5a)', description: '树叶间隙中洒下的碎光', colorData: { hue: 110, saturation: 25, brightness: 50, warmth: 10, contrast: 45 }, spaceData: { style: '自然', material: '木', light: '树影', mood: '轻快' } },
    ]
  },
  {
    id: 'q21',
    prompt: '你希望厨房是什么风格？',
    choices: [
      { id: 'q21a', label: 'A', gradient: 'linear-gradient(135deg, #2a3a4a, #5a7a8a)', description: '极简橱柜，无把手设计', colorData: { hue: 205, saturation: 25, brightness: 35, warmth: -15, contrast: 20 }, spaceData: { style: '现代', material: '烤漆面板', light: '冷光', mood: '整洁' } },
      { id: 'q21b', label: 'B', gradient: 'linear-gradient(135deg, #4a3a1a, #8a6a3a)', description: '实木橱柜，开放式层架', colorData: { hue: 35, saturation: 35, brightness: 45, warmth: 35, contrast: 30 }, spaceData: { style: '乡村', material: '实木', light: '暖光', mood: '温馨' } },
      { id: 'q21c', label: 'C', gradient: 'linear-gradient(135deg, #3a4a3a, #6a8a6a)', description: '绿色橱柜配黄铜把手', colorData: { hue: 140, saturation: 20, brightness: 45, warmth: 5, contrast: 35 }, spaceData: { style: '复古', material: '黄铜/木', light: '自然光', mood: '雅致' } },
      { id: 'q21d', label: 'D', gradient: 'linear-gradient(135deg, #5a5a6a, #9a9aaa)', description: '不锈钢专业厨房', colorData: { hue: 240, saturation: 5, brightness: 50, warmth: -15, contrast: 30 }, spaceData: { style: '专业', material: '不锈钢', light: '明亮', mood: '效率' } },
    ]
  },
  {
    id: 'q22',
    prompt: '你更喜欢哪种材质的床品？',
    choices: [
      { id: 'q22a', label: 'A', gradient: 'linear-gradient(135deg, #4a6a7a, #8ab0c0)', description: '细腻的亚麻，自然褶皱', colorData: { hue: 195, saturation: 20, brightness: 50, warmth: -10, contrast: 15 }, spaceData: { style: '北欧', material: '亚麻', light: '柔和光', mood: '清爽' } },
      { id: 'q22b', label: 'B', gradient: 'linear-gradient(135deg, #5a4a3a, #9a8a7a)', description: '柔软的棉绒，温暖包裹', colorData: { hue: 35, saturation: 15, brightness: 50, warmth: 25, contrast: 10 }, spaceData: { style: '温馨', material: '棉绒', light: '暖光', mood: '舒适' } },
      { id: 'q22c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '有机棉，简单素色', colorData: { hue: 140, saturation: 15, brightness: 40, warmth: 0, contrast: 10 }, spaceData: { style: '自然', material: '有机棉', light: '自然光', mood: '纯净' } },
      { id: 'q22d', label: 'D', gradient: 'linear-gradient(135deg, #4a3a5a, #7a6a8a)', description: '丝质面料，柔滑光泽', colorData: { hue: 280, saturation: 15, brightness: 45, warmth: 5, contrast: 25 }, spaceData: { style: '奢华', material: '丝绸', light: '暗光', mood: '精致' } },
    ]
  },
  {
    id: 'q23',
    prompt: '你更喜欢哪种建筑线条？',
    choices: [
      { id: 'q23a', label: 'A', gradient: 'linear-gradient(135deg, #2a4a6a, #6a9ac0)', description: '简洁的直线与直角', colorData: { hue: 210, saturation: 35, brightness: 40, warmth: -20, contrast: 40 }, spaceData: { style: '现代主义', material: '混凝土', light: '天光', mood: '理性' } },
      { id: 'q23b', label: 'B', gradient: 'linear-gradient(135deg, #4a3a1a, #8a6a3a)', description: '优美的拱形与弧线', colorData: { hue: 35, saturation: 35, brightness: 45, warmth: 30, contrast: 35 }, spaceData: { style: '新古典', material: '石材', light: '自然光', mood: '优雅' } },
      { id: 'q23c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a8a5a)', description: '有机的不规则曲线', colorData: { hue: 140, saturation: 25, brightness: 40, warmth: 5, contrast: 35 }, spaceData: { style: '仿生', material: '木材', light: '柔和光', mood: '自然' } },
      { id: 'q23d', label: 'D', gradient: 'linear-gradient(135deg, #3a2a4a, #6a4a8a)', description: '几何感的尖锐角度', colorData: { hue: 270, saturation: 25, brightness: 35, warmth: 0, contrast: 55 }, spaceData: { style: '解构主义', material: '钢/玻璃', light: '强光', mood: '前卫' } },
    ]
  },
  {
    id: 'q24',
    prompt: '你希望书桌对着什么？',
    choices: [
      { id: 'q24a', label: 'A', gradient: 'linear-gradient(135deg, #1a3a5a, #4a7a9a)', description: '一面大窗户，看天看云', colorData: { hue: 210, saturation: 40, brightness: 35, warmth: -20, contrast: 35 }, spaceData: { style: '现代', material: '玻璃', light: '天光', mood: '灵感' } },
      { id: 'q24b', label: 'B', gradient: 'linear-gradient(135deg, #3a2a1a, #7a5a3a)', description: '一面贴满灵感图片的软木板', colorData: { hue: 30, saturation: 30, brightness: 40, warmth: 30, contrast: 40 }, spaceData: { style: '创意工作室', material: '软木', light: '台灯', mood: '创造' } },
      { id: 'q24c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '一面白墙，什么都没有', colorData: { hue: 140, saturation: 15, brightness: 40, warmth: 0, contrast: 20 }, spaceData: { style: '极简', material: '白墙', light: '自然光', mood: '专注' } },
      { id: 'q24d', label: 'D', gradient: 'linear-gradient(135deg, #3a1a3a, #6a3a6a)', description: '一扇彩色玻璃窗', colorData: { hue: 290, saturation: 30, brightness: 30, warmth: 5, contrast: 50 }, spaceData: { style: '艺术', material: '彩色玻璃', light: '透光', mood: '梦幻' } },
    ]
  },
  {
    id: 'q25',
    prompt: '你偏爱哪种空间的尺度感？',
    choices: [
      { id: 'q25a', label: 'A', gradient: 'linear-gradient(135deg, #1a2a3a, #3a5a7a)', description: '高挑空旷的大空间', colorData: { hue: 215, saturation: 40, brightness: 30, warmth: -25, contrast: 45 }, spaceData: { style: 'loft', material: '混凝土', light: '天光', mood: '自由' } },
      { id: 'q25b', label: 'B', gradient: 'linear-gradient(135deg, #3a2a1a, #6a4a2a)', description: '低矮温馨的小空间', colorData: { hue: 30, saturation: 35, brightness: 35, warmth: 35, contrast: 25 }, spaceData: { style: '小屋', material: '木', light: '暖光', mood: '安全感' } },
      { id: 'q25c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #4a6a4a)', description: '绿意围绕的半室外空间', colorData: { hue: 140, saturation: 25, brightness: 40, warmth: 5, contrast: 30 }, spaceData: { style: '庭院', material: '木/石', light: '自然光', mood: '通透' } },
      { id: 'q25d', label: 'D', gradient: 'linear-gradient(135deg, #2a1a3a, #4a2a6a)', description: '层层递进的深邃空间', colorData: { hue: 270, saturation: 35, brightness: 25, warmth: 0, contrast: 50 }, spaceData: { style: '迷宫', material: '石材', light: '暗光', mood: '探索' } },
    ]
  },
  {
    id: 'q26',
    prompt: '你更想透过窗户看到什么？',
    choices: [
      { id: 'q26a', label: 'A', gradient: 'linear-gradient(135deg, #1a3a6a, #4a7aaa)', description: '一望无际的海洋', colorData: { hue: 215, saturation: 50, brightness: 35, warmth: -30, contrast: 40 }, spaceData: { style: '沿海', material: '玻璃', light: '天光', mood: '辽阔' } },
      { id: 'q26b', label: 'B', gradient: 'linear-gradient(135deg, #4a3a1a, #8a6a3a)', description: '热闹的街道与行人', colorData: { hue: 35, saturation: 35, brightness: 45, warmth: 35, contrast: 50 }, spaceData: { style: '都市', material: '砖', light: '街灯', mood: '活力' } },
      { id: 'q26c', label: 'C', gradient: 'linear-gradient(135deg, #2a4a2a, #5a8a5a)', description: '静谧的竹林或花园', colorData: { hue: 135, saturation: 30, brightness: 40, warmth: 5, contrast: 25 }, spaceData: { style: '庭院', material: '木/竹', light: '自然光', mood: '宁静' } },
      { id: 'q26d', label: 'D', gradient: 'linear-gradient(135deg, #3a3a4a, #6a6a8a)', description: '城市天际线与灯火', colorData: { hue: 240, saturation: 15, brightness: 35, warmth: -10, contrast: 45 }, spaceData: { style: '高层', material: '玻璃', light: '夜景', mood: '繁华' } },
    ]
  },
  {
    id: 'q27',
    prompt: '你希望玄关处有什么？',
    choices: [
      { id: 'q27a', label: 'A', gradient: 'linear-gradient(135deg, #3a5a6a, #6a8aaa)', description: '一面镜子和一束花', colorData: { hue: 200, saturation: 20, brightness: 45, warmth: -10, contrast: 25 }, spaceData: { style: '现代', material: '镜面', light: '柔和光', mood: '精致' } },
      { id: 'q27b', label: 'B', gradient: 'linear-gradient(135deg, #4a3a2a, #8a6a4a)', description: '一把换鞋凳和一盏吊灯', colorData: { hue: 35, saturation: 25, brightness: 45, warmth: 30, contrast: 30 }, spaceData: { style: '北欧', material: '木', light: '吊灯', mood: '温馨' } },
      { id: 'q27c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '一株大植物和自然采光', colorData: { hue: 140, saturation: 20, brightness: 40, warmth: 5, contrast: 25 }, spaceData: { style: '自然', material: '石', light: '天光', mood: '清新' } },
      { id: 'q27d', label: 'D', gradient: 'linear-gradient(135deg, #1a1a2a, #3a3a5a)', description: '简洁的极简设计，什么都没有', colorData: { hue: 240, saturation: 15, brightness: 20, warmth: -35, contrast: 30 }, spaceData: { style: '极简', material: '混凝土', light: '暗光', mood: '纯粹' } },
    ]
  },
  {
    id: 'q28',
    prompt: '你更想在哪里阅读？',
    choices: [
      { id: 'q28a', label: 'A', gradient: 'linear-gradient(135deg, #1a3a5a, #4a7aaa)', description: '窗边的榻榻米上', colorData: { hue: 210, saturation: 40, brightness: 35, warmth: -20, contrast: 30 }, spaceData: { style: '日式', material: '榻榻米', light: '自然光', mood: '沉静' } },
      { id: 'q28b', label: 'B', gradient: 'linear-gradient(135deg, #3a2a1a, #8a6a4a)', description: '壁炉旁的皮质沙发上', colorData: { hue: 30, saturation: 35, brightness: 45, warmth: 45, contrast: 35 }, spaceData: { style: '英式', material: '皮革', light: '火光', mood: '温暖' } },
      { id: 'q28c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '花园里的吊床上', colorData: { hue: 140, saturation: 20, brightness: 40, warmth: 5, contrast: 30 }, spaceData: { style: '户外', material: '织物', light: '树影', mood: '悠闲' } },
      { id: 'q28d', label: 'D', gradient: 'linear-gradient(135deg, #3a3a4a, #7a7a8a)', description: '极简的白色豆袋椅上', colorData: { hue: 240, saturation: 5, brightness: 45, warmth: -15, contrast: 20 }, spaceData: { style: '现代', material: '织物', light: '漫射光', mood: '放松' } },
    ]
  },
  {
    id: 'q29',
    prompt: '你对空间中的金色装饰怎么看？',
    choices: [
      { id: 'q29a', label: 'A', gradient: 'linear-gradient(135deg, #4a6a7a, #8ab0c0)', description: '少量点缀，恰到好处', colorData: { hue: 195, saturation: 25, brightness: 50, warmth: -10, contrast: 30 }, spaceData: { style: '现代', material: '金属', light: '自然光', mood: '雅致' } },
      { id: 'q29b', label: 'B', gradient: 'linear-gradient(135deg, #5a3a1a, #b08a4a)', description: '喜欢，温暖华丽的质感', colorData: { hue: 35, saturation: 45, brightness: 50, warmth: 50, contrast: 45 }, spaceData: { style: '奢华', material: '金', light: '暖光', mood: '华贵' } },
      { id: 'q29c', label: 'C', gradient: 'linear-gradient(135deg, #2a3a2a, #5a7a5a)', description: '不太喜欢，太张扬了', colorData: { hue: 140, saturation: 20, brightness: 40, warmth: 5, contrast: 20 }, spaceData: { style: '自然', material: '木', light: '自然光', mood: '质朴' } },
      { id: 'q29d', label: 'D', gradient: 'linear-gradient(135deg, #3a3a4a, #7a7a8a)', description: '完全不使用金色', colorData: { hue: 240, saturation: 5, brightness: 40, warmth: -20, contrast: 15 }, spaceData: { style: '极简', material: '混凝土', light: '冷光', mood: '纯粹' } },
    ]
  },
  {
    id: 'q30',
    prompt: '你希望整体的空间氛围是？',
    choices: [
      { id: 'q30a', label: 'A', gradient: 'linear-gradient(135deg, #1a2a4a, #4a6a8a)', description: '冷静沉思的图书馆氛围', colorData: { hue: 215, saturation: 40, brightness: 30, warmth: -30, contrast: 30 }, spaceData: { style: '图书馆', material: '木', light: '柔和光', mood: '专注' } },
      { id: 'q30b', label: 'B', gradient: 'linear-gradient(135deg, #4a2a0a, #b07a3a)', description: '温暖热闹的聚会氛围', colorData: { hue: 30, saturation: 50, brightness: 50, warmth: 60, contrast: 45 }, spaceData: { style: '客厅', material: '木/布', light: '暖光', mood: '热闹' } },
      { id: 'q30c', label: 'C', gradient: 'linear-gradient(135deg, #2a4a2a, #6a9a6a)', description: '宁静治愈的疗愈氛围', colorData: { hue: 140, saturation: 25, brightness: 40, warmth: 5, contrast: 20 }, spaceData: { style: '疗愈', material: '木/石', light: '柔和光', mood: '治愈' } },
      { id: 'q30d', label: 'D', gradient: 'linear-gradient(135deg, #2a1a3a, #5a3a7a)', description: '艺术创作的灵感氛围', colorData: { hue: 280, saturation: 30, brightness: 30, warmth: 5, contrast: 40 }, spaceData: { style: '工作室', material: '混凝土', light: '混合光', mood: '灵感' } },
    ]
  },
];

export function getQuestions(): Question[] {
  return questions;
}

export function getQuestionCount(): number {
  return questions.length;
}
