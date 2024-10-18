import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Bookmark, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


interface SamplePost {
  channelSlug: string;
  channel: string;
  threadSlug: string;
  thread: string;
  title: string;
  date: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
}

interface SinglePostProps {
  samplePost: SamplePost;
}

const SinglePost: React.FC<SinglePostProps> = ({ samplePost }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4 mb-4">
          <Link
            href={`/channels/${samplePost.channelSlug}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            @{samplePost.channel}
          </Link>
          <span>/</span>
          <Link
            href={`/threads/${samplePost.threadSlug}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            {samplePost.thread}
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-2">{samplePost.title}</h1>
        <p className="text-sm text-muted-foreground">
          Posted on {samplePost.date}
        </p>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none mb-6">
          {samplePost.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {samplePost.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Post image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" onClick={handleLike}>
            <Heart
              className={`mr-2 h-4 w-4 ${
                liked ? "fill-current text-red-500" : ""
              }`}
            />
            {samplePost.likes + (liked ? 1 : 0)}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" /> {samplePost.comments}
          </Button>
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" onClick={handleBookmark}>
            <Bookmark
              className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`}
            />
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export { SinglePost };
