import { useState } from "react";
import { Incident } from "../types/incident";

import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard = ({ incident }: IncidentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const severityColors = {
    Low: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800"
  };

  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{incident.title}</h3>
          <div className="flex items-center gap-3 mb-2">
            <span className={cn("px-2 py-1 rounded-full text-sm font-medium", severityColors[incident.severity])}>
              {incident.severity}
            </span>
            <span className="text-gray-500 text-sm">
              {/* {format(new Date(incident.reported_at), "PPP")} */}
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-600 border-t pt-4 animate-accordion-down">
          {incident.description}
        </div>
      )}
    </div>
  );
};

export default IncidentCard;
