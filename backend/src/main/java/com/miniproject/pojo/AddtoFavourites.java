package com.miniproject.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="addlist")
public class AddtoFavourites {

	@Id // To create primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto increment 
	private int id;
	private String name;
	private String price;
	private String quality;
	private String imageId;
	private String user_email;
	private String date;
	//DEFAULT CONSTRUCTOR
	public AddtoFavourites() {
		
	}
	
	
	//PARAMERATIZED CONSTRUCTOR
	

	public AddtoFavourites(String name, String price, String quality, String imageId,String date) {
		super();
		this.name = name;
		this.price = price;
		this.quality = quality;
		this.imageId = imageId;
		this.date=date;
	}


	
	

	//GETTER AND SETTER
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getQuality() {
		return quality;
	}
	public void setQuality(String quality) {
		this.quality = quality;
	}
	public String getImageId() {
		return imageId;
	}
	public void setImageId(String imageId) {
		this.imageId = imageId;
	}
	
	

	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public String getUser_email() {
		return user_email;
	}


	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}


	//TO STRING
	@Override
	public String toString() {
		return "AddtoFavourites [id=" + id + ", name=" + name + ", price=" + price + ", quality=" + quality
				+ ", imageId=" + imageId + ", user_email=" + user_email + ", date=" + date + "]";
	}

	


	
}
