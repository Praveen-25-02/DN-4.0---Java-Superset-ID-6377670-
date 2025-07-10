package com.example.spring_rest_hands_on_ex6;

import com.example.spring_rest_hands_on_ex6.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
