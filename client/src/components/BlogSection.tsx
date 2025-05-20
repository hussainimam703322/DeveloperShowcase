import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { BlogPost } from "@shared/schema";
import { fallbackBlogPosts } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/utils";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="bg-white dark:bg-dark-700 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge 
              variant="outline" 
              className={`
                px-3 py-1 rounded-full text-xs font-medium
                ${post.category === 'Tutorial' ? 'bg-secondary-500 bg-opacity-10 text-secondary-500' : ''}
                ${post.category === 'Opinion' ? 'bg-accent-500 bg-opacity-10 text-accent-500' : ''}
                ${post.category === 'Guide' ? 'bg-primary-500 bg-opacity-10 text-primary-500' : ''}
              `}
            >
              {post.category}
            </Badge>
            <span className="text-dark-500 dark:text-dark-400 text-sm">
              {formatDate(post.publishDate)}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white">{post.title}</h3>
          <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">{post.excerpt}</p>
          <a 
            href="#" 
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium flex items-center gap-1"
          >
            Read More 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function BlogSkeleton() {
  return (
    <Card className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-7 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <Skeleton className="h-5 w-28" />
      </CardContent>
    </Card>
  );
}

export default function BlogSection() {
  // Fetch blog posts data
  const { data: posts = [], isLoading, isError } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
    // If API fails, use fallback data
    placeholderData: fallbackBlogPosts,
  });

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest Articles
          </motion.h2>
          <motion.p 
            className="text-lg text-dark-600 dark:text-dark-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Thoughts, tutorials, and insights about development.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {isLoading ? (
            // Show skeletons while loading
            Array(3).fill(0).map((_, index) => (
              <BlogSkeleton key={index} />
            ))
          ) : isError ? (
            // Show error state
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-red-500 dark:text-red-400">Failed to load blog posts. Please try again later.</p>
            </div>
          ) : posts.length === 0 ? (
            // Show empty state
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-dark-600 dark:text-dark-300">No blog posts found.</p>
            </div>
          ) : (
            // Show blog posts
            posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))
          )}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
          >
            View all articles 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
