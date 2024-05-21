import ItemCard from "@/components/item-card";
import { allCategory } from "@/data/categories";
import { allItems } from "@/data/items";
import type { Categories } from "@/types";

export const generateStaticParams = () => {
  return allCategory.map((category) => ({
    id: category.id,
  }));
};

const Page = ({
  params: { id },
}: {
  params: {
    id: Categories;
  };
}) => {
  const currentItems = allItems.filter((item) => item.category === id);

  if (currentItems.length === 0) {
    return <p className="text-sm text-muted-foreground my-10">このページは存在しません</p>;
  }

  return (
    <div className="flex-1 bg-muted/30">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-4">
        {currentItems.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
