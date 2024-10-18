import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Comment {
  id: number;
  user: string;
  avatar: string;
  date: string;
  content: string;
}

const CommentsBox: React.FC<{ comments: Comment[] }> = ({ comments }) => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <h2 className="text-xl font-semibold">Comments</h2>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 mb-4">
                    <img
                        src="https://random.imagecdn.app/404/404"
                        alt="User avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                        <textarea
                            placeholder="Write a comment..."
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
                        />
                        <div className="mt-2 flex justify-between items-center">
                            <label className="flex items-center space-x-2">
                                <Checkbox />
                                <span className="text-sm">Post anonymously</span>
                            </label>
                            <Button variant="default">Post Comment</Button>
                        </div>
                    </div>
                </div>
                {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4 mb-4 p-4 gap-4">
                        <img
                            src={comment.avatar}
                            alt={`${comment.user} avatar`}
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-semibold">{comment.user}</h3>
                                <span className="text-xs text-muted-foreground">
                                    {comment.date}
                                </span>
                            </div>
                            <p className="text-sm">{comment.content}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

CommentsBox.displayName = "CommentsBox";

export { CommentsBox };
