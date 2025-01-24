"use client"
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import toast , {Toaster} from "react-hot-toast";

function HistoryPage() {
  const [historyData, setHistoryData] = useState<AIOutput[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const result = (await db
        .select()
        .from(AIOutput)
        .orderBy("createdAt", "desc")) as AIOutput[];
      setHistoryData(result);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToMarkdown = (aiResponse: string) => {
    const markdown = `
\`\`\`markdown
${aiResponse}
\`\`\`
    `;
    navigator.clipboard.writeText(markdown).then(() => {
      toast.success("copied to clipboard!");
    });
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5">
    <h1 className="text-2xl font-bold mb-5">History</h1>
    {historyData.length > 0 ? (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border text-xs border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3">Template Used</th>
              <th className="border border-gray-300 p-3">Date</th>
              <th className="border border-gray-300 p-3">AI Response</th>
              <th className="border border-gray-300 p-3">Copy Button</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">
                  {item.templateSlug}
                </td>
                <td className="border border-gray-300 p-3">
                  {new Date(item.createdAt).toLocaleString()}
                </td>
                <td className="border border-gray-300 p-3 overflow-hidden line-clamp-1 sm:line-clamp-2">
                  {item.aiResponse}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <button
                    onClick={() => copyToMarkdown(item.aiResponse)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  >
                    Copy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <p>No history found.</p>
    )}
    <Toaster />
  </div>
  );
}

export default HistoryPage;
