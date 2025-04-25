import { useState } from "react";
import { useSelector } from "react-redux";
import { Severity } from "../types/incident";
import { RootState } from "../store/store";
import IncidentCard from "../components/IncidentCard";
import NewIncidentForm from "../components/NewIncidentForm";

const Index = () => {
  const incidents = useSelector((state: RootState) => state.incidents.incidents);
  const [severityFilter, setSeverityFilter] = useState<"All" | Severity>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const filteredAndSortedIncidents = incidents
    .filter((incident) => severityFilter === "All" || incident.severity === severityFilter)
    .sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          AI Safety Incident Dashboard
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border mb-6">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2">
                  <select
                    aria-label="Filter by severity"
                    value={severityFilter}
                    onChange={(e) => setSeverityFilter(e.target.value as "All" | Severity)}
                    className="border rounded-md px-3 py-1.5 text-sm bg-white"
                  >
                    <option value="All">All Severities</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                  <select
                    aria-label="Sort incidents by date"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                    className="border rounded-md px-3 py-1.5 text-sm bg-white"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
                <div className="text-sm text-gray-500">
                  {filteredAndSortedIncidents.length} incidents found
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filteredAndSortedIncidents.map((incident) => (
                <IncidentCard key={incident.id} incident={incident} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border p-6">
              <NewIncidentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;