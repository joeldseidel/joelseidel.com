const InitialCardData = {
    tasks: {
        "task-0": {
            id: "task-0",
            title: "Find his website",
        },
        "task-1": {
            id: "task-1",
            title: "Meet Joel Seidel",
        },
        "task-2": {
            id: "task-2",
            title: "Meet his dog",
        },
        "task-3": {
            id: "task-3",
            title: "View his resume",
        },
        "task-4": {
            id: "task-4",
            title: "Contact Joel"
        }
    },
    columns: {
        "todo": {
            id: "todo",
            title: "To-Do",
            taskIds: ["task-1", "task-2", "task-3", "task-4"]
        },
        "inprogress": {
            id: "inprogress",
            title: "In Progress",
            taskIds: []
        },
        "done": {
            id: "done",
            title: "Done",
            taskIds: ["task-0"]
        }
    },
    columnOrder: ["todo", "inprogress", "done"]
}

export default InitialCardData;