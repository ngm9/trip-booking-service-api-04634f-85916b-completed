# Trip Booking API

## Task Overview

You are collaborating with a small travel startup that sells straightforward trip packages through a web-based dashboard. The backend service in this repository starts successfully and exposes a basic route module, but the trip booking endpoints do not yet apply any business rules or return meaningful results. Your work is to turn these endpoints into a usable booking API that can accept new trip bookings and expose existing ones in a predictable way. The outcome should give the frontend team a stable interface they can rely on while keeping the design simple and maintainable.

## Helpful Tips

- Consider the different situations a booking request can be in and how each should be reflected in the response.
- Think about how bookings should be stored in memory so they can be accessed across multiple requests.
- Explore an approach for returning errors in a consistent JSON structure that client applications can handle.
- Review how to keep responsibilities clear between routing, request handling, and shared utilities.

## Objectives

- Accept incoming trip booking data and create new bookings only when the information is complete and valid.
- Return clear responses and appropriate status codes for successful bookings and rejected requests.
- Provide a way to view existing bookings so the travel dashboard can display recently created trips.
- Keep the routing, controller, and middleware structure organized and easy to follow.

## How to Verify

- Send sample booking requests with both complete and incomplete data and compare the responses.
- Confirm that successful bookings are available when querying for existing trips.
- Check that invalid data does not change the stored collection and that the response explains the problem.
- Verify that unexpected failures return a structured error to the client instead of stopping the process.
