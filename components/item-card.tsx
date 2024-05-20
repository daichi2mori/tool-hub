import { Item } from "@/types/items";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ id, title, tags, href }: Item) => {
  const { publicRuntimeConfig } = getConfig();
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";

  return (
    <div className="aspect-video relative p-4 border rounded-md shadow-sm bg-card hover:shadow-lg transition duration-300">
      <div className="aspect-video overflow-hidden relative border mb-2 rounded">
        <Image fill objectFit="cover" src={`/${id}.avif`} alt="" />
      </div>
      <h2 className="text-sm font-semibold">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="flex flex-wrap relative z-10 mt-2 gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/tool-hub/${tag.id}`}
            className="border whitespace-nowrap text-muted-foreground bg-muted rounded text-xs px-1.5 py-1"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
