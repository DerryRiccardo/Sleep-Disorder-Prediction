import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PredictionInput } from "@/types/prediction";
import { Loader2, Send } from "lucide-react";

interface PredictionFormProps {
  onSubmit: (data: PredictionInput) => void;
  isLoading: boolean;
}

const occupations = [
  "Office Worker",
  "Doctor",
  "Nurse",
  "Teacher",
  "Engineer",
  "Software Engineer",
  "Salesperson",
  "Manager",
  "Accountant",
  "Lawyer",
  "Others"
];

const bmiCategories = ["Underweight", "Normal", "Overweight", "Obese"];
const genders = ["Male", "Female"];

export function PredictionForm({ onSubmit, isLoading }: PredictionFormProps) {
  const [formData, setFormData] = useState<PredictionInput>({
    Age: 30,
    Gender: "Male",
    "Sleep Duration": 7,
    "Quality of Sleep": 7,
    "Physical Activity Level": 50,
    "Stress Level": 5,
    "Blood Pressure": "120/80",
    "Heart Rate": 70,
    "Daily Steps": 5000,
    Occupation: "Office Worker",
    "BMI Category": "Normal"
  });

  const [systolic, setSystolic] = useState("120");
  const [diastolic, setDiastolic] = useState("80");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      "Blood Pressure": `${systolic}/${diastolic}`
    };
    onSubmit(data);
  };

  const handleInputChange = (field: keyof PredictionInput, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full animate-fade-up">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="h-8 w-1 rounded-full gradient-primary" />
          Form Prediksi
        </CardTitle>
        <CardDescription>
          Masukkan data kesehatan dan gaya hidup Anda untuk analisis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Usia (tahun)</Label>
              <Input
                id="age"
                type="number"
                min={1}
                max={120}
                value={formData.Age}
                onChange={(e) => handleInputChange("Age", parseInt(e.target.value) || 0)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Jenis Kelamin</Label>
              <Select value={formData.Gender} onValueChange={(v) => handleInputChange("Gender", v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {genders.map(g => (
                    <SelectItem key={g} value={g}>{g === "Male" ? "Laki-laki" : "Perempuan"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="occupation">Pekerjaan</Label>
              <Select value={formData.Occupation} onValueChange={(v) => handleInputChange("Occupation", v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {occupations.map(o => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Sleep Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sleepDuration">Durasi Tidur (jam)</Label>
              <Input
                id="sleepDuration"
                type="number"
                min={0}
                max={24}
                step={0.1}
                value={formData["Sleep Duration"]}
                onChange={(e) => handleInputChange("Sleep Duration", parseFloat(e.target.value) || 0)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qualitySleep">Kualitas Tidur (1-10)</Label>
              <Input
                id="qualitySleep"
                type="number"
                min={1}
                max={10}
                value={formData["Quality of Sleep"]}
                onChange={(e) => handleInputChange("Quality of Sleep", parseInt(e.target.value) || 1)}
                required
              />
            </div>
          </div>

          {/* Activity & Stress */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="physicalActivity">Aktivitas Fisik (menit/hari)</Label>
              <Input
                id="physicalActivity"
                type="number"
                min={0}
                max={300}
                value={formData["Physical Activity Level"]}
                onChange={(e) => handleInputChange("Physical Activity Level", parseInt(e.target.value) || 0)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stressLevel">Tingkat Stres (1-10)</Label>
              <Input
                id="stressLevel"
                type="number"
                min={1}
                max={10}
                value={formData["Stress Level"]}
                onChange={(e) => handleInputChange("Stress Level", parseInt(e.target.value) || 1)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dailySteps">Langkah Harian</Label>
              <Input
                id="dailySteps"
                type="number"
                min={0}
                max={50000}
                value={formData["Daily Steps"]}
                onChange={(e) => handleInputChange("Daily Steps", parseInt(e.target.value) || 0)}
                required
              />
            </div>
          </div>

          {/* Health Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Tekanan Darah (mmHg)</Label>
              <div className="flex gap-2 items-center">
                <Input
                  type="number"
                  min={70}
                  max={200}
                  placeholder="Sistolik"
                  value={systolic}
                  onChange={(e) => setSystolic(e.target.value)}
                  required
                />
                <span className="text-muted-foreground">/</span>
                <Input
                  type="number"
                  min={40}
                  max={130}
                  placeholder="Diastolik"
                  value={diastolic}
                  onChange={(e) => setDiastolic(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="heartRate">Detak Jantung (bpm)</Label>
              <Input
                id="heartRate"
                type="number"
                min={40}
                max={200}
                value={formData["Heart Rate"]}
                onChange={(e) => handleInputChange("Heart Rate", parseInt(e.target.value) || 70)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bmi">Kategori BMI</Label>
              <Select value={formData["BMI Category"]} onValueChange={(v) => handleInputChange("BMI Category", v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {bmiCategories.map(b => (
                    <SelectItem key={b} value={b}>{b}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            type="submit" 
            variant="gradient" 
            size="lg" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Menganalisis...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Analisis Sekarang
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
