import React, { useEffect, useState } from 'react';

function Agent() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    city: '',
    state: '',
  });
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addOrUpdateTask = () => {
    if (formData.firstName) {
      let updatedTasks;

      if (editingTaskId) {
        updatedTasks = tasks.map(task => 
          task.id === editingTaskId ? { ...task, ...formData } : task
        );
      } else {
        const newTask = { id: Date.now(), ...formData };
        updatedTasks = [...tasks, newTask];
      }

      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      resetForm();
    }
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const editTask = (task) => {
    setFormData(task);
    setEditingTaskId(task.id);
  };

  const resetForm = () => {
    setFormData({ firstName: '', phoneNumber: '', email: '', city: '', state: '' });
    setEditingTaskId(null);
  };

  return (
    <div className="App">
      <h3>Agent Registration</h3>
      <div style={{ maxWidth: '400px', margin: '20px auto 0', display: 'flex', flexDirection: 'column' }}>
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleInputChange} 
          placeholder="First Name" 
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <input 
          type="text" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleInputChange} 
          placeholder="Phone Number" 
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          placeholder="Email" 
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <input 
          type="text" 
          name="city" 
          value={formData.city} 
          onChange={handleInputChange} 
          placeholder="City" 
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <input 
          type="text" 
          name="state" 
          value={formData.state} 
          onChange={handleInputChange} 
          placeholder="State" 
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <button 
          onClick={addOrUpdateTask} 
          style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#4CAF50', color: '#fff', cursor: 'pointer' }}
        >
          {editingTaskId ? 'Update' : 'Save'}
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Phone Number</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>City</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>State</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{task.firstName}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{task.phoneNumber}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{task.email}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{task.city}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{task.state}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <button onClick={() => editTask(task)} style={{ marginRight: '10px' }}>Edit</button>
                  <button onClick={() => removeTask(task.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Agent;
