import React from 'react'

export default function Location() {
  return (
  <div className="w-full bg-gradient-to-b from-orange-50 to-white py-12 px-4">
  <div className="max-w-6xl mx-auto text-center">
    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-[#3e2807] tracking-wider mb-4">
      FIND YOUR DUNKIN'
    </h1>
    <p className="text-lg md:text-xl text-[#3e2807] mb-10">
      Get directions and details on the Dunkin’ nearest to you!
    </p>

    {/* Google Map Embed */}
    <div className="w-full rounded-xl overflow-hidden shadow-lg border border-orange-300 mb-10">
      <iframe
        title="Dunkin Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798883898!2d-74.25986768869037!3d40.697670064083204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5ad1f8e33%3A0xddd6dc343c4a1a60!2sDunkin'%20Donuts!5e0!3m2!1sen!2sus!4v1628168997654!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* Error Message */}
    <div className="mt-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#3e2807] mb-2">
        LET'S TRY AGAIN
      </h2>
      <p className="text-[#3e2807] max-w-xl mx-auto">
        We were unable to find a Dunkin’ within your radius. Enter another location to find a restaurant nearby.
      </p>
    </div>
  </div>
</div>


  )
}
