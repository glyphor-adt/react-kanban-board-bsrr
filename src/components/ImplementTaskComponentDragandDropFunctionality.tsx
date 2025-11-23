```tsx
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TaskProps {
  id: string;
  title: string;
  index: number;
}

const Task: React.FC<TaskProps> = ({ id, title, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.5 : 1,
          }}
        >
          <Card
            className={cn(
              "shadow-sm hover:shadow-md transition-shadow duration-200",
              "bg-card text-card-foreground",
              "border",
              "border-border",
            )}
          >
            <CardHeader className="p-2">
              <p className="text-sm font-medium">{title}</p>
            </CardHeader>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
```