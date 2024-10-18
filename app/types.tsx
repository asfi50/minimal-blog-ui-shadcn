export type Profile = {
    name: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    occupation: string;
    joinDate: string;
    avatarUrl: string;
    timezone: string;
};

export type Post = {
    id: number;
    title: string;
    content: string;
    channel: string;
    thread: string;
    date: string;
    timeAgo: string;
    likes: number;
    comments: number;
    images: string[];
};