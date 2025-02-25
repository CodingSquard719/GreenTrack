import React, { useState } from 'react';
import "../App.css";
import { 
  BarChart, 
  LeafyGreen, 
  Trash2, 
  Radio, 
  Trophy, 
  Users,
  Menu,
  X,
  Sun,
  Cloud,
  Wind,
  Droplets,
  AlertTriangle,
  ChevronDown,
  Recycle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState('daily');
  const [expandedCard, setExpandedCard] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    { title: 'Carbon Tracker', icon: BarChart, route: '/carbon' },
    { title: 'Waste Management', icon: Trash2, route: '/waste' },
    { title: 'Monitoring', icon: Radio, route: '/monitoring' },
    { title: 'Challenges', icon: Trophy, route: '/challenges' },
    { title: 'Community', icon: Users, route: '/community' }
  ];

  const weatherData = {
    temp: 22,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: 'Today', temp: 22, icon: Sun },
      { day: 'Tomorrow', temp: 24, icon: Cloud },
      { day: 'Wed', temp: 20, icon: Droplets },
      { day: 'Thu', temp: 23, icon: Sun },
    ]
  };

  const airQualityData = {
    aqi: 42,
    status: 'Good',
    pollutants: {
      pm25: { value: 15, status: 'Good' },
      pm10: { value: 30, status: 'Moderate' },
      o3: { value: 45, status: 'Good' },
      no2: { value: 25, status: 'Good' }
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCardExpansion = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleCarbonTrackClick = () => {
    navigate('/carbon');
  };

  const handleWasteClick = () => {
    navigate('/waste');
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-teal-600 to-emerald-700 text-white transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          <div className={`flex items-center ${!isSidebarOpen ? 'hidden' : ''}`}>
            <div className="bg-white p-2 rounded-lg">
              <LeafyGreen className="h-8 w-8 text-teal-600" />
            </div>
            <span className="ml-2 font-bold text-xl">EcoTrack</span>
          </div>
          <button onClick={toggleSidebar} className="p-2 hover:bg-teal-500 rounded-lg transition-colors">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.route}
              className="flex items-center px-4 py-3 text-gray-100 hover:bg-teal-500 transition-colors relative group"
            >
              <item.icon className="h-5 w-5" />
              <span className={`ml-4 ${!isSidebarOpen ? 'hidden' : ''}`}>{item.title}</span>
              {!isSidebarOpen && (
                <div className="absolute left-20 bg-teal-700 text-white px-2 py-1 rounded hidden group-hover:block">
                  {item.title}
                </div>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedMetric('daily')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedMetric === 'daily' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Daily
              </button>
              <button 
                onClick={() => setSelectedMetric('weekly')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedMetric === 'weekly' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Weekly
              </button>
              <button 
                onClick={() => setSelectedMetric('monthly')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedMetric === 'monthly' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Carbon Score Card */}
            <div 
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                expandedCard === 'carbon' ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => toggleCardExpansion('carbon')}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Your Carbon Score</h2>
                <ChevronDown className={`transform transition-transform ${expandedCard === 'carbon' ? 'rotate-180' : ''}`} />
              </div>
              <div className="text-3xl font-bold text-teal-600">245 kg</div>
              <p className="text-gray-500 mt-2">CO₂ this month</p>
              
              {expandedCard === 'carbon' && (
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Breakdown</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Transport</span>
                        <span>120 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Energy</span>
                        <span>85 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Food</span>
                        <span>40 kg</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Weather Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Weather Report</h2>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-800">{weatherData.temp}°C</div>
                  <p className="text-gray-500">{weatherData.condition}</p>
                </div>
                <Sun className="h-12 w-12 text-yellow-500" />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="text-center">
                    <p className="text-sm text-gray-500">{day.day}</p>
                    <day.icon className="h-6 w-6 mx-auto my-1 text-gray-600" />
                    <p className="text-sm font-semibold">{day.temp}°C</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Air Quality Card */}
            <div 
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                expandedCard === 'air' ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => toggleCardExpansion('air')}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Air Quality</h2>
                <ChevronDown className={`transform transition-transform ${expandedCard === 'air' ? 'rotate-180' : ''}`} />
              </div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-blue-600">{airQualityData.aqi}</div>
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {airQualityData.status}
                </span>
              </div>
              
              {expandedCard === 'air' && (
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(airQualityData.pollutants).map(([key, data]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-500 uppercase">{key}</div>
                        <div className="text-lg font-semibold">{data.value}</div>
                        <div className={`text-sm ${
                          data.status === 'Good' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {data.status}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm text-blue-800">
                        Air quality is good for outdoor activities
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Green Actions Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Suggested Actions</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <LeafyGreen className="h-4 w-4 mr-2 text-teal-500" />
                  Use public transport today
                </li>
                <li className="flex items-center text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <LeafyGreen className="h-4 w-4 mr-2 text-teal-500" />
                  Reduce water usage
                </li>
              </ul>
            </div>

            {/* Gamification Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Progress</h2>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-teal-600">
                      Level 4
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
                  <div style={{ width: '75%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                </div>
              </div>
              <p className="text-gray-500">75/100 points to next level</p>
            </div>
          </div>

          {/* Carbon Track Button */}
          <div onClick={handleCarbonTrackClick} className="cursor-pointer">
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all">
              <div className="flex items-center space-x-4">
                <LeafyGreen className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Carbon Tracker</h3>
                  <p className="text-sm text-gray-500">Monitor your carbon footprint</p>
                </div>
              </div>
            </div>
          </div>

          {/* Waste Management Button */}
          <div onClick={handleWasteClick} className="cursor-pointer mt-4">
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all">
              <div className="flex items-center space-x-4">
                <Recycle className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Waste Management</h3>
                  <p className="text-sm text-gray-500">Track and manage your waste</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          Completed "No Plastic Challenge"
                        </p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;