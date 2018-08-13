import React, { Component } from 'react';
//import './.css';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    
 getCrime = async (e) => {
    if(!neighborhoods[neighborhood]){
    	neighborhoods[neighborhood]= {};
      neighborhoods[neighborhood].count = 1;
      neighborhoods[neighborhood].offenses = {};
      neighborhoods[neighborhood].victim_age = {};
    neighborhoods[neighborhood].dayofweek = {};
    neighborhoods[neighborhood].victim_gender= {};
    
  }else{
  	neighborhoods[neighborhood].count ++;
  }
  

  
  if(!neighborhoods[neighborhood].offenses[item.offense]){ 
  	neighborhoods[neighborhood].offenses[item.offense] = 1;
    
    }else{
  	neighborhoods[neighborhood].offenses[item.offense] ++;
  }
  
  
  if(!neighborhoods[neighborhood].victim_age[item.victim_age]){ 
  	neighborhoods[neighborhood].victim_age[item.victim_age] = 1;
    
    }else{
  	neighborhoods[neighborhood].victim_age[item.victim_age] ++;
  }
  
  
    if(!neighborhoods[neighborhood].dayofweek[item.dayofweek]){ 
  	neighborhoods[neighborhood].dayofweek[item.dayofweek] = 1;
    
    }else{
  	neighborhoods[neighborhood].dayofweek[item.dayofweek] ++;
  }
  
  
     if(!neighborhoods[neighborhood].victim_gender[item.victim_gender]){ 
  	neighborhoods[neighborhood].victim_gender[item.victim_gender] = 1;
    
    }else{
  	neighborhoods[neighborhood].victim_gender[item.victim_gender] ++;
  }
  
     
     
           this.setState({
            count: item.count,
            offense: item.offense,
            victim_age: item.victim_age,
            dayofweek: item.main.dayofweek,
            victim_gender: item.victim_gender, 
            error: ""
        });
        

     
  };

    
    componentDidMount(){
        fetch('https://data.cincinnati-oh.gov/resource/ceds-in67.json')
//        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }
    
    
    
    
  render() {
      
      var { isLoaded, items } = this.state;
      
      if(!isLoaded){
          return <div> Loading...</div>
      }
      
    return (
      <div className="App">

        <ul>
        
        {items.map(item => (
            <li key={item}>
                Number of Offenses: {item.count},
                Offense: {item.offense}
                Age: {item.victim_age},
                Day: {item.dayofweek}
                Gender: {item.victim_gender},
            </li>
        ))}
  
  
    
        </ul>
        
      </div>
    );
  }
}

export default App;
