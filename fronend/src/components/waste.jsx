import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs.jsx';
import { Alert, AlertDescription } from './ui/alert';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Recycle, 
  AlertTriangle, 
  Leaf, 
  Trash 
} from 'lucide-react';

const WasteManagementDashboard = () => {
  const [selectedWaste, setSelectedWaste] = useState(null);
  const navigate = useNavigate();
  
  const wasteCategories = [
    { type: 'Recyclables', items: ['Paper', 'Plastic', 'Glass', 'Metal'], color: 'bg-blue-100', icon: <Recycle className="h-5 w-5 text-blue-600" /> },
    { type: 'Organic', items: ['Food Waste', 'Garden Waste', 'Compostable Materials'], color: 'bg-green-100', icon: <Leaf className="h-5 w-5 text-green-600" /> },
    { type: 'Hazardous', items: ['Batteries', 'Electronics', 'Chemicals', 'Paint'], color: 'bg-red-100', icon: <AlertTriangle className="h-5 w-5 text-red-600" /> },
    { type: 'General', items: ['Non-recyclable plastics', 'Mixed waste'], color: 'bg-gray-100', icon: <Trash className="h-5 w-5 text-gray-600" /> }
  ];

  const recyclingCenters = [
    { name: 'City Recycling Center', distance: '2.5 km', types: ['Recyclables', 'Hazardous'] },
    { name: 'Green Waste Facility', distance: '4.1 km', types: ['Organic'] },
    { name: 'E-Waste Collection Point', distance: '3.8 km', types: ['Hazardous'] }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </button>

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Waste Management</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" /> Report Hazard
        </button>
      </div>

      <Tabs defaultValue="categorize">
        <TabsList className="grid grid-cols-3 gap-4 mb-6">
          <TabsTrigger value="categorize">
            <Recycle className="h-4 w-4 mr-2" /> Categorize Waste
          </TabsTrigger>
          <TabsTrigger value="locations">
            <MapPin className="h-4 w-4 mr-2" /> Recycling Locations
          </TabsTrigger>
          <TabsTrigger value="schedule">
            <Calendar className="h-4 w-4 mr-2" /> Schedule Pickup
          </TabsTrigger>
        </TabsList>

        <TabsContent value="categorize">
          <div className="grid md:grid-cols-2 gap-4">
            {wasteCategories.map((category) => (
              <Card key={category.type} className={`${category.color}`}>
                <CardHeader>
                  <CardTitle>
                    <span className="mr-2">{category.icon}</span>
                    {category.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li 
                        key={item}
                        className="p-2 bg-white rounded cursor-pointer hover:bg-gray-50"
                        onClick={() => setSelectedWaste(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedWaste && (
            <Alert className="mt-4">
              <AlertDescription>
                <strong>{selectedWaste}</strong>: AI-powered recommendations for proper disposal will appear here.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="locations">
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="md:col-span-2">
              <CardContent className="p-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Recycling+Centers`}
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {recyclingCenters.map((center) => (
              <Card key={center.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{center.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Distance: {center.distance}</p>
                  <p className="text-gray-600">Accepts: {center.types.join(', ')}</p>
                  <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg w-full">
                    📍 Get Directions
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">📅 Schedule a Pickup</h3>
                  <div className="space-y-4">
                    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img src="https://media.discordapp.net/attachments/1128761719611740236/1344853073834545303/Screenshot_2025-02-28_073229.png?ex=67c26b86&is=67c11a06&hm=2303cd9ef2acb8491e9555b76b9e0a6479cc4a5f1565d5f81b7921ae0fcc23d9&=&format=webp&quality=lossless&width=499&height=311" alt="" />
                    </div>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full">
                      Confirm Pickup
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Upcoming Pickups</h3>
                  <div className="space-y-2">
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">♻ Recyclables</p>
                      <p className="text-gray-600">Thursday, Feb 29 - 9:00 AM</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">🌱 Organic Waste</p>
                      <p className="text-gray-600">Monday, Mar 4 - 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WasteManagementDashboard;