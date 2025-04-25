package com.miniproject.service;

import java.util.List;

import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.pojo.AddtoFavourites;
import com.miniproject.pojo.Cart;
import com.miniproject.pojo.LoginUser;
import com.miniproject.repository.CartRepository;
import com.miniproject.repository.FavouriteRepository;
import com.miniproject.repository.UserRepository;

@Service
public class LoginService {

	@Autowired
	public UserRepository userRepository;



	public boolean userLogin(LoginUser user) {
		List<LoginUser> userdetails=userRepository.findAll();
		System.out.println(userdetails);
		for(LoginUser users:userdetails) {
			if(users.getEmail().equals(user.getEmail()) && users.getPassword().equals(user.getPassword())) {
				return true;
				//System.out.println("User login");
			}
		}
		return false;	
	}

	public boolean registerData(LoginUser user) {
		this.userRepository.save(user);
		return true;
	}
	
	
	@Autowired
	public FavouriteRepository favouriteRepository;
	
	public boolean favRegister(AddtoFavourites addfav) {
		this.favouriteRepository.save(addfav);
		return true;
	}
	
	@Autowired
	public CartRepository readLaterRepository;
	
	public boolean readLaterRegister(Cart cart) {
		this.readLaterRepository.save(cart);
		return true;
	}
}
