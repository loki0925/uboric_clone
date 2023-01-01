package com.masai.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.masai.model.Email;

public interface EmailDAO extends JpaRepository<Email, Integer> {

}
