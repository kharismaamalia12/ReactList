import React from 'react';

class Karya extends React.Component{
    render(){
        return(
            <div>
                <div className="card">
                    <div className="card-header">
                        KARYAKU
                    </div>
                    <div className="card-body">
                        <h5 className="card-tittle">Filter Instagram</h5>
                        <p className="card-text">@rismaply</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-tittle">Desaign Poster dan Logo</h5>
                        <p className="card-text">Adobe Photoshop dan CorelDraw</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Karya;