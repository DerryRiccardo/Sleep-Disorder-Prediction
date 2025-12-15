import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PredictionForm } from "@/components/PredictionForm";
import { PredictionResultCard } from "@/components/PredictionResult";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { EmptyState } from "@/components/EmptyState";
import { PredictionInput, PredictionResponse } from "@/types/prediction";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
	const [result, setResult] = useState<PredictionResponse | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();
	const resultRef = useRef<HTMLDivElement>(null);

	// Smooth scroll to result when it's available
	useEffect(() => {
		if (result && resultRef.current) {
			setTimeout(() => {
				resultRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}, 100);
		}
	}, [result]);

	const handleSubmit = async (data: PredictionInput) => {
		setIsLoading(true);
		setResult(null);

		try {
			// Parse Blood Pressure
			const [systolic, diastolic] = data["Blood Pressure"]
				.split("/")
				.map(Number);

			// Transform data to match backend API format (snake_case)
			const apiPayload = {
				Gender: data.Gender,
				Age: data.Age,
				Occupation: data.Occupation,
				Sleep_Duration: data["Sleep Duration"],
				Quality_of_Sleep: data["Quality of Sleep"],
				Physical_Activity_Level: data["Physical Activity Level"],
				Stress_Level: data["Stress Level"],
				BMI_Category: data["BMI Category"],
				Heart_Rate: data["Heart Rate"],
				Daily_Steps: data["Daily Steps"],
				Systolic_BP: systolic,
				Diastolic_BP: diastolic,
			};

			const response = await fetch("/api/predict", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(apiPayload),
			});

			const responseText = await response.text();

			if (!response.ok) {
				throw new Error(`API Error (${response.status}): ${responseText}`);
			}

			const apiResponse = JSON.parse(responseText);

			// Transform API response to match frontend format
			const predictionResult: PredictionResponse = {
				prediction: apiResponse.prediction,
				probabilities: {
					"No Sleep Disorder":
						apiResponse.probabilities["No Sleep Disorder"] / 100,
					Insomnia: apiResponse.probabilities["Insomnia"] / 100,
					"Sleep Apnea": apiResponse.probabilities["Sleep Apnea"] / 100,
				},
			};

			setResult(predictionResult);

			toast({
				title: "Analisis Selesai",
				description: `Hasil prediksi: ${
					apiResponse.prediction
				} (${apiResponse.confidence.toFixed(1)}% confidence)`,
			});
		} catch (error) {
			console.error("Prediction error:", error);

			toast({
				title: "Error",
				description: "Gagal mendapatkan prediksi. Silakan coba lagi.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen">
			<Header />

			<main className="max-w-4xl mx-auto px-4 pb-16">
				<Hero />

				<div className="grid gap-8">
					<PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />

					<div ref={resultRef}>
						{isLoading && <LoadingSkeleton />}
						{!isLoading && result && <PredictionResultCard result={result} />}
						{!isLoading && !result && <EmptyState />}
					</div>
				</div>
			</main>

			<footer className="py-8 text-center text-sm text-muted-foreground border-t dark:text-white">
				<p>© 2025 SleepWell. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Index;
