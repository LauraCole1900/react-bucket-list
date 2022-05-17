import React, { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {

    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list

    // TODO: Set the key:value pairs in the `edit` object back to empty strings

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    // TODO: Add a className of `bucket row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div className={ item.isComplete ? `bucket-row complete ${item.eagerness}` : `bucket-row ${item.eagerness}` } key={index}>

      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
          <p>{item.text}</p>
      </div>
      <div className="icons">
        <p onClick={() => props.editBucketItem(item.id, item.value, item.eagerness)}> ✏️</p>
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
