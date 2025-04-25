package com.miniproject.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

import com.miniproject.pojo.Items;

public interface ItemRepository extends CrudRepository<Items, Integer>{

	List<Items> findAll();

	Items findById(int id);
}
