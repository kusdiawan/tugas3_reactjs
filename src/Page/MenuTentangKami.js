import React, { Component } from "react";

class MenuTentangKami extends Component{
	constructor(props){
		super(props);
				this.state = {
					tentang : 'Warung Nusantara adalah Restoran yang bernuansa Makanan Nusantara. Kami ada untuk membuat Anda Menikmati Makanan Khas dari nusantara ',
				}
	}

render(){
	return(
 	<div>
      <center>
        <p>Tentang Kami </p> {this.state.tentang}
      </center>
 	</div>
	)
}
}

export default MenuTentangKami;