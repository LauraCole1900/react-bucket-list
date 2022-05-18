import React, { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState(props.edit?.text || '');
  const [eagerness, setEagerness] = useState(props.edit?.eagerness || 'low');
  const eagernessLevel = ['high', 'medium', 'low']

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,
    });
    setInput('');
    setEagerness('low');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };


  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.text}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.text}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
