
import React, {Component} from 'react';
import ReactTable from "react-table"
import 'react-table/react-table.css'
import './App.css';

class App extends Component {
  
constructor( props )
{
 
super(props);
this.state = {
  inputNumber: ""
  }
}
handleGenPrime = (event) => {
  inputNumberOfPrime = this.state.inputNumber;
  this.setState({hasEnteredValue:true})
  
}
handleInputChange = (event) =>{
this.setState({[event.target.name]: event.target.value})
}

render(){
  const hasEnteredValue = this.state.hasEnteredValue;
 const {inputNumber: data} =this.state
 const columns =[{
   Header:"Prime Table",
   columns:[ 
     {
   Header:'Numbers',
   accessor: 'number',
   width: 300,
  },
  {
    Header:'Prime Number',
    accessor: 'prime',
    width: 300,
   },
   {
    Header:'NonPrime',
    accessor: 'nonPrime',
    width: 300,
   }
  
]}
]
return(
  <div  className="App" >
    <header className="App-header">
     <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '1vh'}}>
       Prime Table</h1>
       <input  style={{width: "350px", height: "50px", fontSize:"30px" }} type="number" input='center' placeholder="Please Enter a Number" name = 'inputNumber' onChange={this.handleInputChange.bind(this)} /> 
      <p style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '1vh'}}>Your number is: {data}</p>
     <p style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '0vh'}}><button onClick ={this.handleGenPrime}>Generate Prime Number </button></p>
   </header>
   <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>

{hasEnteredValue ?(
  <ReactTable  data = {generatePrime(inputNumberOfPrime)}
    columns={columns}
    width = {600}/>
) :(
  <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '0vh'}}>Please Enter A Number In The Text Box </h1>
)}
</div>
  </div>
 
      );
  }
 
}
// improvements this should be in another class/file 
function PrimeNumber (num,pNum,nonPNum) {
  this.number = num;
 this.prime = pNum;
 this.nonPrime = nonPNum;
};


var inputNumberOfPrime;

var isPrime = function(num) {
  if (num <= 1) return false;
  if (num < 4) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (var i=5; i*i <= num; i=i+6) {
    if (num % i === 0 || num % (i+2) === 0)
    return false;
  }
  return true;
};

var generatePrime = function(n) {
  const primes = [];

  var i = 1;
  while (primes.length < n) {
    if (isPrime(i))
    { 
    const  primeNum = new PrimeNumber(i,i,"");
      primes.push(primeNum);
      console.log(primeNum);
    }
    else
    {
      const primeNum = new PrimeNumber(i,"",i);
      primes.push(primeNum);

    }
    i++;
  }
  return primes;
};

export default App;
