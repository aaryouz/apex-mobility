import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How easy is it to get started?",
      answer: "Getting started with YourSaaS is simple. Sign up for an account, and you can be up and running in minutes. Our intuitive interface and step-by-step guides make it easy to set up your workspace, even if you're not technically inclined."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Absolutely! YourSaaS integrates seamlessly with all major business tools and platforms including Slack, Google Workspace, Microsoft 365, Salesforce, and many more. If you use a custom tool, our API makes it easy to build your own integrations."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. YourSaaS uses bank-level encryption for all data, both in transit and at rest. We're compliant with GDPR, HIPAA, SOC 2, and ISO 27001, and undergo regular third-party security audits."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 support via chat, email, and phone for all customers on our Professional and Enterprise plans. Our comprehensive knowledge base and community forum are available to all users. We also provide personalized onboarding for new customers."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features become available immediately. When downgrading, the changes take effect at the start of your next billing cycle."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features on our Professional plan. No credit card is required to start your trial. At the end of your trial, you can choose the plan that best fits your needs."
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to know about YourSaaS and how it can help your business.
          </p>
        </div>
        <div className="mt-10 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
