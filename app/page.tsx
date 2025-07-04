"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Fuel,
  Building2,
  ShoppingCart,
  CreditCard,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  Heart,
  Utensils,
  Coffee,
  Package,
  Wrench,
  Truck,
  Scale,
  Snowflake,
  Armchair,
  GlassWater,
} from "lucide-react"
import Image from "next/image"
import { sendContactMessage } from "./actions"
import { useActionState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export default function FuelUpTruckStop() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, null)
  const [selectedImage, setSelectedImage] = useState<{ name: string; image: string; type?: string } | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const bobaFlavors = [
    {
      name: "Taro",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ds7K4NerfgBPYDjWrGmXp682iF1x7A.png",
    },
    {
      name: "Strawberry",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xe4c6oSC27yP9qmuT9MqTxeW4N2UjA.png",
    },
    {
      name: "Watermelon",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YYvzEMnKDeahlgoXA56AqWunukJMOo.png",
    },
    {
      name: "Mango",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4jxaN9BscdZaWEgzDO2xdLJ8FXURgV.png",
    },
    {
      name: "Matcha",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iV9GMMcYGEocit0hlh9jDdu6vRkGBu.png",
    },
    {
      name: "Coffee",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BErj9dpcwuqdZFQKNDK9iooSKjXnye.png",
    },
    {
      name: "Honeydew",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-riDGUV7dsSA4hafSyCm4Yj2BKow66h.png",
    },
    {
      name: "Milk Tea",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rZoPoryUk2rX0dXNmiRRgBrovvZXjO.png",
    },
    {
      name: "Brown Sugar",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XJOXSnu5EL5wPS0eMAym4MB73Nn1wY.png",
    },
    {
      name: "Thai Tea",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Hghu2bH6hDBpnVcnOUWmeRoMMgToNB.png",
    },
    {
      name: "Coconut",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qmIAdmIpyzEEn09nbeM5DrYnEMGsan.png",
    },
    {
      name: "Banana",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qoSDjLgAxhshE9wqgoYm81DrwR41Fd.png",
    },
    {
      name: "Piña Colada",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xc6X5grFQYhr1QCBUBRxXw05f8RejM.png",
    },
    {
      name: "Strawberry Banana",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1w6kZuVJeSk1ZuLCVc98xXWS5LVTwu.png",
    },
    {
      name: "Pineapple",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YQ1EmlMJ4ppY5TxOMMChlyqKWjKw68.png",
    },
    {
      name: "Tiger Ube",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lXySVK3DlhM3Xm5PjOslYsc4oqTBcj.png",
    },
  ]

  const frappes = [
    { name: "Coffee", image: "/images/coffee-frappe.png" },
    { name: "Chocolate", image: "/images/chocolate-frappe.png" },
    { name: "Caramel", image: "/images/caramel-frappe.png" },
  ]

  return (
    <div className="min-h-screen bg-white text-white overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center w-full overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oj1jO6slZ2HRDU7HUz9onuMtG7VBoU.png"
            alt="Chevron gas station with fuel pumps and canopy"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-[#003057]/80 w-full h-full" />
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg leading-tight">
            7th Standard Chevron & Truck Stop
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed px-2">
            Your 24/7 Highway Hub for Fuel, Food & Rest
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-lg sm:max-w-none mx-auto">
            <Button
              size="lg"
              className="bg-[#E4002B] hover:bg-[#C4002B] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => scrollToSection("amenities")}
            >
              View Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#003057] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto"
              onClick={() => scrollToSection("fuel-prices")}
            >
              See Fuel Prices
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => scrollToSection("food-section")}
            >
              Food & Drinks
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#F2F2F2] w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
            <div className="w-full">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[#E4002B] leading-tight mt-16 text-center lg:text-left">
                About Us
              </h2>
              <div className="w-24 h-1 bg-[#E4002B] mx-auto lg:mx-0 mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                At 7th Standard Chevron & Truck Stop, we serve truckers, travelers, and locals with top-tier diesel,
                snacks, and hot meals — day and night.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Located conveniently on your route, we're committed to providing quality service, competitive prices,
                and a clean, safe environment for all our customers.
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5056.jpg-GKhl7qwHfFbf9gfhdMqFP7kVj82uDL.jpeg"
                alt="Interior of 7th Standard Chevron & Truck Stop showing convenience store, food service area, and dining space"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto object-cover max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Prices Section */}
      <section id="fuel-prices" className="py-12 sm:py-16 md:py-20 px-4 bg-white w-full overflow-hidden">
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[#E4002B] leading-tight mt-16">
            Today's Fuel Prices
          </h2>
          <div className="w-24 h-1 bg-[#E4002B] mx-auto mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            <Card className="bg-white border-gray-200 hover:border-[#E4002B] shadow-lg transition-colors w-full">
              <CardContent className="p-6 sm:p-8 text-center">
                <Fuel className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-[#E4002B]" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#003057]">Regular Unleaded</h3>
                <p className="text-3xl sm:text-4xl font-bold text-[#E4002B]">$3.49</p>
                <p className="text-gray-600 mt-2">per gallon</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-[#E4002B] shadow-lg transition-colors w-full">
              <CardContent className="p-6 sm:p-8 text-center">
                <Fuel className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-[#E4002B]" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#003057]">Premium Unleaded</h3>
                <p className="text-3xl sm:text-4xl font-bold text-[#E4002B]">$3.89</p>
                <p className="text-gray-600 mt-2">per gallon</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-[#E4002B] shadow-lg transition-colors w-full sm:col-span-2 md:col-span-1">
              <CardContent className="p-6 sm:p-8 text-center">
                <Fuel className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-[#E4002B]" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#003057]">Diesel</h3>
                <p className="text-3xl sm:text-4xl font-bold text-[#E4002B]">$3.79</p>
                <p className="text-gray-600 mt-2">per gallon</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section id="food-section" className="py-12 sm:py-16 md:py-20 px-4 bg-[#F2F2F2] w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[#E4002B] leading-tight mt-16">
              Try Our Krispy Krunchy Chicken
            </h2>
            <div className="w-24 h-1 bg-[#E4002B] mx-auto mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              Enjoy fresh, hot Cajun-style chicken made daily inside our store. Perfect for a quick meal on the go.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 w-full">
            <div className="relative w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b7krA5JCDk11n0kUv6RQTSZxxxU3ON.png"
                alt="Krispy Krunchy Chicken box with Cajun-style chicken pieces and sauce"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="relative w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R0el7t0J0f0uUUdV1MFEpxXttxTje1.png"
                alt="Complete Krispy Krunchy Chicken meal with sides, biscuits, and mac and cheese"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="relative w-full sm:col-span-2 md:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sKYk3C4ApXepqN72ANtSkBleatywDv.png"
                alt="Krispy Krunchy Chicken tenders with dipping sauce on wooden board"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="text-center w-full">
            <Button
              size="lg"
              className="bg-[#E4002B] hover:bg-[#C4002B] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
              onClick={() => window.open("https://www.krispykrunchy.com/menu/", "_blank")}
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Boba-G Drinks Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent leading-tight mt-16">
              Boba-G Drinks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              Cool off with our delicious boba drinks and ice-blended frappes — only at 7th Standard Chevron & Truck
              Stop.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 w-full">
            {/* Boba Drinks Section */}
            <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl border border-white/50 w-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
                Boba Drinks
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
                {bobaFlavors.map((flavor, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-2 sm:p-3 md:p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-0 flex flex-col w-full"
                    onClick={() => setSelectedImage({ ...flavor, type: "boba" })}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-purple-200 hover:border-purple-300 flex-shrink-0">
                      <Image
                        src={flavor.image || "/placeholder.svg"}
                        alt={`${flavor.name} boba drink`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-purple-800 text-center leading-tight px-1 break-words hyphens-auto flex-grow flex items-center justify-center">
                      {flavor.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frappes Section */}
            <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl border border-white/50 w-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                Frappes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
                {frappes.map((frappe, index) => (
                  <div key={index} className="text-center group w-full">
                    <div
                      className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 hover:scale-105 transition-transform duration-200 w-full cursor-pointer"
                      onClick={() => setSelectedImage({ name: frappe.name, image: frappe.image, type: "frappe" })}
                    >
                      <Image
                        src={frappe.image || "/placeholder.svg"}
                        alt={`${frappe.name} frappe`}
                        width={200}
                        height={250}
                        className="mx-auto rounded-xl shadow-lg w-full h-auto max-w-[200px] object-contain"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-700 group-hover:text-pink-600 transition-colors">
                      {frappe.name}
                    </h4>
                  </div>
                ))}
              </div>

              <div className="text-center mb-4 sm:mb-6 w-full">
                <p className="text-base sm:text-lg font-semibold text-yellow-700 mb-4 sm:mb-6">
                  Rich, creamy, and blended to perfection.
                </p>
              </div>

              {/* Customization section */}
              <div className="text-center w-full">
                <p className="text-base sm:text-lg font-semibold text-purple-700 mb-3 sm:mb-4">
                  Choose your flavor, your topping, your way.
                </p>

                <div className="space-y-3 sm:space-y-4 w-full">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-3 sm:p-4 w-full">
                    <h4 className="font-bold text-purple-800 mb-2 flex items-center justify-center gap-2 flex-wrap">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Classic Tapioca Pearls</span>
                    </h4>
                    <p className="text-purple-700 text-xs sm:text-sm leading-relaxed">
                      Traditional chewy black tapioca pearls - the original boba experience
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-xl p-3 sm:p-4 w-full">
                    <h4 className="font-bold text-purple-800 mb-2 flex items-center justify-center gap-2 flex-wrap">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Popping Boba Varieties</span>
                    </h4>
                    <p className="text-purple-700 text-xs sm:text-sm leading-relaxed mb-2">
                      Bursting with flavor! Choose from:
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                      <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-full font-medium">Strawberry</span>
                      <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full font-medium">Mango</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-medium">Blueberry</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-xl p-3 sm:p-4 w-full">
                    <h4 className="font-bold text-purple-800 mb-2 flex items-center justify-center gap-2 flex-wrap">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Jelly Toppings</span>
                    </h4>
                    <p className="text-purple-700 text-xs sm:text-sm leading-relaxed mb-2">
                      Soft and refreshing jelly cubes:
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full font-medium">Lychee</span>
                      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full font-medium">Mango</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Zoom Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 w-full h-full overflow-hidden"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full mx-4 transform animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-gray-600 text-xl leading-none">&times;</span>
                </button>

                <div className="text-center w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 sm:mb-6 pr-8">
                    {selectedImage.type === "frappe" ? `${selectedImage.name} Frappe` : `${selectedImage.name} Boba`}
                  </h3>

                  <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={selectedImage.image || "/placeholder.svg"}
                      alt={`${selectedImage.name} ${selectedImage.type || "drink"}`}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {selectedImage.type === "frappe"
                      ? `Rich and creamy ${selectedImage.name.toLowerCase()} frappe, blended to perfection with ice and topped with whipped cream.`
                      : `Refreshing ${selectedImage.name.toLowerCase()} flavored boba tea with chewy tapioca pearls.`}
                  </p>

                  <Button
                    onClick={() => setSelectedImage(null)}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full w-full sm:w-auto"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-12 sm:py-16 md:py-20 px-4 bg-white w-full overflow-hidden">
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[#E4002B] leading-tight mt-16">Our Amenities</h2>
          <div className="w-24 h-1 bg-[#E4002B] mx-auto mb-12"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 sm:gap-8 w-full">
            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Clean Restrooms</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Truck Parking</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Convenience Store</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">ATM</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Hot Food</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <GlassWater className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Boba Drinks</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <Package className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Amazon Locker</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Hot Coffee</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Auto Supplies</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <Armchair className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Indoor Seating Area</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">CAT Scale</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-[#E4002B] p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                <Snowflake className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-[#003057] font-semibold text-sm sm:text-base text-center">Bagged Ice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-[#F2F2F2] w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-[#E4002B] leading-tight mt-16">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#E4002B] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 w-full">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 w-full">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003057] mb-4 sm:mb-6">Get In Touch</h3>

                <div className="space-y-4 sm:space-y-6 w-full">
                  <div className="flex items-start space-x-3 sm:space-x-4 w-full">
                    <div className="bg-[#E4002B] p-2 sm:p-3 rounded-full flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-[#003057]">Address</h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        31109 7th Standard Rd
                        <br />
                        Shafter, CA 93263
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 w-full">
                    <div className="bg-[#E4002B] p-2 sm:p-3 rounded-full flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-[#003057]">Phone</h4>
                      <p className="text-gray-700 text-sm sm:text-base">(661) 910-8403</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 w-full">
                    <div className="bg-[#E4002B] p-2 sm:p-3 rounded-full flex-shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-[#003057]">Hours</h4>
                      <p className="text-gray-700 text-sm sm:text-base">Open 24/7 - Always here for you!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003057] mb-4 sm:mb-6">
                  Frequently Asked Questions
                </h3>

                <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
                  <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-3 sm:px-4 w-full">
                    <AccordionTrigger className="text-left text-[#003057] hover:text-[#E4002B] font-semibold text-sm sm:text-base py-3 sm:py-4">
                      Are you open 24/7?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-3 sm:pb-4 text-sm sm:text-base leading-relaxed">
                      Yes! We're open 24 hours a day, 7 days a week. Whether you need fuel, food, or a place to rest,
                      we're always here to serve you.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-3 sm:px-4 w-full">
                    <AccordionTrigger className="text-left text-[#003057] hover:text-[#E4002B] font-semibold text-sm sm:text-base py-3 sm:py-4">
                      Do you offer truck parking?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-3 sm:pb-4 text-sm sm:text-base leading-relaxed">
                      Yes! We have ample truck parking spaces available for both short stops and overnight parking. Our
                      lot is well-lit and secure for your peace of mind.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-3 sm:px-4 w-full">
                    <AccordionTrigger className="text-left text-[#003057] hover:text-[#E4002B] font-semibold text-sm sm:text-base py-3 sm:py-4">
                      Do you serve hot food all day?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-3 sm:pb-4 text-sm sm:text-base leading-relaxed">
                      Yes! Our Krispy Krunchy Chicken and other hot food options are available 24/7. We prepare fresh,
                      hot meals throughout the day and night.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-3 sm:px-4 w-full">
                    <AccordionTrigger className="text-left text-[#003057] hover:text-[#E4002B] font-semibold text-sm sm:text-base py-3 sm:py-4">
                      How can I check fuel prices?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-3 sm:pb-4 text-sm sm:text-base leading-relaxed">
                      You can check our current fuel prices right here on our website! Scroll up to the "Today's Fuel
                      Prices" section or call us at (661) 910-8403 for the most up-to-date pricing.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-3 sm:px-4 w-full">
                    <AccordionTrigger className="text-left text-[#003057] hover:text-[#E4002B] font-semibold text-sm sm:text-base py-3 sm:py-4">
                      What payment methods do you accept?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-3 sm:pb-4 text-sm sm:text-base leading-relaxed">
                      We accept all major credit cards, debit cards, cash, and fleet cards. We also have an ATM on-site
                      for your convenience.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Map */}
            <div className="relative w-full">
              <div className="w-full h-64 sm:h-96 lg:h-full lg:min-h-[600px] rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.1234567890123!2d-119.123456789!3d35.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6b1234567890%3A0x1234567890abcdef!2s31109%207th%20Standard%20Rd%2C%20Shafter%2C%20CA%2093263!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "256px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="7th Standard Chevron & Truck Stop Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003057] border-t border-[#003057] py-8 sm:py-12 px-4 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 w-full">
            <div className="w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#E4002B] mb-3 sm:mb-4">
                7th Standard Chevron & Truck Stop
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Your premier destination for quality fuel, delicious food, and exceptional service on Highway 7th
                Standard. We're proud to serve the trucking community and local travelers with 24/7 reliability,
                competitive prices, and a commitment to excellence that keeps you moving forward on your journey.
              </p>
            </div>

            <div className="w-full">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
              <nav className="space-y-2 w-full">
                <button
                  onClick={scrollToTop}
                  className="block text-gray-400 hover:text-[#E4002B] transition-colors text-left text-sm sm:text-base w-full"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("fuel-prices")}
                  className="block text-gray-400 hover:text-[#E4002B] transition-colors text-left text-sm sm:text-base w-full"
                >
                  Fuel Prices
                </button>
                <button
                  onClick={() => window.open("https://www.krispykrunchy.com/menu/", "_blank")}
                  className="block text-gray-400 hover:text-[#E4002B] transition-colors text-left text-sm sm:text-base w-full"
                >
                  Food
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-[#E4002B] transition-colors text-left text-sm sm:text-base w-full"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center w-full">
            <p className="text-gray-400 text-sm sm:text-base">
              &copy; {new Date().getFullYear()} 7th Standard Chevron & Truck Stop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
