const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      priority: ["teal", "low"],
      content: "make an omlete",
    },
    "task-2": {
      id: "task-2",
      priority: ["red", "high"],
      content: "do homework",
    },
    "task-3": {
      id: "task-3",
      priority: ["purple", "medium"],
      content: "build a component",
    },
    "task-4": {
      id: "task-4",
      priority: ["red", "high"],
      content: "render an app",
    },
    "task-5": {
      id: "task-5",
      priority: ["teal", "low"],
      content: "make an omlete",
    },
    "task-6": {
      id: "task-6",
      priority: ["red", "high"],
      content: "do homework",
    },
    "task-7": {
      id: "task-7",
      priority: ["purple", "medium"],
      content: "build a component",
    },
    "task-8": {
      id: "task-8",
      priority: ["red", "high"],
      content: "render an app",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "to-do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "done",
      taskIds: ["task-5", "task-6", "task-7", "task-8"],
    },
  },
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
