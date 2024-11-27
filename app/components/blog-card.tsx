import Button from "./button";
import { ArrowRight } from "./icons/arrow-right";
import { Tag } from "./tag";


export const BlogCard = () => {
  return (
    <div className="max-w-[340px] bg-white rounded-lg shadow-blog-card overflow-hidden mt-[120px]">
      <img src="/spacejoy-YqFz7UMm8qE-unsplash.jpg" alt="Blog Card" className="h-[288px] object-cover w-full" />
      <div className="px-6 py-4">
        <Tag label="Interior" />
        <div className="text-lg text-neutral-900 font-semibold mt-2 mb-3">
          Top 5 Living Room Inspirations
        </div>
        <div className="text-neutral-600 text-base mb-6">
          Curated vibrants colors for your living, make it pop & calm in the same time.
        </div>
        <Button>
          Read more
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
