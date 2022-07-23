import {useState} from 'react';

function AddTask({onAdd}) {
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    const [reminder, setReminder] = useState(true);

    // Handle onsubmit
    const handleSubmit = (e) => {   
        e.preventDefault();
        onAdd({text, time, reminder});
        if(!text){
            alert("Please enter a text");
        }

        onAdd({text, time, reminder});
        setText('');
        setTime('');
        setReminder(true);
    }
    return ( 
        <form className="add-form" onSubmit={handleSubmit}>
            {text}
            {time}
            {reminder}
            <div className="form-control">
                <label>
                    Set Text
                </label>
                <input
                    type="text" 
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>
                    Time
                </label>
                <input
                    type="text" 
                    placeholder='Add Time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>
                    Reminder
                </label>
                <input
                    type="checkbox" 
                    placeholder='Check'
                    checked={reminder}
                    value= {reminder}
                    onChange={(e) => setReminder(e.target.checked)}
                />
            </div>
            <input type="submit" value="Add Task" className='btn btn-block'/>
        </form>
     );
}

export default AddTask;