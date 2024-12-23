import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface ReviewInputProps {
  onSubmit: (text: string) => Promise<void>;
  isLoading: boolean;
}
export const ReviewInput = ({ onSubmit, isLoading }: ReviewInputProps) => {
  const [reviewText, setReviewText] = useState("");
  const handleSubmit = () => {
    if (reviewText.trim().length < 50) {
      alert("Review too short. Minimum 50 characters required.");
      return;
    }
    onSubmit(reviewText);
    setReviewText(""); // Clear input
  };

  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Performance Review Input</h2>
      <Textarea
        placeholder="Enter your review here..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        className="min-h-[200px] resize-none"
      />
      <Button onClick={handleSubmit} className="w-full">
        Submit Review
      </Button>
    </Card>
  );
};
