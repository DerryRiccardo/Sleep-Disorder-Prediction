import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PredictionResponse, PredictionResult } from "@/types/prediction";
import { recommendations } from "@/data/recommendations";
import { CheckCircle, Moon, AlertTriangle, TrendingUp, Lightbulb } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface PredictionResultProps {
  result: PredictionResponse;
}

const iconMap = {
  "check-circle": CheckCircle,
  "moon": Moon,
  "alert-triangle": AlertTriangle
};

const colorMap: Record<PredictionResult, string> = {
  "No Sleep Disorder": "text-success",
  "Insomnia": "text-warning",
  "Sleep Apnea": "text-destructive"
};

const bgColorMap: Record<PredictionResult, string> = {
  "No Sleep Disorder": "bg-success/10 border-success/20",
  "Insomnia": "bg-warning/10 border-warning/20",
  "Sleep Apnea": "bg-destructive/10 border-destructive/20"
};

export function PredictionResultCard({ result }: PredictionResultProps) {
  const recommendation = recommendations[result.prediction];
  const Icon = iconMap[recommendation.icon as keyof typeof iconMap];

  return (
    <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
      {/* Main Result Card */}
      <Card className={`border-2 ${bgColorMap[result.prediction]}`}>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${bgColorMap[result.prediction]}`}>
              <Icon className={`h-8 w-8 ${colorMap[result.prediction]}`} />
            </div>
            <div>
              <CardTitle className={`text-2xl ${colorMap[result.prediction]}`}>
                {result.prediction}
              </CardTitle>
              <CardDescription className="text-base mt-1">
                {recommendation.title}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {recommendation.description}
          </p>
        </CardContent>
      </Card>

      {/* Probabilities Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            Probabilitas Hasil
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(result.probabilities).map(([disorder, probability]) => (
            <div key={disorder} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{disorder}</span>
                <span className="text-muted-foreground">{(probability * 100).toFixed(1)}%</span>
              </div>
              <Progress 
                value={probability * 100} 
                className="h-2"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recommendations Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Lightbulb className="h-5 w-5 text-accent" />
            Rekomendasi
          </CardTitle>
          <CardDescription>
            Tips untuk meningkatkan kualitas tidur Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recommendation.tips.map((tip, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <p className="text-xs text-muted-foreground text-center px-4">
        ⚠️ Hasil prediksi ini bersifat informatif dan bukan diagnosis medis. 
        Selalu konsultasikan dengan profesional kesehatan untuk evaluasi yang akurat.
      </p>
    </div>
  );
}
