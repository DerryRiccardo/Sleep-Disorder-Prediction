import { PredictionResult, Recommendation } from "@/types/prediction";

export const recommendations: Record<PredictionResult, Recommendation> = {
  "No Sleep Disorder": {
    title: "Tidur Anda Sehat!",
    description: "Berdasarkan analisis, Anda tidak menunjukkan tanda-tanda gangguan tidur. Pertahankan pola hidup sehat Anda.",
    tips: [
      "Pertahankan jadwal tidur yang konsisten setiap hari",
      "Batasi penggunaan gadget 1 jam sebelum tidur",
      "Jaga suhu kamar tetap nyaman (18-22°C)",
      "Lakukan aktivitas relaksasi sebelum tidur",
      "Hindari kafein 6 jam sebelum waktu tidur"
    ],
    icon: "check-circle"
  },
  "Insomnia": {
    title: "Indikasi Insomnia Terdeteksi",
    description: "Hasil analisis menunjukkan kemungkinan insomnia. Konsultasikan dengan dokter untuk diagnosis dan penanganan yang tepat.",
    tips: [
      "Buat jadwal tidur yang teratur dan patuhi setiap hari",
      "Hindari tidur siang yang terlalu lama (maks 20 menit)",
      "Lakukan teknik relaksasi seperti meditasi atau pernapasan dalam",
      "Batasi konsumsi kafein dan alkohol",
      "Ciptakan lingkungan tidur yang gelap dan tenang",
      "Jika tidak bisa tidur dalam 20 menit, bangun dan lakukan aktivitas menenangkan"
    ],
    icon: "moon"
  },
  "Sleep Apnea": {
    title: "Indikasi Sleep Apnea Terdeteksi",
    description: "Hasil analisis menunjukkan kemungkinan sleep apnea. Segera konsultasikan dengan spesialis tidur untuk evaluasi lebih lanjut.",
    tips: [
      "Tidur dengan posisi miring untuk membuka jalan napas",
      "Jaga berat badan ideal untuk mengurangi tekanan pada saluran napas",
      "Hindari alkohol dan obat penenang sebelum tidur",
      "Pertimbangkan penggunaan CPAP jika direkomendasikan dokter",
      "Lakukan olahraga teratur untuk meningkatkan kualitas tidur",
      "Hentikan kebiasaan merokok jika ada"
    ],
    icon: "alert-triangle"
  }
};
