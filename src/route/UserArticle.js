import {useState, useContext} from 'react'
import Modal from 'react-bootstrap/Modal'
import {updateDoc, doc} from "firebase/firestore"
import {siteContext} from "../context/AppContext"

function UserArticle({post, deleteArticle}) {

    const{db, allArticles, setAllArticles, user} = useContext(siteContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newTitle, setNewTitle] = useState(post.title);
    const [newArticle, setNewArticle] = useState(post.article);
    const articleRef = doc(db, "articles", `${post.id}`);

    const updatePost = async ()=>{

        
        
        try{
          
          await updateDoc(articleRef, {
            title: newTitle,
            article: newArticle
          });

          const newProjects = allArticles.map(p =>
            p.id === post.id
              ? { ...p, title: newTitle, article:newArticle}
              : p
          );
          setAllArticles(newProjects)

        }catch(err){
          console.error(err);
        }
        
    }


  return (
                <div className='d-flex justify-content-between align-items-center my-2 '>
                    <p className='mx-1 fs-1 w-75'>{post?.title}</p>
                    <div className='w-25'>
                      <button className='btn p-0 btn-warning m-1 w-100' variant="primary" onClick={handleShow}>Edit</button>
                      <Modal size="lg" show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                          <Modal.Title className='w-75'>
                            <input type="text" className='form-control' defaultValue={post.title} onChange={((e)=>setNewTitle(e.target.value))} />
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <textarea rows="10" className='w-100' defaultValue={post.article} onChange={((e)=>setNewArticle(e.target.value))} ></textarea>
                        </Modal.Body>
                        <Modal.Footer>
                          <button className='btn btn-danger' variant="secondary" onClick={handleClose}>
                            Close
                          </button>
                          <button className='btn btn-success' variant="primary" onClick={(e)=>{
                            e.preventDefault();
                            updatePost()
                            handleClose()
                          }}>
                            Save Changes
                          </button>
                        </Modal.Footer>
                      </Modal>
                      <button onClick={() => {
                        deleteArticle(post?.id)
                      }} className='btn p-0 btn-danger m-1 w-100'>X</button>
                    </div>
                    
                </div>
  )
}

export default UserArticle