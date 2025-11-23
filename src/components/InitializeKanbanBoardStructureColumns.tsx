```tsx
// KanbanBoard.tsx
import React from 'react';
import TodoColumn from './TodoColumn';
import InProgressColumn from './InProgressColumn';
import DoneColumn from './DoneColumn';

const KanbanBoard: React.FC = () => {
  const initialTodoTasks = ['Task 1', 'Task 2', 'Task 3'];
  const initialInProgressTasks = ['Task 4', 'Task 5'];
  const initialDoneTasks = ['Task 6'];

  return (
    <div className="flex space-x-4 p-4">
      <TodoColumn tasks={initialTodoTasks} />
      <InProgressColumn tasks={initialInProgressTasks} />
      <DoneColumn tasks={initialDoneTasks} />
    </div>
  );
};

export default KanbanBoard;

// TodoColumn.tsx
import React from 'react';

interface ColumnProps {
  tasks: string[];
}

const TodoColumn: React.FC<ColumnProps> = ({ tasks }) => {
  return (
    <div className="w-80 bg-gray-100 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Todo</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="bg-white p-2 rounded shadow mb-2">{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoColumn;

// InProgressColumn.tsx
import React from 'react';

const InProgressColumn: React.FC<ColumnProps> = ({ tasks }) => {
  return (
    <div className="w-80 bg-gray-100 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">In Progress</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="bg-white p-2 rounded shadow mb-2">{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default InProgressColumn;

// DoneColumn.tsx
import React from 'react';

const DoneColumn: React.FC<ColumnProps> = ({ tasks }) => {
  return (
    <div className="w-80 bg-gray-100 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Done</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="bg-white p-2 rounded shadow mb-2">{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneColumn;
```