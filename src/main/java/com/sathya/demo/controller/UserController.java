package com.sathya.demo.controller;

import com.sathya.demo.model.User;
import com.sathya.demo.respository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    @Autowired
    private UserRespository userRespository;

    // Show registration form
    @GetMapping("/register")
    public String showRegistrationForm() {
        return "register";  // This returns the "register" view
    }

    // Show home page
    @GetMapping("/")
    public String showHome() {
        return "first";  // This returns the "first" view
    }
    
    @GetMapping("/logo")
    public String products() {
        return "logo";  // This returns the "first" view
    }
    
    
    @GetMapping("/sign")
    public String sign() {
        return "sign";  // This returns the "first" view
    }
    
    // Show home page
    @GetMapping("/contact")
    public String  contact() {
        return "contact";  // This returns the "first" view
    }
    
    @GetMapping("/submit")
    public String  showlogint() {
        return "register";  // This returns the "first" view
    }


    // Handle user registration
    @PostMapping("/register")
    public String registerUser (User user) {
        // Save the user to the database
        userRespository.save(user);
        return "redirect:/register?success";  // Redirect to the registration page with success parameter
    }

    // Show list of all users
    @GetMapping("/users")
    public String listUsers(Model model) {
        // Fetch all users from the repository
        model.addAttribute("users", userRespository.findAll());
        return "users";  // This will render a view that lists all users
    }
}