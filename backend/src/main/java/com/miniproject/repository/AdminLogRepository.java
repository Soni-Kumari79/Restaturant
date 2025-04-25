package com.miniproject.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.miniproject.pojo.AdminLogin;

public interface AdminLogRepository extends CrudRepository<AdminLogin, Integer>{
	List<AdminLogin> findAll();
}



