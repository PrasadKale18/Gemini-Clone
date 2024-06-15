import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.pkgemini} alt="" />
        </div>
        <div className="main-container">

            {
                !showResult
                ?<>
                <div className="greet">
                <p><span>Hello, Prasad</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Provide questions to help me prepare for an interview</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Brainstorm presentation ideas about a topic</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>What are tips to improve public speaking skills?</p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                    <p>Create a futuristic image of a car</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.pkgemini} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {
                            loading
                            ?<div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                </div>
            }


            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img src={assets.send_icon} alt="" onClick={()=>onSent()}/>:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main