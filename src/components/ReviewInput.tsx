import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface ReviewInputProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

export const ReviewInput = ({ onSubmit, isLoading }: ReviewInputProps) => {
  const [reviewText, setReviewText] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (reviewText.trim().length < 50) {
      toast({
        title: "Review too short",
        description: "Please provide a more detailed review (minimum 50 characters)",
        variant: "destructive",
      });
      return;
    }
    onSubmit(reviewText);
  };

  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Performance Review Input</h2>
      <p className="text-muted-foreground">
        Enter your detailed review for the team member. The AI will analyze the content
        and generate insights.
      </p>
      <Textarea
        placeholder="Enter your performance review here..."
        className="min-h-[200px] resize-none"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <Button 
        onClick={handleSubmit} 
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "Analyzing..." : "Generate Report"}
      </Button>
    </Card>
  );
};