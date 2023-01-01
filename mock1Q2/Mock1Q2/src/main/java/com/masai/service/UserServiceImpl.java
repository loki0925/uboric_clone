package com.masai.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.masai.exception.UserNotFound;
import com.masai.model.Email;
import com.masai.model.User;
import com.masai.repository.EmailDAO;
import com.masai.repository.UserDAO;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO UserDao; 
	
	@Autowired
	private EmailDAO mailDao; 
	
	
	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		
		List<User> users = UserDao.findAll();

		return users;
	}

	@Override
	public User createUser(User user) {
		// TODO Auto-generated method stub
		return UserDao.save(user);
	}

	@Override
	public User getUserById(Integer userid) throws UserNotFound {
		// TODO Auto-generated method stub
		Optional<User> user = UserDao.findById(userid);

		return user.orElseThrow(() -> new UserNotFound("No User records found"));
	}

	@Override
	public String deleteUser(Integer userid) {
		// TODO Auto-generated method stub
		Optional<User> book = UserDao.findById(userid);

		UserDao.delete(book.get());

		return "Book deleted succefully with ID" + userid;
	}

	@Override
	public Email getMainOfUser(User user, Integer userid, Email mail) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Email createEmailForUser(User user, Integer userid, Email mail) {
		// TODO Auto-generated method stub
		Optional<User> a = null;
		try {
			a = UserDao.findById(userid);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		 
			return mailDao.save(a.get().setEmail(mail));
	}

}
