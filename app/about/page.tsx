"use client";

import { Pacifico } from "next/font/google";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className={`text-4xl font-bold ${pacifico.className}`}>Janun!</h1>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          Sometimes, we need updates from websites about exam results, tender
          notices, job openings, etc., and we constantly check these websites
          for days to stay updated. This is a common issue because most
          government and public institution websites lack notification features.
          This is where our app, Janun, comes into play. Janun is a web app that
          connects users with various public websites in Bangladesh, such as
          government websites, law courts, universities, and more. Users can
          connect to different public sites, subscribe to various topics, and
          receive notifications through channels like email, push notifications,
          SMS, and more.
          <br /> <br />
          Janun is not just a news aggregator; it has its own scraping system
          and crawlers that extract content from different sources, post it,
          analyze it, and notify users about news and updates. Janun will
          feature a recommendation system that suggests posts based on user
          activity (subscriptions, reactions, comments, etc.). It will feel like
          a social media platform where users can follow different websites,
          react to, and comment on content. Additionally, users will be able to
          view AI-generated weekly and monthly reports on what is happening in
          the country. With a wealth of content from public websites, the
          possibilities are endless.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          Our mission is to bridge the gap between users and essential public
          information by providing timely and accurate updates from various
          public websites in Bangladesh. We aim to empower users with a reliable
          notification system, ensuring they stay informed about important
          events and updates without the hassle of constant manual checking.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg">
          Our team is composed of talented and dedicated professionals who are
          committed to excellence.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <img
            src="https://random.imagecdn.app/600/400?dhaka"
            alt="Dhaka Office"
            className="rounded-lg shadow-lg w-full md:w-1/2 mb-4 md:mb-0"
          />
          <form className="w-full md:w-1/2 md:ml-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg shadow-sm"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <Button variant="default" className="w-full">
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <footer className="text-center mt-8">
        <p className="text-lg">&copy; 2024 Janun. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
