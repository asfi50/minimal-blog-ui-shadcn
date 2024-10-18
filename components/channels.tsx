import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const channelsData = [
  {
    id: 1,
    name: "University of Dhaka",
    slug: "test",
    subscribers: 12000,
    logo: "https://random.imagecdn.app/500/500?dhaka",
    description: "The oldest university in Bangladesh.",
    premium: true,
  },
  {
    id: 2,
    name: "Bangladesh University of Engineering and Technology",
    slug: "test",
    subscribers: 9800,
    logo: "https://random.imagecdn.app/500/500?buet",
    description: "The top engineering university in Bangladesh.",
    premium: false,
  },
  {
    id: 3,
    name: "Jahangirnagar University",
    slug: "test",
    subscribers: 7500,
    logo: "https://random.imagecdn.app/500/500?jahangirnagar",
    description: "A public university located in Savar, Dhaka.",
    premium: false,
  },
  {
    id: 4,
    name: "North South University",
    slug: "test",
    subscribers: 6200,
    logo: "https://random.imagecdn.app/500/500?nsu",
    description: "The first private university in Bangladesh.",
    premium: true,
  },
  {
    id: 5,
    name: "Jagannath University",
    slug: "test",
    subscribers: 5500,
    logo: "https://random.imagecdn.app/500/500?jagannath",
    description: "A public university in Sadarghat, Dhaka.",
    premium: false,
  },
];

export function Channels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {channelsData.map((channel) => (
      <Card key={channel.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <CardHeader className="flex flex-col items-center gap-4 p-4">
      <Link href={`/channels/${channel.slug}`}>
        <Avatar className="w-24 h-24">
        <AvatarImage src={channel.logo} alt={channel.name} />
        <AvatarFallback>{channel.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="text-center">
        <Link href={`/channels/${channel.slug}`}>
        <CardTitle className="text-xl font-semibold">{channel.name}</CardTitle>
        </Link>
        <CardDescription className="text-gray-500">
        {channel.subscribers.toLocaleString()} subscribers
        </CardDescription>
        {channel.premium && <Badge className="mt-2">Premium</Badge>}
      </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex items-end justify-center">
        <p className="text-gray-300 text-center">{channel.description}</p>
      </CardContent>
      <div className="p-4">
        <Button variant="default" className="mt-4 w-full">Subscribe</Button>
      </div>
      </Card>
      ))}
    </div>
  );
}
