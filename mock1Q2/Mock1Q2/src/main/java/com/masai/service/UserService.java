package com.masai.service;

import java.util.List;

import com.masai.exception.UserNotFound;
import com.masai.model.Email;
import com.masai.model.User;

public interface UserService {

    public List<User> getAllUser();
    
    public User createUser(User user);
	
	public User getUserById(Integer userid) throws UserNotFound ;
	
	public String deleteUser(Integer userid) ;
	
	public Email getMainOfUser(User user,Integer userid,Email mail); 
	
	public Email createEmailForUser(User user,Integer userid,Email mail ) ;

}
