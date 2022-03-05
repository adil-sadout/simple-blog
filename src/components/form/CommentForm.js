import React from 'react'
import {useState, useContext} from 'react'
import {setDoc, deleteDoc, doc} from "firebase/firestore"
import {siteContext} from "../../context/AppContext"
import { v4 as uuidv4 } from 'uuid';


function CommentForm({currentArticle}) {



    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const {db, comments, setComments} = useContext(siteContext);


    const createComment = async (e)=>{
        e.preventDefault();
        const newID = uuidv4();
        
        if(username !== "" && comment !==""){
          try{
  
            e.preventDefault();
  
            await setDoc(doc(db, "comments", `${newID}`), {
                username,
                comment,
                articleId: currentArticle.id
            });
  
            setComments([...comments,{
                username,
                comment,
                articleId: currentArticle.id
            }])
  
          }catch(err){
            console.log(err)
          }
        }else{
          alert("Make sure to include your username & comment first!")
        }
      }


      

  return (
    <div className='border-top text-start pt-5'>
      <form className='w-100'>
          <p className='display-6'>Comments</p>
        <div className="mb-3">
          <input type="text" placeholder='Username'  maxLength="60" className="form-control" required id="inputTitle" value={username} onChange={(e)=>setUsername(e.target.value) } />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder='Start writing...' id="textareaContent" required value={comment} onChange={(e)=>setComment(e.target.value) }  />
        </div>
        <button onClick={createComment} type="submit" className="btn btn-success">Comment</button>
      </form>
    </div>
  )
}

export default CommentForm