package com.miniproject.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.pojo.AddtoFavourites;
import com.miniproject.pojo.AdminLogin;
import com.miniproject.pojo.Cart;
import com.miniproject.pojo.Items;
import com.miniproject.pojo.LoginUser;
import com.miniproject.repository.AdminLogRepository;
import com.miniproject.repository.CartRepository;
import com.miniproject.repository.FavouriteRepository;
import com.miniproject.repository.ItemRepository;
import com.miniproject.repository.UserRepository;

@Service
public class AdminService {
 
	@Autowired
	private FavouriteRepository favouriteRepository;
	
	@Autowired
	private AdminLogRepository adminLogRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ItemRepository itemRepository;
	
	@Autowired
	private CartRepository cartRepository;

	
	public boolean loginUser(AdminLogin user) {
		List<AdminLogin> userdetails=adminLogRepository.findAll();
		System.out.println(user);
		for(AdminLogin users:userdetails) {
			if(users.getEmail().equals(user.getEmail())&& users.getPassword().equals(user.getPassword())) {
				return true;
			}
		}
		return false;	
	}
	public boolean registerData(AdminLogin user) {
		this.adminLogRepository.save(user);
		return true;
	}
	public boolean addFav(AddtoFavourites addfav) {
		this.favouriteRepository.save(addfav);
		return true;
	}
	public boolean addCart(Cart cart) {
		this.cartRepository.save(cart);
		return true;
	}
	public boolean addItem(Items item) {
		this.itemRepository.save(item);
		return true;
	}
	public boolean addUser(LoginUser user) {
		this.userRepository.save(user);
		return true;
	}
	public boolean deleteUser(int id) {
		this.userRepository.deleteById(id);
		System.out.println("deleted...........");
		return true;
	}
	public boolean deleteItem(int id) {
		this.itemRepository.deleteById(id);
		System.out.println("deleted...........");
		return true;
}
	public boolean updateItem(Items items) {
		System.out.println(itemRepository.existsById(items.getId()));
		if (this.itemRepository.existsById(items.getId())) {
			this.itemRepository.save(items);
			return true;
		}
		return false;
	}
	public boolean updateUser(LoginUser loginUser) {
		System.out.println(userRepository.existsById(loginUser.getid()));
		if (this.userRepository.existsById(loginUser.getid())) {
			this.userRepository.save(loginUser);
			return true;
		}
		return false;
	}
	public boolean deleteFav(int id) {
		if (this.favouriteRepository.existsById(id)) {
			this.favouriteRepository.deleteById(id);
			return true;
		}
		return false;
	}
	public boolean deleteLater(int id) {
		if (this.cartRepository.existsById(id)) {
			this.cartRepository.deleteById(id);
			return true;
		}
		return false;
	}
	public List<AddtoFavourites> addedFavourite(String email){
		List<AddtoFavourites> addedfav=favouriteRepository.findAll();
		List<AddtoFavourites> added=new ArrayList<>();
		for(AddtoFavourites list:addedfav) {
			if(list.getUser_email().equals(email)) {
				added.add(list);
			}
		}
		return added;
	}
	public List<Cart> addedCart(String email){
		List<Cart> addedfav=cartRepository.findAll();
		List<Cart> added=new ArrayList<>();
		for(Cart list:addedfav) {
			if(list.getUser_email().equals(email)) {
				added.add(list);
			}
		}
		return added;
	}
	
}
