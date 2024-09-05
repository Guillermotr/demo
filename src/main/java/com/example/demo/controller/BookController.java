package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.entity.Book;
import com.example.demo.repository.BooksRepository;

@Controller
public class BookController {
	
	@Autowired
	private BooksRepository repository;
		
	@PostMapping("/book/add")
	public String add(@ModelAttribute Book book) {
		repository.save(book);
		return "redirect:/";
	}
	
}
