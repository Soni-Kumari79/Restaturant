package com.miniproject.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.miniproject.pojo.Cart;

public interface CartRepository extends CrudRepository<Cart, Integer>{
	List<Cart> findAll();
}
