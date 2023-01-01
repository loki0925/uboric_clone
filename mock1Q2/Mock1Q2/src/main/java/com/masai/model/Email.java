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
public class Email {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int mail_id;
	
	private String email;
	
	private Date created_date;
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
}
