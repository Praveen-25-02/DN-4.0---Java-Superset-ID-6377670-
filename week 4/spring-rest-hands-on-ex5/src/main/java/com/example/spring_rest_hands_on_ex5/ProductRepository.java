package com.example.spring_rest_hands_on_ex5;

import com.example.spring_rest_hands_on_ex5.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {}
