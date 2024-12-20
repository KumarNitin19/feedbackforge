import { useState } from "react";
import { ReviewInput } from "@/components/ReviewInput";
import { AnalysisReport } from "@/components/AnalysisReport";
import { generateReportFromPrompt } from "@/utils/reportUtil";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);

  const analyzeReview = async (text: string) => {
    setIsLoading(true);
    console.log("Analyzing review:", text);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const resp = generateReportFromPrompt(text);
      console.log(resp);
      setAnalysisData(resp);
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
