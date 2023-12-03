package ru.kata.spring.boot_security.demo.service;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import ru.kata.spring.boot_security.demo.entities.Role;
import ru.kata.spring.boot_security.demo.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<Role> getAllRoles();
    void add(User user);
    List<User> getAllUsers();
    void delete(Long id);
    void update(User user, Long id);
    User getById(Long id);
    Optional<User> getByUsername(String userName);

    UserDetails loadUserByUsername(String firstName) throws UsernameNotFoundException;

    User getCurrentUser();
}
