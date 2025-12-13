import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PredictionForm } from "@/components/PredictionForm";
import { PredictionResultCard } from "@/components/PredictionResult";
import { PredictionInput, PredictionResponse } from "@/types/prediction";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (data: PredictionInput) => {
    setIsLoading(true);
    setResult(null);

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to get prediction");
      }

      const predictionResult: PredictionResponse = await response.json();
      setResult(predictionResult);
      
      toast({
        title: "Analisis Selesai",
        description: "Hasil prediksi telah berhasil diperoleh.",
      });
    } catch (error) {
      // Demo mode: simulate response when API is not available
      console.log("Using demo mode - API not configured");
      
      const demoResult: PredictionResponse = simulatePrediction(data);
      setResult(demoResult);
      
      toast({
        title: "Mode Demo",
        description: "Menampilkan hasil simulasi. Hubungkan API untuk hasil aktual.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pb-16">
        <Hero />
        
        <div className="grid gap-8">
          <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
          
          {result && <PredictionResultCard result={result} />}
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t">
        <p>© 2024 SleepWell. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
};

// Simulation function for demo purposes
function simulatePrediction(data: PredictionInput): PredictionResponse {
  const sleepScore = data["Quality of Sleep"];
  const sleepDuration = data["Sleep Duration"];
  const stressLevel = data["Stress Level"];
  const physicalActivity = data["Physical Activity Level"];
  
  let noDisorderProb = 0.5;
  let insomniaProb = 0.25;
  let apneaProb = 0.25;

  // Adjust based on sleep quality
  if (sleepScore >= 7) {
    noDisorderProb += 0.2;
    insomniaProb -= 0.1;
    apneaProb -= 0.1;
  } else if (sleepScore <= 4) {
    noDisorderProb -= 0.2;
    insomniaProb += 0.15;
    apneaProb += 0.05;
  }

  // Adjust based on sleep duration
  if (sleepDuration < 5) {
    insomniaProb += 0.2;
    noDisorderProb -= 0.2;
  } else if (sleepDuration > 8.5) {
    apneaProb += 0.1;
    noDisorderProb -= 0.1;
  }

  // Adjust based on stress level
  if (stressLevel >= 7) {
    insomniaProb += 0.15;
    noDisorderProb -= 0.15;
  }

  // Adjust based on physical activity
  if (physicalActivity < 30) {
    apneaProb += 0.1;
    noDisorderProb -= 0.1;
  }

  // BMI Category adjustment
  if (data["BMI Category"] === "Overweight" || data["BMI Category"] === "Obese") {
    apneaProb += 0.15;
    noDisorderProb -= 0.15;
  }

  // Normalize probabilities
  const total = noDisorderProb + insomniaProb + apneaProb;
  noDisorderProb /= total;
  insomniaProb /= total;
  apneaProb /= total;

  // Determine prediction
  let prediction: "No Sleep Disorder" | "Insomnia" | "Sleep Apnea";
  if (noDisorderProb >= insomniaProb && noDisorderProb >= apneaProb) {
    prediction = "No Sleep Disorder";
  } else if (insomniaProb >= apneaProb) {
    prediction = "Insomnia";
  } else {
    prediction = "Sleep Apnea";
  }

  return {
    prediction,
    probabilities: {
      "No Sleep Disorder": noDisorderProb,
      "Insomnia": insomniaProb,
      "Sleep Apnea": apneaProb
    }
  };
}

export default Index;
