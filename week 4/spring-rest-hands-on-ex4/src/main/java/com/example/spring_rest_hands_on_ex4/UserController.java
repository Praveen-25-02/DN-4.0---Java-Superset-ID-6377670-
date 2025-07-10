package com.example.spring_rest_hands_on_ex4;

import com.example.spring_rest_hands_on_ex4.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @PostMapping
    public String createUser(@RequestBody User user) {
        return "User " + user.getName() + " aged " + user.getAge() + " created!";
    }
}
