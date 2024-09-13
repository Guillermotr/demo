package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.controller.BookRestController;
import com.example.demo.entity.Book;

@SpringBootTest
public class BookRestControlTests {

	
	@Autowired
	private BookRestController bookRestController;
	
	Book bookTest = new Book(1, "test", "test", "test");
	
	
	@Test
	void contextLoads() throws Exception{
		assertThat(bookRestController).isNotNull();
	
	}
	
	@Test
	void list() throws Exception{
		assertThat(bookRestController.list()).isNotNull();
	
	}
	
	@Test
	void addRestBook1() throws Exception{
		assertThat(bookRestController.add(bookTest)).isNotNull();
	}
	
	@Test
	void deleteRestBook() throws Exception{
		assertThat(bookRestController.delete(bookTest)).isNotNull();
	}
	
	@Test
	void deleteByInputRestBook() throws Exception{
		assertThat(bookRestController.deleteByInput(bookTest.id)).isNotNull();
	}
	
}
