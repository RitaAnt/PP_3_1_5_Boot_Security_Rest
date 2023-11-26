package ru.kata.spring.boot_security.demo.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.kata.spring.boot_security.demo.entities.User;
import ru.kata.spring.boot_security.demo.service.UserService;


import java.security.Principal;

@Controller
public class UserController {

    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/api/user")
    @ResponseBody
    public ResponseEntity<User> showUser(Principal principal) {
        User user = userService.getUserByName(principal.getName());
        return user != null ?
                ResponseEntity.ok(user) :
                ResponseEntity.notFound().build();
    }


}
