package com.autoflex;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;

@QuarkusTest
public class ProductResourceTest {

    @Test
    public void testSuggestionEndpoint() {
        given()
                .when().get("/products/suggestion")
                .then()
                .statusCode(200)
                .body("size()", is(notNullValue()));
    }
}