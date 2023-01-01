package com.masai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.masai.exception.UserNotFound;
import com.masai.model.User;
import com.masai.service.UserService;

@RestController
@RequestMapping("/userservicer")
public class UserController {

	@Autowired
	private UserService userSer;

	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers() {

		List<User> users = userSer.getAllUser();

		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}

	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) throws UserNotFound {

		return new ResponseEntity<User>(userSer.getUserById(id), HttpStatus.OK);

	}

	@PostMapping("/users")
	public ResponseEntity<User> createBook(@RequestBody User user) {

		return new ResponseEntity<User>(userSer.createUser(user), HttpStatus.OK);

	}

	@DeleteMapping("/books/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") Integer id) {

		return new ResponseEntity<String>(userSer.deleteUser(id), HttpStatus.OK);

	}
}
