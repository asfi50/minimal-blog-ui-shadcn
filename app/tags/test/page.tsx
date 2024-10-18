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
import { PostFeed } from "@/components/post-feed";

const tagData = {
  id: 1,
  name: "Notice",
  slug: "notice",
  subscribers: 12000,
  logo: "https://random.imagecdn.app/500/500?dhaka",
  description: "Notice of all organizations.",
  premium: true,
};

export default function ChannelPage() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader className="flex justify-between p-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={tagData.logo} alt={tagData.name} />
              <AvatarFallback>{tagData.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                #{tagData.name}
                {tagData.premium && <Badge className="mt-2">Premium</Badge>}
              </CardTitle>
              <CardDescription className="text-gray-500">
                {tagData.subscribers.toLocaleString()} subscribers
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
              {tagData.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
      <PostFeed/>
    </div>
  );
}