package com.detisch.order_service.controller;

import com.detisch.order_service.model.Order;
import com.detisch.order_service.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable("id") Long id) {
        return orderService.getOrderById(id);
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable("id") Long id) {
        orderService.deleteOrder(id);
    }
}
