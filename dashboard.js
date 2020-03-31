import React from 'react';
import './App.css';
import './style.css';




function Dashboard() {
  return (
    <div className="App">
      <div className="container-fluid">
       <div className="row">
          <div className="col-md-2" id="aside">
              <h4 className="display-4">PhoneBook Express</h4>
              <hr></hr>
              <div className="container-fluid">
                  <div className="row">
                    <div className="col-4" id="icons">
                      <img src="/imgs/create.png" alt="createContact" id="items" />
                    </div>
                    <p>Create Contact</p>
                    
                  </div>
                  <hr></hr>

                  <div className="row">
                    <div className="col-4" id="icons">
                      <img src="/imgs/view.png" alt="createContact" id="items" />
                    </div>
                    <p>View Contact</p>
                    
                  </div>
                  <hr></hr>
              </div>
          </div>
          <div className="col-md-9" id="cover">
          <img src="/imgs/book.jpg" alt="bg_image" id="book" />
          </div>
       </div>
      </div>
        
    </div>
  );
}

export default Dashboard ;
