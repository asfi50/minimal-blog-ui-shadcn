"use client";
import {SinglePost} from "@/components/single-post";
import {CommentsBox} from "@/components/comments-box";

const samplePost = {
  id: 1,
  title: "Jagannath University: Important Notice for All Students",
  content:
    "This is to inform all students of Jagannath University that the upcoming semester exams have been rescheduled. The new dates are as follows:\n\n1. First Year: 10th December 2023\n\n2. Second Year: 12th December 2023\n\n3. Third Year: 14th December 2023\n\n4. Fourth Year: 16th December 2023\n\nPlease make sure to prepare accordingly and reach out to your respective department heads for any further information. We apologize for any inconvenience caused and appreciate your understanding.\n\nThank you.",
  channel: "JNU",
  channelSlug: "test",
  thread: "Notice",
  threadSlug: "test",
  date: "2024-10-01",
  likes: 120,
  comments: 3,
  images: [
    "https://random.imagecdn.app/500/500",
    "https://random.imagecdn.app/501/501",
    "https://random.imagecdn.app/502/502",
    "https://random.imagecdn.app/503/503",
    "https://random.imagecdn.app/504/504",
  ],
};

const sampleComments = [
  {
    id: 1,
    user: "Asfi",
    avatar: "https://random.imagecdn.app/401/401",
    date: "2024-10-01",
    content: "This is a great update! Can't wait to try it out.",
  },
  {
    id: 1,
    user: "Sifat",
    avatar: "https://random.imagecdn.app/402/402",
    date: "2024-10-02",
    content: "This is a great update! Can't wait to try it out.",
  },
  {
    id: 1,
    user: "Jhontu",
    avatar: "https://random.imagecdn.app/403/403",
    date: "2024-10-03",
    content: "This is a great update! Can't wait to try it out.",
  },
];

export default function PostPage({ params }: { params: { id: string } }) {

  return (
    <div className="container mx-auto px-4 py-8">
      
      <SinglePost samplePost={samplePost} />
      <CommentsBox comments={sampleComments} />
     
    </div>
  );
}
