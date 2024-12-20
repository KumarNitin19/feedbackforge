import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

// Local Storage Key
const LOCAL_STORAGE_KEY = "reviews";

interface Review {
  id: number;
  text: string;
}
interface ReviewInputProps {
  onSubmit: (text: string) => Promise<void>;
  isLoading: boolean;
}
export const ReviewInput = ({ onSubmit, isLoading }: ReviewInputProps) => {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Load reviews from Local Storage on component mount
    const savedReviews = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const saveReviewsToLocalStorage = (updatedReviews: Review[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedReviews));
  };

  const handleSubmit = () => {
    if (reviewText.trim().length < 50) {
      alert("Review too short. Minimum 50 characters required.");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      text: reviewText,
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews); // Update state
    saveReviewsToLocalStorage(updatedReviews); // Save to Local Storage
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

      <div className="space-y-4 mt-6">
        <h3 className="text-xl font-semibold">Submitted Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Card key={review.id} className="p-4">
              <p>{review.text}</p>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground">No reviews submitted yet.</p>
        )}
      </div>
    </Card>
  );
};
