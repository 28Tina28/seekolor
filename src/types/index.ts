export interface ColorData {
  hue: number;        // 0-360
  saturation: number; // 0-100
  brightness: number; // 0-100
  warmth: number;     // -100 (cool) to 100 (warm)
  contrast: number;   // 0-100
  spaceData?: SpaceData;
}

export interface SpaceData {
  style: string;
  material: string;
  light: string;
  mood: string;
}

export interface Choice {
  id: string;
  label: string;
  gradient: string;      // CSS gradient for preview
  colorData: ColorData;
  spaceData: SpaceData;
  description: string;
}

export interface Question {
  id: string;
  prompt: string;
  choices: Choice[];
}

export interface ColorPersonality {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  palette: string[];       // 5-color palette
  buildingSpace: string;   // CSS gradient representing the space
  materials: string[];
  keywords: string[];
  description: string;
  mood: string;
}

export type AppPhase = 'entrance' | 'test' | 'result-reveal' | 'color-space' | 'share';

export interface AnalysisResult {
  dominantHue: number;
  avgSaturation: number;
  avgBrightness: number;
  warmthScore: number;
  contrastScore: number;
  preferredStyle: string;
  preferredMaterial: string;
  preferredLight: string;
  matchedPersonality: ColorPersonality;
  confidence: number;
  choiceHistory: ColorData[];
}
