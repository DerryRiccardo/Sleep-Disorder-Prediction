export interface PredictionInput {
  Age: number;
  Gender: string;
  "Sleep Duration": number;
  "Quality of Sleep": number;
  "Physical Activity Level": number;
  "Stress Level": number;
  "Blood Pressure": string;
  "Heart Rate": number;
  "Daily Steps": number;
  Occupation: string;
  "BMI Category": string;
}

export type PredictionResult = "No Sleep Disorder" | "Insomnia" | "Sleep Apnea";

export interface PredictionResponse {
  prediction: PredictionResult;
  probabilities: {
    "No Sleep Disorder": number;
    "Insomnia": number;
    "Sleep Apnea": number;
  };
}

export interface Recommendation {
  title: string;
  description: string;
  tips: string[];
  icon: string;
}
