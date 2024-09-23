import { useState } from 'react';


interface Task {
  id: number;
  title: string;
  description: string;
  imgUrl: string;  
}


interface EditTaskProps {
  task: Task;
  onSave: (task: Task) => void;
}

const EditTask = ({ task, onSave }: EditTaskProps) => {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);
  const [imgUrl, setImgUrl] = useState<string>(task.imgUrl); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({ ...task, title, description, imgUrl });  
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="taskDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default EditTask;

