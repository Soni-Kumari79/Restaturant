package com.miniproject.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Items")
public class Items {

	@Id // To create primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto increment 
	private int id;
	private String name;
	private String price;
	private String quality;
	
	private String imageId;

	//DEFAULT CONSTRUCTOR
	public Items() {

	}
	//PARAMERATIZED CONSTRUCTOR
	public Items(String name, String price, String quality, String imageId) {
		super();
		this.name = name;
		this.price = price;
		this.quality = quality;
		this.imageId = imageId;
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

	//TO STRING
	@Override
	public String toString() {
		return "Books [id=" + id + ", name=" + name + ", price=" + price + ", quality=" + quality + ", imageId="
				+ imageId + "]";
	}




}

