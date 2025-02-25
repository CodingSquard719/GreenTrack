import React, { useState } from 'react';
import { Users, Calendar, MapPin, Heart, MessageSquare, Share2, Clock, Search, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useNavigate } from 'react-router-dom';

const CommunityEventsPage = () => {
  const [selectedTab, setSelectedTab] = useState('groups');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const ecoGroups = [
    {
      id: 1,
      name: "Green City Warriors",
      members: 1245,
      description: "Local community focused on urban sustainability and green spaces",
      location: "Downtown Area",
      image: "/api/placeholder/400/200",
      tags: ["Urban Gardening", "Waste Reduction"]
    },
    {
      id: 2,
      name: "Ocean Cleanup Squad",
      members: 856,
      description: "Dedicated to keeping our beaches and oceans clean",
      location: "Coastal Region",
      image: "/api/placeholder/400/200",
      tags: ["Beach Cleanup", "Marine Life"]
    },
    {
      id: 3,
      name: "Forest Friends",
      members: 678,
      description: "Tree planting and forest conservation group",
      location: "National Park",
      image: "/api/placeholder/400/200",
      tags: ["Tree Planting", "Conservation"]
    }
  ];

  const events = [
    {
      id: 1,
      title: "Weekend Tree Planting",
      date: "March 15, 2025",
      time: "9:00 AM",
      location: "Central Park",
      participants: 45,
      description: "Join us for a community tree planting event. Bring your gardening gloves!",
      organizer: "Green City Warriors"
    },
    {
      id: 2,
      title: "Beach Cleanup Drive",
      date: "March 20, 2025",
      time: "8:00 AM",
      location: "Sunny Beach",
      participants: 78,
      description: "Monthly beach cleanup event. All equipment will be provided.",
      organizer: "Ocean Cleanup Squad"
    },
    {
      id: 3,
      title: "Eco-Workshop: Composting",
      date: "March 25, 2025",
      time: "2:00 PM",
      location: "Community Center",
      participants: 30,
      description: "Learn how to start your own composting system at home.",
      organizer: "Green Living Initiative"
    }
  ];

  const stories = [
    {
      id: 1,
      author: "Sarah Green",
      title: "How Our Community Garden Transformed the Neighborhood",
      content: "What started as a small plot has grown into a thriving community space...",
      likes: 156,
      comments: 23,
      image: "/api/placeholder/400/200",
      date: "2 days ago"
    },
    {
      id: 2,
      author: "Mike Rivers",
      title: "Success Story: Zero Waste Journey",
      content: "My journey to a zero-waste lifestyle began six months ago...",
      likes: 89,
      comments: 15,
      image: "/api/placeholder/400/200",
      date: "4 days ago"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Add back button */}
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </button>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Community & Events</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search groups and events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedTab === 'groups' ? 'bg-green-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSelectedTab('groups')}
        >
          Eco-Groups
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedTab === 'events' ? 'bg-green-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSelectedTab('events')}
        >
          Events
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedTab === 'stories' ? 'bg-green-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSelectedTab('stories')}
        >
          Stories
        </button>
      </div>

      {/* Eco-Groups Section */}
      {selectedTab === 'groups' && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ecoGroups.map(group => (
            <Card key={group.id} className="hover:shadow-lg transition-shadow">
              <img src={group.image} alt={group.name} className="w-full h-48 object-cover rounded-t-lg" />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{group.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{group.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {group.location}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.tags.map(tag => (
                    <span key={tag} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Join Group
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Events Section */}
      {selectedTab === 'events' && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map(event => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date} at {event.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {event.participants} participants
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Join Event
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Stories Section */}
      {selectedTab === 'stories' && (
        <div className="space-y-6">
          {stories.map(story => (
            <Card key={story.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded-lg" />
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.content}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-4">By {story.author}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{story.date}</span>
                    </div>
                    <div className="flex space-x-4">
                      <button className="flex items-center text-gray-600 hover:text-green-600">
                        <Heart className="w-4 h-4 mr-1" />
                        {story.likes}
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-green-600">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {story.comments}
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-green-600">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
            Share Your Story
          </button>
        </div>
      )}
    </div>
  );
};

export default CommunityEventsPage;