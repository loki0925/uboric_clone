package com.masai.model;

import java.util.Date;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String name;
	
	private String phoneNo;
	
	private Date dateOfBirth;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Email email;
}
