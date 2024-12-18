import React from 'react';           // Step 1: to  load the libraries/modules
import ReactDOM from 'react-dom'
 
class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <MainContent/>
                
                
            </div>
        )
    }
}
 
class Header extends React.Component{
    render(){
        return(            
            <h1> Welcome to Shopify </h1>
        )
    }
}

class MainContent extends React.Component{
    render(){
        return(
            <div>                
                <p>Welcome to Shopify, where beauty meets tradition. We are passionate about bringing you the finest selection of cosmetics and ethnic wear that celebrate individuality and cultural heritage. Our curated collections feature high-quality beauty products designed to enhance your natural allure and a diverse range of ethnic attire that embodies elegance and tradition. Whether you're preparing for a special occasion or looking to express your unique style, [Your Store Name] is your go-to destination for all things beautiful. Join us in exploring a world where modern beauty and timeless traditions blend seamlessly.</p>
                <h3>Cosmetics</h3>
                <ul>
                    <li>Lipstick</li>
                    <li>Foundation</li>
                    <li>Nailpolish</li>
                    <li>Powder</li>
                </ul>

                <h3>Ethnic Wear</h3>
                <ul>
                    <li>Kurti</li>
                    <li>Dhoti</li>
                    <li>Saree</li>
                    <li>Salwar</li>
                </ul>

                <Cosmetics name="Cosmetics" />
                <EthnicWear startingprice="1000" maxprice="9000" pagename="Shopify" />
            </div>
        )
    }
}

class Cosmetics extends React.Component{
    render(){
        return(
            <div>
                <h2>This is my {this.props.name} Page</h2>
                <p>
                    Below are the list of project items we are selling:
                </p>
                <ul>
                    <ListItem name="Lipstick"/>
                    <ListItem name="Foundation"/>
                    <ListItem name="Nailpolish"/>
                    <ListItem name="Powder"/>
                </ul>
                <p>We also have more brands in this:</p>
                <ul>
                    <ListItem name="Nyke"/>
                    <ListItem name="Forest Essentials"/>
                </ul>
            </div>
        )
    }
}

class EthnicWear extends React.Component{
    render(){
        return(
            <div>
                <h2>Ethnic Wear</h2>                
                <p>We also have more brands in this:</p>
                <ul>
                    <ListItem name="Pantaloons"/>
                    <ListItem name="Country Inn"/>
                </ul>
                <h3>About</h3>
                <p>About text goes here</p>
                <br/>
                We have price ranging from {this.props.startingprice} to {this.props.maxprice}

                <br/><br/>

                This <b>{this.props.pagename}</b> you can also search in the mobile app
            </div>
        )
    }
}

class ListItem extends React.Component{
    render(){
        return(
            <li>{this.props.name}</li>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))