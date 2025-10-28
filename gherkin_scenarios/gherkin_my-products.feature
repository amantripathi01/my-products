
// ********RoostGPT********
/*

roost_feedback [25/07/2025, 7:09:01 AM]:-\sAdd\smore\scomments\sto\sthe\stest
*/

// ********RoostGPT********

Feature: Product API Integration Tests

  Background:
    Given the API base URL 'http://localhost:8080/products'

  Scenario: Retrieve all products
    When I send a GET request to '/'
    Then the response status should be 200
    And the response should contain a list of products

  Scenario: Create a new product
    Given the product details with name 'Laptop', description 'Gaming Laptop', and price 1200.00
    When I send a POST request to '/' with the product details
    Then the response status should be 201
    And the response should contain the product with name 'Laptop', description 'Gaming Laptop', and price 1200.00

  Scenario: Retrieve a product by ID
    Given a product with ID 1 exists
    When I send a GET request to '/1'
    Then the response status should be 200
    And the response should contain the product with ID 1

  Scenario: Update a product by ID
    Given a product with ID 1 exists
    And the updated product details with name 'Laptop Pro', description 'High-end Gaming Laptop', and price 1500.00
    When I send a PUT request to '/1' with the updated product details
    Then the response status should be 200
    And the response should contain the product with name 'Laptop Pro', description 'High-end Gaming Laptop', and price 1500.00

  Scenario: Delete a product by ID
    Given a product with ID 1 exists
    When I send a DELETE request to '/1'
    Then the response status should be 200
    And the product with ID 1 should no longer exist

  Scenario: Retrieve a non-existent product by ID
    When I send a GET request to '/999'
    Then the response status should be 404
    And the response should indicate that the product was not found

  Scenario: Update a non-existent product by ID
    Given the updated product details with name 'Non-existent', description 'Does not exist', and price 0.00
    When I send a PUT request to '/999' with the updated product details
    Then the response status should be 404
    And the response should indicate that the product was not found

  Scenario: Delete a non-existent product by ID
    When I send a DELETE request to '/999'
    Then the response status should be 404
    And the response should indicate that the product was not found
