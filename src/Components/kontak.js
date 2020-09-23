import React from 'react';

class Kontak extends React.Component{
    render(){
        return(
            <div className="hallo">
            <div className="card col-sm-6 mx-auto m-5">
            <div className="card-header text-center">
                <h4>Contact Me</h4>
              </div>
              <div className="card-body">
                  <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Nama</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Pesan</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <button type="submit" class="btn btn-dark">Submit</button>
                  </form>
              </div>
            </div>
            </div>
        );
    }
}

export default Kontak;