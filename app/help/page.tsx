"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  HelpCircle,
  CreditCard,
  Users,
  Settings,
  ShieldCheck,
  Mail,
} from "lucide-react";
import { useState } from "react";

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <HelpCircle className="h-5 w-5" />,
      questions: [
        {
          q: "How do I create an account?",
          a: "To create an account, click the 'Sign Up' button in the top right corner. Fill in your email, create a password, and follow the verification steps sent to your email.",
        },
        {
          q: "What are the system requirements?",
          a: "Our platform works on all modern web browsers (Chrome, Firefox, Safari, Edge). We recommend keeping your browser updated to the latest version for the best experience.",
        },
        {
          q: "How do I reset my password?",
          a: "Click the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password.",
        },
      ],
    },
    {
      title: "Billing & Payments",
      icon: <CreditCard className="h-5 w-5" />,
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers in select regions.",
        },
        {
          q: "How do I cancel my subscription?",
          a: "Go to Settings > Billing > Subscription and click 'Cancel Subscription'. You'll continue to have access until the end of your billing period.",
        },
        {
          q: "Can I get a refund?",
          a: "Yes, we offer refunds within 30 days of purchase. Contact our support team with your order details to process the refund.",
        },
      ],
    },
    {
      title: "Account Management",
      icon: <Users className="h-5 w-5" />,
      questions: [
        {
          q: "How do I update my profile?",
          a: "Navigate to Settings > Profile to update your personal information, profile picture, and notification preferences.",
        },
        {
          q: "Can I change my username?",
          a: "Yes, you can change your username once every 30 days. Go to Settings > Profile > Username to make the change.",
        },
      ],
    },
    {
      title: "Security",
      icon: <ShieldCheck className="h-5 w-5" />,
      questions: [
        {
          q: "How do I enable two-factor authentication?",
          a: "Go to Settings > Security > Two-Factor Authentication and follow the setup instructions. We recommend using an authenticator app.",
        },
        {
          q: "What should I do if I notice suspicious activity?",
          a: "Immediately change your password and contact our support team. We'll help secure your account and investigate any unauthorized access.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-muted-foreground mb-6">
          Find answers to commonly asked questions or contact our support team
        </p>
        <div className="max-w-md mx-auto">
          <Input
            type="search"
            placeholder="Search FAQ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Need more help? Our support team is available 24/7.</p>
            <p className="mt-2 text-muted-foreground">
              Email: support@janun.com
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Quick Setup Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>New to our platform? Check out our quick setup guide.</p>
            <p className="mt-2 text-muted-foreground">
              Learn the basics in under 5 minutes
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {filteredCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {category.icon}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${faqIndex}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;