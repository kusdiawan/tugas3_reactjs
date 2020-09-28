import React, { Component } from "react";
import ListMakanan from './../ListData/ListMakanan';

class MenuMakanan extends Component{
	constructor(props){
		super(props)
		this.state={
			pesan : 0
		};

		this.rubahPesanan = this.rubahPesanan.bind(this);
		this.pesan = this.pesan.bind(this);
	}

	rubahPesanan(e){
		e.preventDefault();
		var tampungData = this.state.pesan + 1;
		this.setState((state, props) => ({
				pesan: tampungData
			}));
	}

	pesan(e){
		e.preventDefault()
		console.log(e.target.value)
	}

	render(){
		return(
		<div align="center">
		<h3>Daftar Makanan yang Kami Sediakan : </h3>
		<table>
			<tbody>
			   <tr>
			      <td align="center">
			        <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
			        <button onClick={(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
			      </td>
			   
			      <td align="center">
			        <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
			        <button onClick={(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
			      </td>

			      <td align="center">
			        <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
			        <button onClick={(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
			      </td>

				  <td align="center">
			        <ListMakanan gambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
			        <button onClick={(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
			      </td>

  				  <td align="center">
			        <ListMakanan gambar="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg" />
			        <button onClick={(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
			      </td>
			   </tr>
			</tbody>
		</table> 
		<br />
		<input type="text" onChange={(e) => this.pesanan(e)} />
		<h3>Pesanan Anda : {this.state.pesan}</h3>

		</div>

		)
	}
}

export default MenuMakanan;