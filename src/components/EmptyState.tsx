import { Card, CardContent } from "@/components/ui/card";
import { Moon, ArrowUp, Sparkles } from "lucide-react";

export function EmptyState() {
	return (
		<Card className="border-dashed border-2 bg-muted/30 dark:bg-muted/10 animate-fade-up">
			<CardContent className="flex flex-col items-center justify-center py-16 text-center">
				<div className="relative mb-6">
					<div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
					<div className="relative bg-gradient-to-br from-primary to-accent p-8 rounded-full">
						<Moon className="h-16 w-16 text-primary-foreground dark:text-white" />
					</div>
				</div>

				<div className="flex items-center gap-2 mb-3">
					<Sparkles className="h-5 w-5 text-primary animate-pulse" />
					<h3 className="text-2xl font-bold text-foreground">
						Siap untuk Analisis Tidur?
					</h3>
				</div>

				<p className="text-foreground/70 dark:text-foreground/80 max-w-md mb-6">
					Isi formulir di atas dengan data kesehatan Anda. Kami akan menganalisis dan memberikan hasil dalam sekejap.
				</p>

				<div className="flex items-center gap-2 text-sm text-muted-foreground animate-bounce">
					<ArrowUp className="h-4 w-4" />
					<span>Mulai dengan mengisi form di atas</span>
				</div>
			</CardContent>
		</Card>
	);
}
