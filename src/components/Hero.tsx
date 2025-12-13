import { Activity, Brain, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="text-center py-12 px-4 animate-fade-up">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
        <Activity className="h-4 w-4" />
        Powered by Machine Learning
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
        Analisis Kualitas
        <span className="block gradient-primary bg-clip-text text-transparent">
          Tidur Anda
        </span>
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Masukkan data kesehatan dan gaya hidup Anda untuk mendapatkan prediksi 
        gangguan tidur beserta rekomendasi yang personal.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>Analisis AI Akurat</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-accent" />
          <span>Rekomendasi Personal</span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-success" />
          <span>Hasil Instan</span>
        </div>
      </div>
    </section>
  );
}
