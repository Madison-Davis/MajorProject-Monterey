// src/pages/Missions.tsx
import React, { useState, useRef, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../components/ui/Select";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { missionInitiatives, missionCategories } from "../components/data/MissionData";

export default function Mission() {
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const globeEl = useRef<any>(null);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  const filtered = selectedTopic
    ? missionInitiatives.filter(m => m.category === selectedTopic)
    : [];

  const selectedMeta = Object.values(missionCategories).flat().find(t => t.label === selectedTopic);

  return (
    <div className="space-y-6 p-6">
      {/* Title */}
      <h1 className="flex justify-center mb-6 text-white text-4xl font-bold">Explore Our Missions</h1>

      {/* Map with Sidebar */}
      <div className="relative w-full h-[500px]">
        {/* Sidebar */}
        <div className="absolute top-4 left-4 z-20 w-[280px] p-4 bg-black/40 text-white rounded-xl backdrop-blur-md shadow-lg space-y-4">
          <h2 className="text-xl font-semibold">Mission Stats</h2>
          <p>Active Missions: 12</p>
          <p>Global Impact Score: 87%</p>
          <hr className="border-white/30" />
          <h2 className="text-lg font-semibold">Top Locations</h2>
          <ul className="list-disc list-inside text-sm">
            <li>Amazon Rainforest</li>
            <li>Great Barrier Reef</li>
            <li>Andes Mountains</li>
          </ul>
          <hr className="border-white/30" />
          <h2 className="text-lg font-semibold">Alerts</h2>
          <p>⚠ Monarch migration endangered!</p>
        </div>

        {/* Map */}
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
        </div>
      </div>

      {/* Dropdowns - moved up and styled better */}
      <div className="relative z-20 max-w-5xl mx-auto mt-8">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 flex justify-center gap-8 flex-wrap border border-white/20">
          {Object.entries(missionCategories).map(([theme, topics]) => (
            <div key={theme} className="flex flex-col items-center">
              <span className="text-white font-semibold mb-2">{theme}</span>
              <Select onValueChange={setSelectedTopic} value={selectedTopic}>
                <SelectTrigger className="w-[260px] bg-white text-black shadow-md rounded">
                  <SelectValue placeholder={`Choose ${theme}`} />
                </SelectTrigger>
                <SelectContent className="bg-white text-black shadow-xl z-50">
                  {topics.map(topic => (
                    <SelectItem key={topic.label} value={topic.label}>
                      {topic.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image with Text */}
      {selectedMeta && (
        <>
          <div
            key={selectedTopic}
            className="relative z-10 w-screen h-[400px] overflow-hidden animate-fadeIn"
          >
            <img
              src={selectedMeta.image}
              alt={selectedMeta.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Text below image */}
          <div className="max-w-5xl mx-auto mt-4 text-white text-center">
            <h3 className="text-2xl font-bold">{selectedMeta.label}</h3>
            <p className="mt-2 font-semibold">{selectedMeta.description}</p>
          </div>
        </>
      )}

      {/* Selected Category Initiatives */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((mission, idx) => (
            <Card key={idx} className="bg-gray-800">
              <img src={mission.image} alt={mission.name} className="w-full rounded mb-2" />
              <CardContent>
                <h3 className="text-xl font-semibold text-white">{mission.name}</h3>
                <p className="text-gray-300 mb-2">{mission.description}</p>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden mb-4">
                  <div
                    className="bg-green-500 h-2"
                    style={{ width: `${mission.progress}%` }}
                  />
                </div>
                <div className="flex gap-2">
                  <Button>Help</Button>
                  <Button>Learn</Button>
                  <Button>Donate</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
