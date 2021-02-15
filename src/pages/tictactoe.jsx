import React, {Component} from "react";
import "./tictactoe.css";
import Button from "../components/button"




class Tictactoe extends Component {

    state ={
        totalbtn : Array(9).fill(""),
        Activeplayer: 'X',
        Winner: '',
        playerXwins: 0,
        playerOwins: 0
    }

     
    render(){


        
        const checkforWinner = () => {
            let tempArray = this.state.totalbtn;
            let count =0 ;
            let possibleWinner;
            if(this.state.Activeplayer === "X"){
                possibleWinner = "O"
            }else if(this.state.Activeplayer === "O"){
                possibleWinner = "X"
            }    
            for( let i =0;i<3;i++){
                
                //checkHorizontaly
                if(tempArray[0+count]!==""){
                   if(tempArray[0+count] == tempArray[1+count] && tempArray[0+count]== tempArray[2+count]){
                       console.log("Winner is: ", possibleWinner);
                       this.setState({ Winner: possibleWinner},()=>{updateScore()},()=>{checkfordraw()})
                   }
               }
               //check vertically
               if(tempArray[0+i]!==""){
               if(tempArray[0+i] == tempArray[3+i] && tempArray[0+i] == tempArray[6+i]){
                console.log("Winner is: ", possibleWinner);
                this.setState({ Winner: possibleWinner},()=>{updateScore()},()=>{checkfordraw()})
               }
            }

            //checkdiagonals
            if(tempArray[4]!==""){
                if(tempArray[0]== tempArray[4] && tempArray[0] == tempArray[8]){
                    console.log("Winner is: ", possibleWinner);
                    this.setState({ Winner: possibleWinner},()=>{updateScore()},()=>{checkfordraw()})
                }
                
                if(tempArray[2]== tempArray[4] && tempArray[2] == tempArray[6]){
                    console.log("Winner is: ", possibleWinner);
                    this.setState({ Winner: possibleWinner},()=>{updateScore()},()=>{checkfordraw()})
                }
            }
            else{
            checkfordraw();

            }


               count+=3;
            }
           

            //checkfordraw();

       }


       const checkfordraw = ()=>{
           let count=0;
           for (let i=0;i<this.state.totalbtn.length;i++) {
               if(this.state.totalbtn[i]!="" && this.state.Winner == "")
               {
                    count++;
               }
           }
           if(count== 9){
               this.setState({Winner:"Draw"})
           }
       }


       const updateScore = () => {
           if (this.state.Winner == "X")
           {
               this.setState({playerXwins: this.state.playerXwins+1})
           }else if (this.state.Winner == "O")
           {
               this.setState({playerOwins: this.state.playerOwins+1})
           }

       }
       const restart = () =>{
           this.setState({
               totalbtn: Array(9).fill(""),
               Winner:'',
               Activeplayer:'X'
           })
       }

        const onClickHandler =  (index) => {
            let tempArray= Array(9).fill("");
            if(this.state.totalbtn[index] === "")
            {
                tempArray = this.state.totalbtn;
                if(this.state.Activeplayer === "X"){
                    tempArray[index] = "X";
                    this.setState({
                        totalbtn: tempArray,
                        Activeplayer:"O"
                    },()=>{checkforWinner()})
                }
                else if(this.state.Activeplayer === "O"){
                    tempArray[index] = "O";
                    this.setState({
                        totalbtn: tempArray,
                        Activeplayer:"X"
                    },()=>{checkforWinner()})
                }                
            }
            checkfordraw();
        }
        

        const gamestatus =()=>{
            if(this.state.Winner === ''){
            return <p>Player {this.state.Activeplayer} Turn</p>
            }
            else if(this.state.Winner !== 'Draw'){
                return<p>{this.state.Winner} Won the Game</p>
            }else{
                return<p>{this.state.Winner}</p>
            }
        }





    return <div className="main">
    
        <div className="playerscontainer">
            <div className="players">
                <div className="p1"style={{boxShadow : this.state.Activeplayer === 'X'? "0 4px 2px -2px #900c3f":''}}> 
                    <p style={{ fontWeight: 650 }}>X</p>
                    <p>{this.state.playerXwins}</p>
                </div>
                <div className="p1"style={{boxShadow : this.state.Activeplayer === 'O'? "0 4px 2px -2px #900c3f":''}}>
                    <p style={{ fontWeight: 650 }}>O</p>
                    <p>{this.state.playerOwins}</p>
                </div>
            </div>
        </div>

        
        <div className="status">
        {gamestatus()}
        </div>

        <div className="gamecontainer">

            <div className="game">
                {
                this.state.totalbtn.map((btn,id) =>{
                   return<div>
                  <div style={{display:"flex",justifyContent:"center"}}>
                     <Button 
                    currentgame = {this.state.totalbtn[id]}
                    key={id} 
                    onClickHandler ={()=>onClickHandler(id)}
                    Winner = {this.state.Winner}
                   />
                    </div>
                   </div>
                })}
               
               

            </div>
        </div>
        <div className="restart">
            <button onClick={restart}>Restart</button>
        </div>

    </div>

            }    
};

export default Tictactoe;