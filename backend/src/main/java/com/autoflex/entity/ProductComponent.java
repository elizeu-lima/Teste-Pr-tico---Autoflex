package com.autoflex.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "product_components")
public class ProductComponent extends PanacheEntity{
    @ManyToOne
    public RawMaterial rawMaterial;

    public Double requiredQuantity;
}
