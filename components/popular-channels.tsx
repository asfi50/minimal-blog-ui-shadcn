import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const popularChannelsData = [
  { id: 1, name: "University of Dhaka", slug: "test", subscribers: 12000, logo: "https://random.imagecdn.app/500/500?dhaka" },
  { id: 2, name: "Bangladesh University of Engineering and Technology", slug: "test", subscribers: 9800, logo: "https://random.imagecdn.app/500/500?buet" },
  { id: 3, name: "Jahangirnagar University", slug: "test", subscribers: 7500, logo: "https://random.imagecdn.app/500/500?jahangirnagar" },
  { id: 4, name: "North South University", slug: "test", subscribers: 6200, logo: "https://random.imagecdn.app/500/500?nsu" },
  { id: 5, name: "Jagannath University", slug: "test", subscribers: 5500, logo: "https://random.imagecdn.app/500/500?jagannath" },
];

export function PopularChannels() {
  return (
    <div className="space-y-4">
      {popularChannelsData.map((channel) => (
        <Link href={`/channels/${channel.slug}`} key={channel.id}>
          <div className="flex items-center space-x-4 hover:bg-accent rounded-lg p-2 transition-colors duration-300">
            <Avatar>
              <AvatarImage src={channel.logo} alt={channel.name} />
              <AvatarFallback>{channel.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-medium leading-none">{channel.name}</h3>
              <p className="text-sm text-muted-foreground">{channel.subscribers} subscribers</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}