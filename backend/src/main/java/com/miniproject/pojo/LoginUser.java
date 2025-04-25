package com.miniproject.pojo;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userdata")
public class LoginUser {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto increment 
	private int userID;
	private String firstname;
	private String lastname;// To create primary key
	private String email;
	private String phone;
	private String password;
	private String confirm_password;
	
	//DEFAULT CONSTRUCTOR
	public LoginUser() {
		
	}
	
	//PARAMERATIZED CONSTRUCTOR
	
	public LoginUser(String firstname, String lastname, String email, String phone, String password,
			String confirm_password) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.confirm_password = confirm_password;
	}


	//GETTER AND SETTER

	
	
	public int getid() {
		return userID;
	}

	public void setid(int userID) {
		this.userID = userID;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirm_password() {
		return confirm_password;
	}

	public void setConfirm_password(String confirm_password) {
		this.confirm_password = confirm_password;
	}

	//TO STRING
	@Override
	public String toString() {
		return "LoginUser [userID=" + userID + ", firstname=" + firstname + ", lastname=" + lastname + ", email="
				+ email + ", phone=" + phone + ", password=" + password + ", confirm_password=" + confirm_password + "]";
	}
	
	
	
}
