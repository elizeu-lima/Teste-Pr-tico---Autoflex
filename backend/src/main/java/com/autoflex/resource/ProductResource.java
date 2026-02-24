package com.autoflex.resource;

import com.autoflex.entity.Product;
import com.autoflex.entity.ProductComponent;
import com.autoflex.entity.RawMaterial;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.*;

@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProductResource {

    @GET
    public List<Product> getAll() {
        return Product.listAll();
    }

    @POST
    @Transactional
    public Product create(Product product) {
        product.persist();
        return product;
    }

    @GET
    @Path("/suggestion")
    public Map<String, Object> getSuggestion() {
        // 1. Search for products sorted by highest price (Requirement: Prioritization)
        List<Product> products = Product.list("order by price desc");

        // 2. Create a map to simulate the current inventory without altering the database.
        List<RawMaterial> materials = RawMaterial.listAll();
        Map<Long, Double> tempStock = new HashMap<>();
        for (RawMaterial m : materials) {
            tempStock.put(m.id, m.stockQuantity);
        }

        List<Map<String, Object>> suggestedProduction = new ArrayList<>();
        Double totalValue = 0.0;

        // 3. Calculation logic
        for (Product p : products) {
            int quantityToProduce = 0;
            boolean canProduce = true;

            while (canProduce) {
                // // Checks if all product components are in stock.
                for (ProductComponent comp : p.components) {
                    Double available = tempStock.get(comp.rawMaterial.id);
                    if (available == null || available < comp.requiredQuantity) {
                        canProduce = false;
                        break;
                    }
                }

                if (canProduce) {
                    // Subtract from temporary stock and increase production.
                    for (ProductComponent comp : p.components) {
                        tempStock.put(comp.rawMaterial.id, tempStock.get(comp.rawMaterial.id) - comp.requiredQuantity);
                    }
                    quantityToProduce++;
                    totalValue += p.price;
                }
            }

            if (quantityToProduce > 0) {
                Map<String, Object> item = new HashMap<>();
                item.put("productName", p.name);
                item.put("quantity", quantityToProduce);
                suggestedProduction.add(item);
            }
        }

        Map<String, Object> response = new HashMap<>();
        response.put("suggestedProduction", suggestedProduction);
        response.put("totalValue", totalValue);
        return response;
    }
}