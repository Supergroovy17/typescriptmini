import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditTask from './EditTask';
import NewTask from './NewTask'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


interface Task {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Task 1',
      description: 'Some representative placeholder content for the first slide.',
      imgUrl: 'https://media.istockphoto.com/id/1353834446/photo/kitchen-house-work.jpg?s=612x612&w=0&k=20&c=Yco6YVNbcBXRQViOSvh7aPVUovo6DgAHQI59psr-LhI=',
    },
  ]);

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  // Handle task edit
  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsCreatingTask(false); 
    console.log("Editing task:", task);
  };

  
  const handleSave = (updatedTask: Task) => {
    if (editingTask) {
     
      setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
      setEditingTask(null);
    } else {
     
      const newTask = {
        ...updatedTask,
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1 
      };
      setTasks([...tasks, newTask]); 
    }
    setIsCreatingTask(false); 
  };

  const handleNewTask = () => {
    setIsCreatingTask(true);
    setEditingTask(null); 
  };

  useEffect(() => {
    const bootstrap = (window as any).bootstrap; // Type assertion
    if (typeof window !== 'undefined' && bootstrap) {
      const carouselElement = document.querySelector('#carouselExampleCaptions');
      if (carouselElement) {
        const carousel = bootstrap.Carousel.getInstance(carouselElement);
        if (carousel) {
          carousel.dispose();
        }
        new bootstrap.Carousel(carouselElement);
      }
    }
  }, [tasks]);

  return (
    <div>
      <div className="container mt-4">
        {editingTask ? (
          <EditTask task={editingTask} onSave={handleSave} />
        ) : isCreatingTask ? (
          <NewTask onSave={handleSave} />
        ) : (
          <>
            <div className="row">
              <div className="col">
                <div className="jumbotron text-center">
                  <p className="lead">
                    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                  </p>
                  <hr className="my-4" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <button className="btn btn-primary btn-lg" onClick={handleNewTask}>
                    New Task
                  </button>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {tasks.map((task, index) => (
                      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={task.id}>
                        <div className="card h-100">
                          <img src={task.imgUrl} className="card-img-top" alt={task.title} />
                          <div className="card-body">
                            <h5 className="card-title">{task.title}</h5>
                            <p className="card-text">{task.description}</p>
                            <button className="btn btn-secondary" onClick={() => handleEdit(task)}>Edit</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;


