import {useState, useContext} from 'react'
import {setDoc, doc} from "firebase/firestore"
import {siteContext} from "../../context/AppContext"
import { v4 as uuidv4 } from 'uuid';

function CreateArticle({redirect}) {

    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const {db, user, setAllArticles, allArticles} = useContext(siteContext);

    
    const createPost = async (e)=>{
      const newID = uuidv4();
        try{

          e.preventDefault();

          await setDoc(doc(db, "articles", `${newID}`), {
            title,
              article,
              author: {
                email: user.email,
                id: user.uid,
              }
          });

          setAllArticles([...allArticles,{
            title,
              article,
              author: {
                email: user.email,
                id: user.uid,
              }
              ,
              id:newID
          }])
          redirect("/")

        }catch(err){
          console.log(err)
        }
        
        
    }
    

  return (
    <div className='d-flex h-100 flex-column justify-content-center align-items-center mx-auto w-75 py-5'>
      <form className='w-100'>
          <p className='display-6 text-center'>Create an article</p>
        <div className="mb-3">
          <input type="text" placeholder='Add title'  maxLength="60" className="form-control" id="inputTitle" value={title} onChange={(e)=>setTitle(e.target.value) } />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder='Start writing...' id="textareaContent" value={article} onChange={(e)=>setArticle(e.target.value) }  />
        </div>
        <button onClick={createPost} type="submit" className="btn btn-success">Create Article</button>
      </form>
    </div>
  )
}

export default CreateArticle