package ru.kata.spring.boot_security.demo.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.entities.Role;
import ru.kata.spring.boot_security.demo.entities.User;
import ru.kata.spring.boot_security.demo.repositories.RoleRepository;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;
import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
public class DbInit {
    private UserService userService;
    private RoleRepository roleRepository;

    @Autowired
    public DbInit(UserService userService, RoleRepository roleRepository) {
        this.userService = userService;
        this.roleRepository = roleRepository;
    }

    @PostConstruct
    private void postConstruct() {
        Role admin = new Role("ROLE_ADMIN");
        Role user = new Role("ROLE_USER");
        roleRepository.save(admin);
        roleRepository.save(user);

        List<Role> rolesAdmin = new ArrayList<>();
        rolesAdmin.add(admin);
        rolesAdmin.add(user);
        userService.add(new User(1, "admin", "admin", "admin@mail.com", rolesAdmin));

        List<Role> rolesUser = new ArrayList<>();
        rolesUser.add(user);
        userService.add(new User(2, "user", "user", "user@mail.com", rolesUser));
    }
}