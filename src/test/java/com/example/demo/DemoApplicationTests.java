package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.controller.BookController;
import com.example.demo.controller.IndexController;
import com.example.demo.entity.Book;


@SpringBootTest
class DemoApplicationTests {
	
	@Autowired
	private BookController bookController;

	@Autowired
	private IndexController indexController;
	

	Book bookTest = new Book(1, "test", "test", "test");

	

	@Test
	void contextLoads() throws Exception{
		
		assertThat(indexController).isNotNull();
	}

	
//	@Test
//	void indexTest() throws Exception{
//		Model model = null;
//		assertThat(indexController.index(model)).isNotNull();
//	}
	
	@Test
	void addBookTest() throws Exception{
		assertThat(bookController.add(bookTest)).isNotNull();
	}
	
	@Test
	void deleteBookTest() throws Exception{
	assertThat(bookController.deleteByInput(bookTest)).isNotNull();
	}

}
