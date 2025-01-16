package com.detisch.cart_service.service;

import com.detisch.cart_service.model.CartItem;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    private final RedisTemplate<String, Object> redisTemplate;

    public CartService(RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    private String getCartKey(String userId) {
        return "cart:" + userId;
    }

    public void addToCart(String userId, CartItem item) {
        redisTemplate.opsForList().rightPush(getCartKey(userId), item);
    }

    public List<Object> getCart(String userId) {
        return redisTemplate.opsForList().range(getCartKey(userId), 0, -1);
    }

    public void removeFromCart(String userId, CartItem item) {
        redisTemplate.opsForList().remove(getCartKey(userId), 1, item);
    }

    public void clearCart(String userId) {
        redisTemplate.delete(getCartKey(userId));
    }
}