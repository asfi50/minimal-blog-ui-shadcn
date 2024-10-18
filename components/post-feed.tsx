import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Bookmark } from "lucide-react";
import Link from "next/link";

const postsData = [
  {
    id: 1,
    title: "Jagannath University Admission Test 2024",
    content:
      "The admission test for the academic year 2023-2024 will be held on 15th November 2023...",
    channel: "JNU",
    thread: "Notice",
    date: "2023-11-01",
    timeAgo: "2 hours ago",
    likes: 120,
    comments: 45,
    images: [
      "https://random.imagecdn.app/500/300",
      "https://random.imagecdn.app/501/301",
      "https://random.imagecdn.app/502/302",
    ],
  },
  {
    id: 2,
    title: "Seminar on Artificial Intelligence",
    content:
      "A seminar on the impact of Artificial Intelligence in modern education will be held on 10th November 2023...",
    channel: "JNU",
    thread: "Notice",
    date: "2023-10-30",
    timeAgo: "5 days ago",
    likes: 89,
    comments: 32,
    images: [
      "https://random.imagecdn.app/503/303",
      "https://random.imagecdn.app/504/304",
      "https://random.imagecdn.app/505/305",
      "https://random.imagecdn.app/506/306",
    ],
  },
  {
    id: 3,
    title: "Workshop on React Development",
    content:
      "Join us for a hands-on workshop on React development techniques on 5th November 2023...",
    channel: "JNU",
    thread: "Notice",
    date: "2023-10-29",
    timeAgo: "6 days ago",
    likes: 156,
    comments: 67,
    images: [
      "https://random.imagecdn.app/507/307",
      "https://random.imagecdn.app/508/308",
      "https://random.imagecdn.app/509/309",
      "https://random.imagecdn.app/510/310",
      "https://random.imagecdn.app/511/311",
      "https://random.imagecdn.app/512/312",
    ],
  },
];

export function PostFeed() {
  return (
    <div className="space-y-6">
      {postsData.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  <Link
                    href={`/channels/test`}
                    className="font-medium text-primary hover:underline"
                  >
                    @{post.channel}
                  </Link>
                  {" / "}
                  <Link
                    href={`/channels/test?thread=${post.thread}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {post.thread}
                  </Link>
                  {" • "}
                  {post.timeAgo}
                </p>
                <h2 className="text-xl font-semibold">
                  <Link href={`/post`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{post.content}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {post.images.slice(0, 5).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Post image ${index + 1}`}
                  className="w-full h-50 object-cover rounded-lg"
                />
              ))}
              {post.images.length > 5 && (
                <div className="relative">
                  <img
                    src={post.images[5]}
                    alt="Post image 6"
                    className="w-full h-50 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <span className="text-white text-xl font-bold">
                      +{post.images.length - 5}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Heart className="mr-2 h-4 w-4" /> {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" /> {post.comments}
              </Button>
            </div>
            <Button variant="ghost" size="sm">
              <Bookmark className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
