package ru.kata.spring.boot_security.demo.dao;

import ru.kata.spring.boot_security.demo.entities.User;

import java.util.List;

public interface UserDao {
    User getUserById(long id);
    User getUserByName(String name);
    List<User> getUsers();
    void addUser(User user);
    void deleteUser(long userId);
    void updateUser(long id, User user);
}
