# URL Parameters

- [Github Repo](https://github.com/sohailshams/url-parameters)

## Description

The first half of this code demonstrates how to retrieve values of URL parameters and the second half of this code code shows how to access the form and set hidden input fields in the form.

## Developemt Process

My approach was to get values of the URL parameter. Create input fields and set related attributes. Then access the form. Create a container div element and append input fields in the container div. Finally append the container div in the form.

#### Accessing the form

Since the form does not have an id attribute which would have been a unique identifier while accessing this form, so I thought different options to access this form. One option was to access the form using 
``` 
document.querySelector("form"); 
````
it will return the first element on the page which will match the specified selector, which in this case is "form". At the moment this page contains only one form so this will work. But if in future another form is added on this page before this form then this code will break. So to ensure that the correct form is selected to append the input fields to the form I followed the following steps;

1. Get all input fields with their related id's.
1. Accessed third parent tag of these input fields, which is form tag.
1. Setup an if statement to check that the third parent of these input fields is form tag.

This if statement will make sure that the input fields will only be appended in the contact form even if another form is present on the same page.

## Testing Locally

Please follow these steps to test this code;

1. Go to [GitHub repository](https://github.com/sohailshams/url-parameters), first fork it and clone to your local machine.
1. Open the [following url](https://marcloudtechnologies.com/ContactUs/?utm_campaign=recruitment&utm_source=website)
1. Go to browser console and execute the code.

