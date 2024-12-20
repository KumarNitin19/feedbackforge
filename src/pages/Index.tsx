import { useState } from "react";
import { ReviewInput } from "@/components/ReviewInput";
import { AnalysisReport } from "@/components/AnalysisReport";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);

  const analyzeReview = async (text: string) => {
    setIsLoading(true);
    console.log("Analyzing review:", text);

    try {
      // Simulated API call to OpenAI
      // This should be replaced with actual OpenAI API integration
      const mockData = {
        strengths: [
          "Excellent communication skills with team members and stakeholders",
          "Consistently delivers high-quality work ahead of deadlines",
          "Shows great initiative in problem-solving",
        ],
        improvements: [
          "Could benefit from more strategic long-term planning",
          "Sometimes takes on too many tasks simultaneously",
        ],
        suggestions: [
          "Consider delegating more tasks to team members",
          "Participate in leadership training programs",
          "Schedule regular check-ins with stakeholders",
        ],
        sentiment: {
          positive: 65,
          neutral: 25,
          negative: 10,
        },
        metrics: [
          { category: "Technical Skills", score: 8.5 },
          { category: "Communication", score: 9.0 },
          { category: "Leadership", score: 7.5 },
          { category: "Initiative", score: 8.0 },
          { category: "Teamwork", score: 8.8 },
        ],
      };

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setAnalysisData(mockData);
    } catch (error) {
      console.error("Error analyzing review:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Performance Review Assistant
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ReviewInput onSubmit={analyzeReview} isLoading={isLoading} />
          </div>
          <div>
            <AnalysisReport data={analysisData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
