import React from 'react';
function FrontPage(){
    return(
        <>
            <div>
                <h1>Tervetuloa smart salonkiin!</h1>
                <p>frontpage placeholder</p>
            </div>
            <footer style={{"display":"block","bottom":"0","position":"absolute","left":"32%"}}>
                <img src="./salo.jpg" height="100px"></img>
                <img src="./utu.jpg" height="100px"></img>
                <img src="./lounea.jpg" height="100px"></img>
            </footer>
        </>
    );
}
export default FrontPage;