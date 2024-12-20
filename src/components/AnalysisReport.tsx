import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface AnalysisReportProps {
  data: {
    strengths: string[];
    improvements: string[];
    suggestions: string[];
    sentiment: {
      positive: number;
      neutral: number;
      negative: number;
    };
    metrics: {
      category: string;
      score: number;
    }[];
  } | null;
}

const COLORS = ["#4f46e5", "#818cf8", "#c7d2fe"];

export const AnalysisReport = ({ data }: AnalysisReportProps) => {
  if (!data) return null;

  const sentimentData = [
    { name: "Positive", value: data.sentiment.positive },
    { name: "Neutral", value: data.sentiment.neutral },
    { name: "Negative", value: data.sentiment.negative },
  ];

  return (
    <div className="space-y-6 fade-in">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Strengths</h2>
        <div className="space-y-2">
          {data.strengths.map((strength, index) => (
            <div key={index} className="flex items-start gap-2">
              <Badge variant="default" className="mt-1">
                {index + 1}
              </Badge>
              <p>{strength}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Areas for Improvement</h2>
        <div className="space-y-2">
          {data.improvements.map((improvement, index) => (
            <div key={index} className="flex items-start gap-2">
              <Badge variant="secondary" className="mt-1">
                {index + 1}
              </Badge>
              <p>{improvement}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Performance Metrics</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.metrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Bar dataKey="score" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Sentiment Analysis</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};