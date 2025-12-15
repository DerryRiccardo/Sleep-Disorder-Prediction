import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
	return (
		<div className="space-y-6 animate-fade-up">
			{/* Main Result Card Skeleton */}
			<Card className="border-2">
				<CardHeader>
					<div className="flex items-center gap-4">
						<Skeleton className="h-14 w-14 rounded-full" />
						<div className="space-y-2 flex-1">
							<Skeleton className="h-6 w-48" />
							<Skeleton className="h-4 w-64" />
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-3/4 mt-2" />
				</CardContent>
			</Card>

			{/* Probabilities Card Skeleton */}
			<Card>
				<CardHeader>
					<Skeleton className="h-5 w-40" />
				</CardHeader>
				<CardContent className="space-y-4">
					{[1, 2, 3].map((i) => (
						<div key={i} className="space-y-2">
							<div className="flex justify-between">
								<Skeleton className="h-4 w-32" />
								<Skeleton className="h-4 w-12" />
							</div>
							<Skeleton className="h-2 w-full" />
						</div>
					))}
				</CardContent>
			</Card>

			{/* Recommendations Card Skeleton */}
			<Card>
				<CardHeader>
					<Skeleton className="h-5 w-32" />
					<Skeleton className="h-4 w-56 mt-2" />
				</CardHeader>
				<CardContent>
					<div className="space-y-3">
						{[1, 2, 3, 4].map((i) => (
							<div key={i} className="flex items-start gap-3">
								<Skeleton className="h-6 w-6 rounded-full flex-shrink-0" />
								<Skeleton className="h-4 flex-1" />
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
