package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Book;

public interface BooksRepository extends JpaRepository<Book, Integer> {
	Book findByName(String name);
}
