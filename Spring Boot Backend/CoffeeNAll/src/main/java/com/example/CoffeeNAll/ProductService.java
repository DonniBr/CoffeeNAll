package com.example.CoffeeNAll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    /*private final ProductRepository productRepository;

    ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }
     */

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id){
        return Optional.ofNullable(productRepository.findById(id).orElse(null));
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

}
