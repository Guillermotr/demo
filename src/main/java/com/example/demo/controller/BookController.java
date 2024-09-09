package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.entity.Book;
import com.example.demo.repository.BooksRepository;


@Controller
public class BookController {
	
	@Autowired
	private BooksRepository bookRepository;
		
	@PostMapping("/book/add")
	public String add(@ModelAttribute Book book) {
		bookRepository.save(book);
		return "redirect:/";
	}
	
	@PostMapping("/book/deleteById")
	public String deleteByInput(@ModelAttribute Book book) {
		Optional<Book> existingBook = bookRepository.findById(book.getId());
		if(existingBook.isPresent())
			bookRepository.delete(book);
	
			return "redirect:/";
	}
}
