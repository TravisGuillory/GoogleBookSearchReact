import React from 'react';
import './styles.css';


const Jumbotron = () => {   

    return (
        <div className="container ">
            <div className="jumbotron">
                <h1>Google Book Search</h1> 
                <div className="col text-center list-container">
                    <ul >
                        <li>Search Google's API for a book volume.</li>
                        <li>Select a title for individual view.</li>  
                        <li>Add a volume to your reading list.</li>
                        <li>Delete titles from your reading list.</li>
                    </ul> 
                </div>
            </div>
        </div>
            
        
    )

}
export default Jumbotron;