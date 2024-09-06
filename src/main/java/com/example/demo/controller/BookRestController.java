package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Book;
import com.example.demo.repository.BooksRepository;

@RestController
public class BookRestController {
	
	@Autowired
	private BooksRepository bookRepository;
	
	@PostMapping("/api/book/add")
	public Book add(@RequestBody Book book) {
		bookRepository.save(book);
		return book;
	} 
	
	@GetMapping("/api/book/")
	public List<Book> list() {
		return bookRepository.findAll();	
	}
	
	@DeleteMapping("/api/book/delete")
    public ResponseEntity<String> delete(@RequestBody Book book){
			int id = book.id;
			Optional<Book> existingBook = bookRepository.findById(id);
			if(existingBook.isPresent()){
				bookRepository.delete(existingBook.get());
				return ResponseEntity.ok().build();
			}
			return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/api/book/deleteid/{id}")
    public ResponseEntity<String> deleteByInput(@ModelAttribute Integer id){
			Optional<Book> existingBook = bookRepository.findById(id);
			if(existingBook.isPresent()){
				bookRepository.delete(existingBook.get());
				return ResponseEntity.ok().build();
			}
			return ResponseEntity.notFound().build();
	}
	
}