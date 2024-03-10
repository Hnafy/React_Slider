import { useState } from "react";
import img1 from "./img/avatar.jpg"
import img2 from "./img/image.jpg"
import img3 from "./img/logo.jpg"
import img4 from "./img/post.jpg"

export default function Content() {
    const [count ,setCount] = useState(1)
    let counter = count
    let [show,setShow] = useState(1)
    let arrLi = []
    for(let i=1;i<=4;i++){
        arrLi.push(<li onClick={()=>{setCount(i);setShow(i)}} className={show===i?"countActive":""} key={i} style={{cursor:"pointer",padding:"5px"}}>{i}</li>)
    }
    return (
        <>
            <div>
                <div
                    style={{
                        width: "500px",
                        padding: "20px",
                        margin: "10px auto",
                        border: "2px solid #000",
                        borderRadius: "4px",
                        position:"relative",
                    }}
                >
                    <div style={{position:"absolute",top:"10px",backgroundColor:"#777",padding:"15px 10px",borderRadius:"4px",color:"white"}}>
                        #Slider {counter}
                    </div>
                    <div style={{display:"flex",width:"100%",height:"450px",overflow:"hidden",transition:".3s"}}>
                        {counter===1 &&
                            <img src={img1} alt="img" style={{width:"100%"}}/>
                        }
                        {counter===2 &&
                            <img src={img2} alt="img" style={{width:"100%"}}/>
                        }
                        {counter===3 &&
                            <img src={img3} alt="img" style={{width:"100%"}}/>
                        }
                        {counter===4 &&
                            <img src={img4} alt="img" style={{width:"100%"}}/>
                        }
                    </div>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}}>
                    <button onClick={()=>{if(1<count){
                        setCount(counter-=1)
                        setShow(show-=1)
                        }else{
                            setCount(counter)
                            setShow(show)
                        }}} className="handleBtn">Prevent</button>
                    <ul style={{display:"flex",listStyle:"none",gap:"15px"}}>
                        {arrLi}
                    </ul>
                    <button onClick={()=>{if(count<4){
                        setCount(counter+=1)
                        setShow(show+=1)
                        }else{
                            setCount(counter)
                            setShow(show)
                        }}} className="handleBtn">Next</button>
                    </div>
                </div>
            </div>
        </>
    );
}
