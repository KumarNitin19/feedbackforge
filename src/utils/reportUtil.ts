import reports from "@/constants/reportData";

// Function to match report based on user prompt
export function generateReportFromPrompt(prompt: string): object {
    const positiveKeywords = ["outstanding", "excellent", "exceptional", "great"];
    const negativeKeywords = ["improve", "needs", "can be better", "weak", "lack", "room for improvement", "struggle"];
    const leadershipKeywords = ["leadership", "delegation", "management", "team leader"];
    const strategicPlanningKeywords = ["strategic", "long-term planning", "future planning"];
    const performanceKeywords = ["performance", "task delegation", "communication", "initiative"];
    const badPerformanceKeywords = ["subpar", "struggles", "weak", "poor", "lack", "underperforming", "requires improvement"];

    if (badPerformanceKeywords.some(keyword => prompt.includes(keyword))) {
        // If the prompt contains bad performance-related keywords, return the negative report (Report 5)
        return reports.report5;
    }

    if (positiveKeywords.some(keyword => prompt.includes(keyword)) && !negativeKeywords.some(keyword => prompt.includes(keyword))) {
        if (leadershipKeywords.some(keyword => prompt.includes(keyword))) {
            return reports.report1; // Report 1: Excellent Performance with Leadership Focus
        } else {
            return reports.report2; // Report 1: Exceptional Performance
        }
    } else if (negativeKeywords.some(keyword => prompt.includes(keyword))) {
        if (leadershipKeywords.some(keyword => prompt.includes(keyword))) {
            return reports.report3; // Report 5: Needs Improvement in Leadership
        } else if (strategicPlanningKeywords.some(keyword => prompt.includes(keyword))) {
            return reports.report2; // Report 1: Strong Performance with Suggestions for Improvement
        } else {
            return reports.report5; // Report 5: Needs Improvement in Several Areas
        }
    } else {
        return reports.report1; // Default to a balanced report if no strong keywords are matched
    }
}