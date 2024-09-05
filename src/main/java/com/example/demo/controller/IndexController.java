package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.entity.Book;
import com.example.demo.repository.BooksRepository;

@Controller
public class IndexController {
	
	@Autowired
	private BooksRepository repository;
	
	@GetMapping("/")
	public String index(Model model) {
		List<Book> books = repository.findAll();
		model.addAttribute("books",books);
		return "index";
	}
}
