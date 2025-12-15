import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

		setTheme(initialTheme);
		document.documentElement.classList.toggle("dark", initialTheme === "dark");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<header className="w-full py-6 px-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
			<div className="max-w-4xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="p-2 rounded-xl gradient-primary">
						<Moon className="h-6 w-6 text-primary-foreground" />
					</div>
					<div>
						<h1 className="text-xl font-bold text-foreground">SleepWell</h1>
						<p className="text-xs text-muted-foreground">
							Sleep Disorder Prediction
						</p>
					</div>
				</div>

				<Button
					variant="ghost"
					size="icon"
					onClick={toggleTheme}
					className="rounded-full"
					aria-label="Toggle theme">
					{theme === "light" ? (
						<Moon className="h-5 w-5" />
					) : (
						<Sun className="h-5 w-5" />
					)}
				</Button>
			</div>
		</header>
	);
}
