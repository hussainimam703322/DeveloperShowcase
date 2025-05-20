import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { contactFormSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { developerInfo } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    }
  });

  function onSubmit(data: InsertContact) {
    mutate(data);
  }

  return (
    <section id="contact" className="py-20 bg-dark-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white">Get In Touch</h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary-500 text-white p-8">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-white mt-1"><Mail className="h-5 w-5" /></div>
                      <div>
                        <p className="text-white/80 text-sm mb-1">Email</p>
                        <a 
                          href={`mailto:${developerInfo.email}`}
                          className="text-white hover:text-white/90 transition-colors"
                        >
                          {developerInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-white mt-1"><MapPin className="h-5 w-5" /></div>
                      <div>
                        <p className="text-white/80 text-sm mb-1">Location</p>
                        <p className="text-white">{developerInfo.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-white mt-1"><Clock className="h-5 w-5" /></div>
                      <div>
                        <p className="text-white/80 text-sm mb-1">Availability</p>
                        <p className="text-white">{developerInfo.availability}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h4 className="text-white/90 text-sm font-medium mb-4">Connect on social media</h4>
                    <div className="flex space-x-4">
                      <a 
                        href={developerInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={developerInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href={developerInfo.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="text-primary-500 dark:text-primary-400 mb-4">
                        <svg
                          className="h-16 w-16 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-dark-600 dark:text-dark-300 mb-6">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-dark-700 dark:text-dark-300">Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your name" 
                                    className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-dark-700 dark:text-dark-300">Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="your@email.com" 
                                    className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-dark-700 dark:text-dark-300">Subject</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="What's this about?" 
                                  className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-dark-700 dark:text-dark-300">Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell me about your project..." 
                                  className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white"
                                  rows={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="submit" 
                          disabled={isPending}
                          className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow w-full md:w-auto"
                        >
                          {isPending ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
