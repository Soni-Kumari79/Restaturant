package com.miniproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.pojo.Items;
import com.miniproject.repository.ItemRepository;

@Service
public class ItemService {

	@Autowired
	private ItemRepository itemRepository;
	

	public Items getFindByIdValue(int id) {
		return itemRepository.findById(id);
	}

	public boolean registerBookData(Items user) {
		this.itemRepository.save(user);
		return true;
	}
	
	
	public Items getbookbyid(int id) {
		return itemRepository.findById(id);
	}
}
