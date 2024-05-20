import ItemCard from "@/components/item-card";
import { allItems } from "@/data";

const Page = () => {
  return (
    <div className="flex-1 bg-muted/30">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allItems["illustrations"].map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
