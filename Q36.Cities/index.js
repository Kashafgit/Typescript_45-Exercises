function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n".concat(city, " is located in ").concat(country));
}
describe_city("Islamabad");
describe_city("Lahore");
describe_city("Karachi");
describe_city("Istambul", "Turkey");
