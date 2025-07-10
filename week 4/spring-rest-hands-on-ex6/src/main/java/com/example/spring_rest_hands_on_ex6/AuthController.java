package com.example.spring_rest_hands_on_ex6;

import com.example.spring_rest_hands_on_ex6.dto.AuthRequest;
import com.example.spring_rest_hands_on_ex6.dto.AuthResponse;
import com.example.spring_rest_hands_on_ex6.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService service;

    @PostMapping("/register")
    public AuthResponse register(@RequestBody AuthRequest request) {
        return service.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        return service.login(request);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Secured World!";
    }
}
