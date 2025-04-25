package com.miniproject.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.miniproject.pojo.LoginUser;

public interface UserRepository extends CrudRepository<LoginUser, Integer>{
	List<LoginUser> findAll();
	
	LoginUser findByEmail(String email);
	
	LoginUser findById(int id);
}
