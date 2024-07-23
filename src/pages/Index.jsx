import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, Zap, Shield, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">SaaSify</div>
          <div className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">About</Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-16 px-4">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Simplify Your Workflow</h1>
          <p className="text-xl text-gray-600 mb-8">Boost productivity and streamline your business processes with our powerful SaaS solution.</p>
          <Button size="lg" className="mr-4">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-yellow-500" />}
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency in your daily tasks."
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-green-500" />}
            title="Secure & Reliable"
            description="Your data is protected with state-of-the-art security measures."
          />
          <FeatureCard
            icon={<CheckCircle className="w-12 h-12 text-blue-500" />}
            title="Easy to Use"
            description="Intuitive interface designed for users of all skill levels."
          />
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <div className="flex justify-center space-x-8">
            <img src="/placeholder.svg" alt="Company 1" className="mx-auto object-cover w-32 h-16" />
            <img src="/placeholder.svg" alt="Company 2" className="mx-auto object-cover w-32 h-16" />
            <img src="/placeholder.svg" alt="Company 3" className="mx-auto object-cover w-32 h-16" />
            <img src="/placeholder.svg" alt="Company 4" className="mx-auto object-cover w-32 h-16" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard number={1} title="Sign Up" description="Create your account in minutes." />
            <StepCard number={2} title="Customize" description="Set up your workspace to fit your needs." />
            <StepCard number={3} title="Collaborate" description="Invite your team and start working together." />
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied customers and transform your business today.</p>
          <Button size="lg">Start Your Free Trial <ArrowRight className="ml-2" /></Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 SaaSify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <div className="mb-4">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const StepCard = ({ number, title, description }) => (
  <Card>
    <CardHeader>
      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

export default LandingPage;