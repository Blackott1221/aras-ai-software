import { cn } from "@/lib/utils";
const ExternalDraggingevent = ({ event }: any) => {
  const { title, id, tag } = event;

  return (
    <div
      title={title}
      data-id={id}
      className="fc-event  px-4 py-1.5 bg-default-100 dark:bg-default-300  rounded text-sm flex  items-center gap-2 shadow-xs  cursor-move" >
      <span
        className={cn("h-2 w-2 rounded-full block", {
          "bg-primary": tag === "business",
          "bg-warning": tag === "meeting",
          "bg-destructive": tag === "holiday",
          "bg-info": tag === "etc",
        })}
      ></span>
      <span className="text-sm font-medium text-default-900">{title}</span>
    </div>
  );
};

export default ExternalDraggingevent;
