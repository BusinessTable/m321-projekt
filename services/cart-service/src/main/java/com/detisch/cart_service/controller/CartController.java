package com.detisch.cart_service.controller;

import com.detisch.cart_service.model.CartItem;
import com.detisch.cart_service.service.CartService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    // Produkt zum Warenkorb hinzufügen
    @PostMapping("/{userId}/add")
    public void addToCart(
            @PathVariable("userId") String userId,
            @RequestBody CartItem item) {
        cartService.addToCart(userId, item);
    }

    // Warenkorb anzeigen
    @GetMapping("/{userId}")
    public List<Object> getCart(@PathVariable("userId") String userId) {
        return cartService.getCart(userId);
    }

    // Produkt aus dem Warenkorb entfernen
    @DeleteMapping("/{userId}/remove")
    public void removeFromCart(@PathVariable("userId") String userId, @RequestBody CartItem item) {
        cartService.removeFromCart(userId, item);
    }

    // Warenkorb leeren
    @DeleteMapping("/{userId}/clear")
    public void clearCart(@PathVariable("userId") String userId) {
        cartService.clearCart(userId);
    }
}