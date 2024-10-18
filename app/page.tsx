import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { PostFeed } from "@/components/post-feed";
import { PopularChannels } from "@/components/popular-channels";
import { PopularTags } from "@/components/popular-tags";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <PostFeed />
        </div>
        <div className="hidden md:block space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Popular Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <PopularChannels />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <PopularTags />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}