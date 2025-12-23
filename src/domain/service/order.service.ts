
import { Customer } from "../customer/entity/customer";
import { Order } from "../order/entity/order";
import { OrderItem } from "../order/entity/order-item";

export class OrderService {
    static total(orders: Order[]): number {
        return orders.reduce((acc, order) => acc + order.total(), 0);
    }
    static placeOrder(customer: Customer, items: OrderItem[]): Order {
        if (items.length === 0) {
            throw new Error("Order must have at least one item");
        }
        const order = new Order("999", customer.id, items);
        const points = order.total() / 2;
        customer.addRewardPoints(points);
        return order;
    }
}