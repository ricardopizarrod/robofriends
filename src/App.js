/* import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css'; 


class App  extends Component{
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })
        
     }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.oneSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}
 
export default App;   */

import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import scroll from './Scroll';
import { robots } from './robots';

class App extends Component{
	constructor() { 
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

    componentDiMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({ robots: users}));
    }

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		
	}

	render () {
        const { robots, searchfield } = this.state;
		const filteredRobots = this.state.robots.filter( robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
            return !robots.length?
                <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1>RoboFiends</h1>
                 <SearchBox searchChange={this.onSearchChange} />
                    <scroll>
                    <   CardList robots={filteredRobots}/>
                    </scroll>
                </div>
            );    
		
    }
}
	



export default App;