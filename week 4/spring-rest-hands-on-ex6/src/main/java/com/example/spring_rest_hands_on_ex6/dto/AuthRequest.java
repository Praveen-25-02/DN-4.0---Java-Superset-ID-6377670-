package com.example.spring_rest_hands_on_ex6.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AuthRequest {
    private String username;
    private String password;
}
