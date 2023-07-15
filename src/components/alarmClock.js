import './alarmClock.css';
import React , {useState, useEffect} from 'react';


function AlarmClock() {

    

    // const now = new Date();
    // let hours = now.getHours();
    // let minutes = now.getMinutes();
    // let seconds = now.getSeconds();
  
    // function clockHandle() {
    //   hours = now.getHours();
    //   minutes = now.getMinutes();
    //   seconds = now.getSeconds();
    // }
  
    // setInterval(clockHandle, 1000);


    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds());

    // const [inputValue, setInputValue] = useState();
    const [value , setValue] = useState();
    
    // const [inputValue2, setInputValue2] = useState();

    const [divs, setDivs] = useState([]);



  
    useEffect(() => {
      const intervalID = setInterval(() => {
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes());
        setSeconds(new Date().getSeconds());
      }, 1000);
      return () => clearInterval(intervalID);
    }, []);


    
    // console.log(handleInputChange1);
    // const handleInputChange2 = (e) => {
    //     setInputValue2(e.target.value);
    // }

    const handleAddDiv = () => {
        setDivs ([...divs,
            <h3 className='alarm1 flex justify-center '>
                <input type="text" onChange={(e) => {setValue(e.target.value)}} className='w-[80px] text-[25px] pt-[1px] pb-[1px] pr-[8px] pl-[8px] inputValue'  />
            </h3>
            
        ])
    };
    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value);
        
    // }




    

    if( `${hours}:${minutes}:${seconds}` === `${value}:0`){
        alert("sfsabfdsdfvgs")
    }

    const handleDeleteDiv = () => {
        divs.shift(1);
    };



// alarm logic--------------------------------------------
    

    // function handleAlarm(){
    //         if(`${inputValue1}:${inputValue2}` === `${hours}:${minutes}` ){
    //             alert("your alarm is ringing.Do not dare to stop it!");
    //         }
    // }
      
   

    return(
        <>
         <div className="container-fluid flex justify-center bg-">
            <div className="container-fluid fixed bg-[#E5ECF8] pb-[20px] mainPart mt-[20px]">
                {/* clock-text */}
                <div className="clock-text pb-[30px]">
                    <h2 className="font-medium text-xl ml-[20px] mt-[10px]">Clock</h2>
                </div>


                {/* clock-ui */}
                <div className="h-[250px]">
                    <div className="clock-ui">
                        <div className='clock-ui1'>
                            <div className="hour-hand">
                                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                            </div>
                        </div>
                    </div>
                </div>



                {/* alarm */}
                <div className="alarm">
                    <div className="scroll mb-[10px]">
                        {/* <div>
                            <h3>
                                <div><span className='text-lg'><input type="text"  className='w-[28px] text-[25px]'/> : <input type="text" className='w-[28px] text-[25px]'/></span></div>
                                <label class="toggle-switch">
                                <input type="checkbox"  />
                                <span class="slider"></span>
                                </label>
                            </h3>
                        </div> */}
                        {divs}
                      
                        
                    </div>

                    <div className="add-button">
                        <button onClick={handleAddDiv} className='mr-[10px]'>+</button>
                        <button onClick={handleDeleteDiv}>-</button>

                    </div>
                </div>
            </div>



        </div>

        </>
    )
}

export default AlarmClock;