import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const popularTagsData = [
  { id: 1, name: "Notice", count: 1200, slug: "test" },
  { id: 2, name: "News", count: 980, slug: "test" },
  { id: 3, name: "Education", count: 850, slug: "test" },
  { id: 4, name: "Technology", count: 720, slug: "test" },
  { id: 5, name: "Health", count: 680, slug: "test" },
  { id: 6, name: "Science", count: 550, slug: "test" },
  { id: 7, name: "Sports", count: 510, slug: "test" },
  { id: 8, name: "Entertainment", count: 490, slug: "test" },
];

export function PopularTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {popularTagsData.map((tag) => (
        <Link href={`/tags/${tag.slug}`} key={tag.id}>
          <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors duration-300">
            #{tag.name} ({tag.count})
          </Badge>
        </Link>
      ))}
    </div>
  );
}