import { Activity, Brain, Heart } from "lucide-react";

export function Hero() {
	return (
		<section className="text-center py-12 px-4 animate-fade-up">
			<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/30 text-primary dark:text-primary-foreground border border-primary/20 dark:border-primary/40 text-sm font-medium mb-6 dark:text-white">
				<Activity className="h-4 w-4" />
				Powered by Machine Learning
			</div>

			<h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-4 leading-tight">
				Analisis Kualitas Tidur
			</h1>

			<p className="text-lg text-foreground/70 dark:text-gray-300 max-w-2xl mt-8 mx-auto mb-8">
				Masukkan data kesehatan dan gaya hidup Anda untuk mendapatkan prediksi
				gangguan tidur beserta rekomendasi yang personal.
			</p>

			<div className="flex flex-wrap justify-center gap-6 text-sm">
				<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 dark:bg-primary/20 border border-primary/20 dark:border-primary/30">
					<Brain className="h-5 w-5 text-primary dark:text-accent-foreground" />
					<span className="text-foreground dark:text-white font-medium">
						Analisis AI Akurat
					</span>
				</div>
				<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/5 dark:bg-accent/20 border border-accent/20 dark:border-accent/30">
					<Heart className="h-5 w-5 text-accent dark:text-accent-foreground" />
					<span className="text-foreground dark:text-white font-medium">
						Rekomendasi Personal
					</span>
				</div>
				<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-success/5 dark:bg-success/20 border border-success/20 dark:border-success/30">
					<Activity className="h-5 w-5 text-success dark:text-success-foreground" />
					<span className="text-foreground dark:text-white font-medium">
						Hasil Instan
					</span>
				</div>
			</div>
		</section>
	);
}
