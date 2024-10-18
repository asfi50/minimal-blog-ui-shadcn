"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    MessageSquare,
    Hash,
    User,
    AlertCircle,
    Clock,
    CheckCircle2,
    XCircle,
    MessageCircle,
    Tag,
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Sample data
const reports = [
    {
        id: 1,
        type: "channel",
        title: "Inappropriate Channel Name",
        reason: "Violates community guidelines",
        reportedItem: "gaming-talks",
        reportedBy: "john_doe",
        dateReported: "2024-03-15T10:30:00",
        status: "pending",
        lastUpdated: "2024-03-15T10:30:00",
    },
    {
        id: 2,
        type: "thread",
        title: "Spam Thread",
        reason: "Multiple promotional posts",
        reportedItem: "Thread #1234",
        reportedBy: "jane_smith",
        dateReported: "2024-03-14T15:45:00",
        status: "resolved",
        lastUpdated: "2024-03-15T09:20:00",
    },
    {
        id: 3,
        type: "post",
        title: "Hate Speech",
        reason: "Discriminatory content",
        reportedItem: "Post #5678",
        reportedBy: "moderator_1",
        dateReported: "2024-03-13T08:15:00",
        status: "rejected",
        lastUpdated: "2024-03-14T11:30:00",
    },
    {
        id: 4,
        type: "tag",
        title: "Inappropriate Tag",
        reason: "NSFW content",
        reportedItem: "#inappropriate",
        reportedBy: "user123",
        dateReported: "2024-03-12T14:20:00",
        status: "resolved",
        lastUpdated: "2024-03-13T16:45:00",
    },
    {
        id: 5,
        type: "user",
        title: "Harassing Behavior",
        reason: "Multiple instances of harassment",
        reportedItem: "@toxic_user",
        reportedBy: "safety_team",
        dateReported: "2024-03-11T09:10:00",
        status: "pending",
        lastUpdated: "2024-03-11T09:10:00",
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case "resolved":
            return "bg-green-100 text-green-800";
        case "pending":
            return "bg-yellow-100 text-yellow-800";
        case "rejected":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};

const getTypeIcon = (type: string) => {
    switch (type) {
        case "channel":
            return <MessageSquare className="h-4 w-4" />;
        case "thread":
            return <MessageCircle className="h-4 w-4" />;
        case "post":
            return <AlertCircle className="h-4 w-4" />;
        case "tag":
            return <Tag className="h-4 w-4" />;
        case "user":
            return <User className="h-4 w-4" />;
        default:
            return <Hash className="h-4 w-4" />;
    }
};

const getStatusIcon = (status: string) => {
    switch (status) {
        case "resolved":
            return <CheckCircle2 className="h-4 w-4 text-green-600" />;
        case "pending":
            return <Clock className="h-4 w-4 text-yellow-600" />;
        case "rejected":
            return <XCircle className="h-4 w-4 text-red-600" />;
        default:
            return null;
    }
};

export default function ReportPage() {
    const [selectedType, setSelectedType] = useState<string>("all");
    const [currentStatus, setCurrentStatus] = useState<string>("all");

    const filteredReports = reports.filter((report) => {
        const typeMatch = selectedType === "all" || report.type === selectedType;
        const statusMatch = currentStatus === "all" || report.status === currentStatus;
        return typeMatch && statusMatch;
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">My Reports</h1>
                <p className="text-gray-500">Track you reports</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="channel">Channel</SelectItem>
                        <SelectItem value="thread">Thread</SelectItem>
                        <SelectItem value="post">Post</SelectItem>
                        <SelectItem value="tag">Tag</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                </Select>

                <Tabs defaultValue="all" className="w-full" value={currentStatus} onValueChange={setCurrentStatus}>
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                        <TabsTrigger value="resolved">Resolved</TabsTrigger>
                        <TabsTrigger value="rejected">Rejected</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {filteredReports.map((report) => (
                    <Card key={report.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div className="flex items-center space-x-2">
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    {getTypeIcon(report.type)}
                                    {report.type}
                                </Badge>
                                <Badge className={`${getStatusColor(report.status)} flex items-center gap-1`}>
                                    {getStatusIcon(report.status)}
                                    {report.status}
                                </Badge>
                            </div>
                            <div className="text-sm text-gray-500">
                                ID: #{report.id}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold text-lg">{report.title}</h3>
                                    <p className="text-sm text-gray-500">{report.reason}</p>
                                </div>
                                <div className="space-y-1 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Reported Item:</span>
                                        <span className="font-medium">{report.reportedItem}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Reported By:</span>
                                        <span className="font-medium">{report.reportedBy}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Date Reported:</span>
                                        <span className="font-medium">
                                            {new Date(report.dateReported).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Last Updated:</span>
                                        <span className="font-medium">
                                            {new Date(report.lastUpdated).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}