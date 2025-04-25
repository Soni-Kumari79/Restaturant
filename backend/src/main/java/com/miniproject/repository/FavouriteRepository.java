package com.miniproject.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.miniproject.pojo.AddtoFavourites;



public interface FavouriteRepository  extends CrudRepository<AddtoFavourites, Integer>{
	List<AddtoFavourites> findAll();
}
