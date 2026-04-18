import React from 'react';

const CreateArea = () => {
    return (
         <div className='mt-5'>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button className='btn btn-accent rounded-full'>Add</button>
      </form>
    </div>
    );
};

export default CreateArea;