package com.miniproject.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.pojo.AddtoFavourites;
import com.miniproject.pojo.AdminLogin;
import com.miniproject.pojo.Cart;
import com.miniproject.pojo.Items;
import com.miniproject.pojo.LoginUser;
import com.miniproject.repository.FavouriteRepository;
import com.miniproject.repository.ItemRepository;
import com.miniproject.repository.UserRepository;
import com.miniproject.service.AdminService;
import com.miniproject.service.ItemService;
import com.miniproject.service.LoginService;

@RestController
@CrossOrigin
public class MainController {

	@Autowired
	private AdminService adminService;
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private FavouriteRepository favouriteRepository;
	
	@Autowired
	private ItemService itemService;
 
	@GetMapping("/adminlogin/{email}/{password}")
	public boolean postLogin(@PathVariable String email,@PathVariable String password) {
		AdminLogin admin=new AdminLogin();
		admin.setEmail(email);
		admin.setPassword(password);
		System.out.println(adminService.loginUser(admin));
		return adminService.loginUser(admin);
	}
 
	@GetMapping("/userlogin/{email}/{password}")
	public boolean postUserLogin(@PathVariable String email,@PathVariable String password) {
		System.out.println("Inside userLogin()");
		LoginUser user=new LoginUser();
		user.setEmail(email);
		user.setPassword(password);
		System.out.println("--------------'''"+loginService.userLogin(user));
		return loginService.userLogin(user);
	}
	
	@RequestMapping("/userlogin")
	public boolean test() {
		System.out.println("Inside userLogin()");
		LoginUser user=new LoginUser();
//		user.setEmail(email);
//		user.setPassword(password);
//		System.out.println("--------------'''"+loginService.userLogin(user));
		return true;
	}
	@PostMapping("/adminregister")
	public String postRegister(@RequestBody AdminLogin user) {
		if(this.adminService.registerData(user)) {
			return "Registered SuccessFully";
		}
		else {
			return "Register Failed";
		}
	}
	@PostMapping("/orderedfood/{email}/{date}")
	public void postAddFav(@PathVariable String email,@PathVariable String date,@RequestBody List<Items> books) {
		System.out.println("Ordered List");
		System.out.println(books);
		
		for(Items added:books) {
			AddtoFavourites addfav=new AddtoFavourites();
			addfav.setName(added.getName());
			addfav.setPrice(added.getPrice());
			addfav.setQuality(added.getQuality());
			addfav.setImageId(added.getImageId());
			addfav.setUser_email(email);
			addfav.setDate(date);
			if(this.adminService.addFav(addfav)) {
				System.out.println("Ordered Data Added");
			}
			else {
				System.out.println("Register Failed");
			}
		}
		
	}

	@GetMapping("/gettodaybill/{date}")
	public List<AddtoFavourites> gettodayBill(@PathVariable String date){
		System.out.println("Date :"+date);
		List<AddtoFavourites> food=favouriteRepository.findAll();
		List<AddtoFavourites> todaysdate=new ArrayList();
		for(AddtoFavourites data:food) {
			if(data.getDate().equals(date)) {
				todaysdate.add(data);
			}
		}
		System.out.println(todaysdate);
		return todaysdate;
	}
	@GetMapping("/getmonthbill/{date}")
	public List<AddtoFavourites> getMonthBill(@PathVariable String date){
	    String[] month = date.split(" ");
		List<AddtoFavourites> food=favouriteRepository.findAll();
		List<AddtoFavourites> todaysdate=new ArrayList();
		for(AddtoFavourites data:food) {
			String[] monthdb = data.getDate().split(" ");
			if(monthdb[1].equals(month[1])) {
				todaysdate.add(data);
			}
		}
		System.out.println(todaysdate);
		return todaysdate;
	}
	
	@Autowired
	public UserRepository userRepository;
	
	@Autowired
	private ItemRepository itemRepository;
	
	@GetMapping("/admindashboard")
	public List<Items> getDashboard() {
		return itemRepository.findAll();
	}

	@GetMapping("/adminuserdashboard")
	public List<LoginUser> getAdminUserDashboard() {
		System.out.println(userRepository.findAll());
		return userRepository.findAll();
	}
	@DeleteMapping("/deleteuser/{id}")
	public boolean getDeleteUser(@PathVariable int id) {
		return adminService.deleteUser(id);
	}
	@DeleteMapping("/deletebook/{id}")
	public boolean getDeleteBook(@PathVariable int id) {
		return adminService.deleteItem(id);
	}
	@GetMapping("/getbyBook/{id}")
	public Items getByBookId(@PathVariable int id) {
		Items books = itemService.getFindByIdValue(id);
		return books;
	}
	@GetMapping("/getbyUser/{id}")
	public LoginUser getByUserId(@PathVariable int id) {
		LoginUser user = userRepository.findById(id);
		return user;
	}
	
	@PostMapping("/editbooks")
	public boolean postEditbook(@RequestBody Items items) {
		if(adminService.updateItem(items)) {
			return true;
		}
		else {
			return false;
		}
	}
	@PostMapping("/edituser")
	public boolean postEditUser(@RequestBody LoginUser loginUser) {
		if(adminService.updateUser(loginUser)) {
			return true;
		}
		else {
			return false;
		}
	}
	@PostMapping("/addbook")
	public boolean addBooks(@RequestBody Items items) {
		return adminService.addItem(items);
	}
	@PostMapping("/adduser")
	public boolean addUser(@RequestBody LoginUser loginUser) {
		return adminService.addUser(loginUser);
	}
	@GetMapping("/getaddedfav/{email}")
	public List<AddtoFavourites> getAddedFavourite(@PathVariable String email){
		return adminService.addedFavourite(email);
	}
	@GetMapping("/getreadlater/{email}")
	public List<Cart> getAddedReadlater(@PathVariable String email){
		return adminService.addedCart(email);
	}
}
