import React, { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: 'low',
  });

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value)
    setEdit({
      id: null,
      value: '',
      eagerness: 'low'
    });

  };

  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    <div className={item.isComplete ? `bucket-row complete ${item.eagerness}` : `bucket-row ${item.eagerness}`} key={index}>

      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
        <p>{item.text}</p>
      </div>
      <div className="icons">
        <p onClick={() => setEdit({ id: item.id, value: item.value, eagerness: item.eagerness })}> ✏️</p>
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
