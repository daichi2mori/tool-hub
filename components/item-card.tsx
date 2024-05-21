import { getTagLabel } from "@/lib/utils";
import { Item } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ id, title, tags, href }: Item) => {
  return (
    <div className="p-4 border rounded-md shadow-sm hover:shadow-lg bg-card dark:hover:bg-accent transition duration-500">
      <Link href={href} target="_blank">
        <div className="aspect-video overflow-hidden relative border mb-2 rounded">
          <Image fill className="object-cover" src={`/tool-hub/${id}.avif`} alt="" />
        </div>
        <h2 className="text-sm font-semibold">{title}</h2>
        <div className="flex flex-wrap relative z-10 mt-2 gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border whitespace-nowrap text-muted-foreground bg-muted rounded text-xs px-1.5 py-1"
            >
              {getTagLabel(tag)}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
