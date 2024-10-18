import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentPostsData = [
  { id: 1, title: "Introducing Next.js 14", author: "John Doe", avatar: "https://source.unsplash.com/random/100x100?portrait1", date: "2023-11-01" },
  { id: 2, title: "The Future of AI in Web Development", author: "Jane Smith", avatar: "https://source.unsplash.com/random/100x100?portrait2", date: "2023-10-30" },
  { id: 3, title: "Best Practices for React Hooks", author: "Bob Johnson", avatar: "https://source.unsplash.com/random/100x100?portrait3", date: "2023-10-29" },
];

export function RecentPosts() {
  return (
    <div className="space-y-4">
      {recentPostsData.map((post) => (
        <div key={post.id} className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post.avatar} alt={post.author} />
            <AvatarFallback>{post.author.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-medium leading-none">{post.title}</h3>
            <p className="text-sm text-muted-foreground">
              {post.author} • {post.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}