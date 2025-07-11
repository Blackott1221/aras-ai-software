import { ColumnDef } from "@tanstack/react-table";
import { SquarePen, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from '@/i18n/routing';
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

export type DataProps = {
  id: string | number;
  product: {
    name: string;
    image: string;
  };
  category: string;
  seller: string;
  stock: number;
  info: {
    soldItems: number;
    basePrice: string;
    ratings: number;
  };
  published: boolean;
  action: React.ReactNode;
};
export const columns: ColumnDef<DataProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="bg-default-100"
      />
    ),
    cell: ({ row }) => (
      <div className="xl:w-16">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="bg-default-100"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
      const product = row.original.product;
      return (
        <div className="font-medium text-card-foreground/80">
          <div className="flex gap-3 items-center">
            <Image
              src={product.image}
              alt=""
              height={32}
              width={32}
              className=" w-8 h-8"
            />

            <span className="text-sm text-default-600">
              {product?.name ?? "Unknown User"}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <span>{row.getValue("category")}</span>,
  },
  {
    accessorKey: "info",
    header: "Info",
    cell: ({ row }) => {
      const info = row.original.info;
      return (
        <div className="font-medium text-card-foreground/80">
          <div className="flex gap-3 items-center">
            <p>
              <span>No of sale:</span> {info?.soldItems}
              <br />
              <span>Base Price:</span> {info?.basePrice}
              <br />
              <span>Rating:</span> {info?.ratings}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => <span>{row.getValue("stock")}</span>,
  },
  {
    accessorKey: "seller",
    header: "Seller",
    cell: ({ row }) => {
      return <span>{row.getValue("seller")}</span>;
    },
  },
  {
    accessorKey: "published",
    header: "Published",
    cell: ({ row }) => {
      const published = row.original.published;
      return <Switch color="success" />;
    },
  },
  {
    id: "actions",
    accessorKey: "action",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <Link
            href="/utility/invoice/preview/1"
            className="flex items-center p-2 border-b text-info hover:text-info-foreground bg-info/40 hover:bg-info duration-200 transition-all rounded-full"
          >
            <SquarePen className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-destructive bg-destructive/40 duration-200 transition-all hover:bg-destructive/80 hover:text-destructive-foreground rounded-full"
          >
            <Trash2 className="w-4 h-4" />
          </Link>
        </div>
      );
    },
  },
];
