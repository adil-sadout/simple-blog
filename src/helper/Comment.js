import React from 'react'
import { deleteDoc, doc} from 'firebase/firestore';

function Comment({comm, comments, setComments, db}) {
/*
    const deleteComment = async (id)=>{
        const commentsDoc = doc(db, "comments", `${id}`);
        await deleteDoc(commentsDoc);
        const filteredList = comments.filter(comment => comment?.id !==id )
        setComments(filteredList)
      }

*/

  return (
    <div className='text-start  d-flex justify-content-between align-items-center border-top'>
        <div className='flex-column'>
            <p className='display-6'>{comm?.username} said:</p>
            <p className='fs-4'>{comm?.comment}</p>
        </div>
    </div>
  )
}

export default Comment