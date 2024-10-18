"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bell, Newspaper, LibraryBig } from "lucide-react";
import { PostFeed } from "@/components/post-feed";

const channelData = {
  id: 1,
  name: "University of Dhaka",
  slug: "university-of-dhaka",
  subscribers: 12000,
  logo: "https://random.imagecdn.app/500/500?dhaka",
  cover: "https://random.imagecdn.app/1200/300?dhaka",
  description: "The oldest university in Bangladesh. Established in 1921. The university has 13 faculties and 83 departments. It has around 33,000 students and 1,800 faculty members. The university has a distinguished alumni list which includes Nobel laureate Muhammad Yunus, Fazle Hasan Abed, Abul Fateh, Buddhadeb Bose, and Mani Shankar Aiyar.",
  url: "https://www.du.ac.bd",
  premium: true,
  threads: [
    {
      id: 1,
      name: "Notice",
      slug: "notice",
      subscribers: 120,
      logo: "https://random.imagecdn.app/500/500?notice",
    },
    {
      id: 2,
      name: "News",
      slug: "news",
      subscribers: 98,
      logo: "https://random.imagecdn.app/500/500?news",
    },
    {
        id: 3,
        name: "Office",
        slug: "library",
        subscribers: 75,
        logo: "https://random.imagecdn.app/500/500?library",
    }
  ],
};

export default function ChannelPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [threadSubscriptions, setThreadSubscriptions] = useState<{
    [key: number]: boolean;
  }>({});

  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  };

  const handleThreadSubscribe = (id: number) => {
    setThreadSubscriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
    <Card className="mb-8">
      <img
        src={channelData.cover}
        alt={`${channelData.name} cover`}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardHeader className="flex justify-between p-4">
        <div className="flex items-center gap-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={channelData.logo} alt={channelData.name} />
          <AvatarFallback>{channelData.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            {channelData.name}
            {channelData.premium && <Badge className="mt-2">Premium</Badge>}
          </CardTitle>
          <CardDescription className="text-gray-500">
            {channelData.subscribers} subscribers
          </CardDescription>
          <Button
            variant="default"
            className="mt-2"
            onClick={handleSubscribe}
          >
            {subscribed ? "Unsubscribe" : "Subscribe"}
          </Button>
        </div>
        </div>
        <div className="text-right flex flex-col justify-center">
        <CardDescription className="text-gray-500 text-sm">
          {channelData.description}
        </CardDescription>
        <a
          href={channelData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {channelData.url}
        </a>
        </div>
      </CardHeader>
    </Card>

      <Tabs defaultValue="notice">
        <TabsList className="mb-4">
          {channelData.threads.map((thread) => (
            <TabsTrigger key={thread.id} value={thread.slug}>
              {thread.name === "Notice" ? (
                <Bell className="mr-2 h-4 w-4" />
              ) : thread.name === "News" ? (
                <Newspaper className="mr-2 h-4 w-4" />
              ) : (
                <LibraryBig className="mr-2 h-4 w-4" />
              )}
              {thread.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {channelData.threads.map((thread) => (
          <TabsContent key={thread.id} value={thread.slug}>
            <Card className="mb-4">
              <CardHeader className="flex justify-between items-center p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={thread.logo} alt={thread.name} />
                    <AvatarFallback>{thread.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {thread.name}
                      </CardTitle>
                      <CardDescription className="text-gray-500">
                        {thread.subscribers} subscribers
                      </CardDescription>
                    </div>
                    <Button
                      variant="default"
                      onClick={() => handleThreadSubscribe(thread.id)}
                    >
                      {threadSubscriptions[thread.id] ? "Unsubscribe" : "Subscribe"}
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <PostFeed />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
