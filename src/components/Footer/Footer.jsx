import React from "react";

const Footer = () => {
  return (
    <footer class="bg-white text-gray-800 py-10 shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8">
      <h2 class="text-xl font-bold">Gadget Heaven</h2>
      <p class="text-sm text-gray-500 mt-2">Leading the way in cutting-edge technology and innovation.</p>
    </div>

    <hr class="border-t border-gray-200 mb-8"/>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5  mx-70 text-sm text-center md:text-left">
      
      <div>
        <h3 class="text-base font-semibold mb-3">Services</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Product Support</a></li>
          <li><a href="#" class="hover:underline">Order Tracking</a></li>
          <li><a href="#" class="hover:underline">Shipping & Delivery</a></li>
          <li><a href="#" class="hover:underline">Returns</a></li>
        </ul>
      </div>

      
      <div>
        <h3 class="text-base font-semibold mb-3">Company</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">About Us</a></li>
          <li><a href="#" class="hover:underline">Careers</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      
      <div>
        <h3 class="text-base font-semibold mb-3">Legal</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Terms of Service</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
