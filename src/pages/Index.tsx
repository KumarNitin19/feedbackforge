import { useEffect, useState } from "react";
import { ReviewInput } from "@/components/ReviewInput";
import { AnalysisReport } from "@/components/AnalysisReport";
import { generateReportFromPrompt } from "@/utils/reportUtil";
import UserDropdown from "@/components/UserDropdown";

// Local Storage Key
const LOCAL_STORAGE_KEY = "reviews";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Load the selected user from local storage when the app mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("selectedUser");
    if (storedUser) {
      setCurrentUser([JSON.parse(storedUser)]);
    }
  }, [localStorage.getItem("selectedUser")]);

  const handleUserSelect = (user) => {
    setCurrentUser(user);
  };

  useEffect(() => {
    // Load reviews from Local Storage on component mount
    const savedReviews = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const saveReviewsToLocalStorage = (updatedReviews) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedReviews));
  };

  const analyzeReview = async (text: string) => {
    setIsLoading(true);
    console.log("Analyzing review:", text);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const resp = generateReportFromPrompt(text);
      setReviews([resp]); // Update state
      saveReviewsToLocalStorage([resp]);
      setAnalysisData(resp);
    } catch (error) {
      console.error("Error analyzing review:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(reviews);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <UserDropdown onUserSelect={handleUserSelect} />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Performance Review Assistant
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviews?.length === 0 && currentUser?.role === "privileged" ? (
            <div>
              <ReviewInput onSubmit={analyzeReview} isLoading={isLoading} />
            </div>
          ) : null}
          <div>
            {currentUser?.role === "viewer" || reviews?.length > 0 ? (
              <AnalysisReport data={reviews} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
