"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Loader2 } from "lucide-react";
import { Post } from "@/app/types";
import { PostFeed } from "@/components/post-feed";


const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState(queryParam);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);


  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!debouncedQuery) {
        setPosts([]);
        return;
      }

      setIsLoading(true);
      try {
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        
        const mockResults: Post[] = [
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
        ];

        setPosts(mockResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
        // Handle error appropriately
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [debouncedQuery]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Search Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <Button type="submit">Search</Button>
            </div>

            {queryParam && (
              <div className="text-sm text-muted-foreground">
                Showing results for: <span className="font-medium">{queryParam}</span>
              </div>
            )}
          </form>

          <div className="mt-8">
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : posts.length > 0 ? (
              <PostFeed/>
            ) : queryParam ? (
              <div className="text-center py-8 text-muted-foreground">
                No results found for "{queryParam}"
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Enter a search term to find posts
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchPage;