import { useState } from 'react';

// Define the Task interface
interface Task {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

interface NewTaskProps {
  onSave: (task: Task) => void;
}

const NewTask = ({ onSave }: NewTaskProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imgUrl, setImgUrl] = useState<string>(''); // Empty for a new task

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: Task = {
      id: Math.random(), // Generate a unique ID for the new task (use better logic in a real app)
      title,
      description,
      imgUrl,
    };
    onSave(newTask); // Pass the new task to the parent component
    setTitle(''); // Reset fields after save
    setDescription('');
    setImgUrl('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="taskTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="taskDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskImgUrl" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="taskImgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Task</button>
      </form>
    </div>
  );
};

export default NewTask;
