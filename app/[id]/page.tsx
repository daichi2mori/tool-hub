import ItemCard from "@/components/item-card";
import { allItems, items, type ItemType } from "@/data";

export const generateStaticParams = () => {
  return items.map((id) => ({
    id,
  }));
};

const Page = ({
  params: { id },
}: {
  params: {
    id: ItemType;
  };
}) => {
  const currentItems = allItems[id] || [];

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
