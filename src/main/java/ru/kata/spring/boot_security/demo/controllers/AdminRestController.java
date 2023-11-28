package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.entities.Role;
import ru.kata.spring.boot_security.demo.entities.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminRestController {

    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public AdminRestController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        return userService.getUsers();
    }
    @GetMapping("/roles")
    public List<Role> getAllRoles() {
        return roleService.getListRoles();
    }
    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/users")
    public ResponseEntity<Void> createUser(@RequestBody User user) {
        userService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable long id, @RequestBody User user) {
        userService.updateUser(id, user);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
