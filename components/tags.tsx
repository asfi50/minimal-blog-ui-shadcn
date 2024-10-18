"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Crown } from "lucide-react";

const initialTagsData = [
  {
    id: 1,
    name: "Notice",
    count: 1200,
    slug: "test",
    subscribers: 300,
    subscribed: true,
    premium: false,
  },
  {
    id: 2,
    name: "News",
    count: 980,
    slug: "test",
    subscribers: 450,
    subscribed: false,
    premium: true,
  },
  {
    id: 3,
    name: "Education",
    count: 850,
    slug: "test",
    subscribers: 600,
    subscribed: true,
    premium: false,
  },
  {
    id: 4,
    name: "Technology",
    count: 720,
    slug: "test",
    subscribers: 800,
    subscribed: false,
    premium: true,
  },
  {
    id: 5,
    name: "Health",
    count: 680,
    slug: "test",
    subscribers: 500,
    subscribed: true,
    premium: false,
  },
  {
    id: 6,
    name: "Science",
    count: 550,
    slug: "test",
    subscribers: 400,
    subscribed: true,
    premium: true,
  },
  {
    id: 7,
    name: "Sports",
    count: 510,
    slug: "test",
    subscribers: 350,
    subscribed: true,
    premium: false,
  },
  {
    id: 8,
    name: "Entertainment",
    count: 490,
    slug: "test",
    subscribers: 700,
    subscribed: false,
    premium: true,
  },
];

export function Tags() {
  // Duplicate tags data to simulate a larger list
  const duplicateTagsData = Array.from({ length: 10 }, (_, i) =>
    initialTagsData.map((tag) => ({ ...tag, id: tag.id + i * 8 }))
  ).flat();

  const [tagsData, setTagsData] = useState(duplicateTagsData);

  const handleSubscribe = (id: number) => {
    setTagsData((prevTags) =>
      prevTags.map((tag) =>
        tag.id === id ? { ...tag, subscribed: !tag.subscribed } : tag
      )
    );
  };

  return (
    <div className="flex flex-wrap gap-4">
      {tagsData.map((tag) => (
        <div key={tag.id} className="flex items-center space-x-2">
          <Link href={`/tags/${tag.slug}`}>
            <Badge
              variant="secondary"
              className={`text-lg py-2 px-4 cursor-pointer transition-colors duration-300 ${
              tag.subscribed
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary hover:text-primary-foreground"
              }`}
              onClick={() => handleSubscribe(tag.id)}
            >
              #{tag.name} ({tag.count})
              {tag.premium && <Crown className="ml-2" />}
            </Badge>
          </Link>
        </div>
      ))}
    </div>
  );
}
