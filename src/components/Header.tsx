import { Moon } from "lucide-react";

export function Header() {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl gradient-primary">
            <Moon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">SleepWell</h1>
            <p className="text-xs text-muted-foreground">Sleep Disorder Prediction</p>
          </div>
        </div>
      </div>
    </header>
  );
}
