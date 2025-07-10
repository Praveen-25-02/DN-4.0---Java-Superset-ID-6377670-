package com.example.spring_rest_hands_on_ex5;

import com.example.spring_rest_hands_on_ex5.Product;
import com.example.spring_rest_hands_on_ex5.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository repo;

    public ProductController(ProductRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return repo.save(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Product> getProduct(@PathVariable Long id) {
        return repo.findById(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updated) {
        return repo.findById(id)
                .map(p -> {
                    p.setName(updated.getName());
                    p.setPrice(updated.getPrice());
                    return repo.save(p);
                })
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
