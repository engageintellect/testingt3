import CardStackCard from "./CardStackCard";

// PHOTOS
import mountains from "/public/images/hero/rugged_mountains.jpg";
import circut from "/public/images/circut.jpg";
import fire from "/public/images/industries/fire.jpg";
import police from "/public/images/industries/police.jpg";
import utilities from "/public/images/industries/utilities.jpg";
import barcode_scanning from "/public/images/industries/barcode_printing.jpg";
import asset_tracking from "/public/images/industries/asset_tracking.jpg";
import wearable_computing from "/public/images/industries/wearable_computing.jpg";

export default function CardStack() {
  const cardClass = {
    card1:
      "h-72 w-72 xl:w-full md:h-96 md:w-96 xl:h-96 bg-neutral-800 hover:bg-neutral-700 rounded-lg xl:shadow-lg xl:translate-y-0 xl:hover:z-50 transition-all duration-300 overflow-hidden",
    card2:
      "h-72 w-72 xl:w-full md:h-96 md:w-96 xl:h-96 bg-neutral-800 hover:bg-neutral-700 rounded-lg xl:shadow-lg xl:translate-y-10 xl:hover:z-50 transition-all duration-300 overflow-hidden",
    card3:
      "h-72 w-72 xl:w-full md:h-96 md:w-96 xl:h-96 bg-neutral-800 hover:bg-neutral-700 rounded-lg lg:shadow-lg xl:translate-x-1/2 xl:z-40 transition-all duration-300 overflow-hidden",
    hidden:
      "h-72 w-72 xlm :w-full md:h-96 md:w-96 xl:h-96 hidden xl:flex rounded-lg overflow-hidden",
    card4:
      "h-72 w-72 xl:w-full md:h-96 md:w-96 xl:h-96 bg-neutral-800 hover:bg-neutral-700 rounded-lg xl:shadow-lg xl:-translate-y-10 xl:hover:z-50 transition-all duration-300 overflow-hidden",
    card5:
      "h-72 w-72 xl:w-full md:h-96 md:w-96 xl:h-96 bg-neutral-800 hover:bg-neutral-700 rounded-lg xl:shadow-lg xl:translate-y-0 xl:hover:z-50 transition-all duration-300 overflow-hidden",
    rainbow:
      "h-72 w-72 xl:w-full md:h-96 md:w-96 xl:h-96 rounded-lg lg:shadow-lg xl:translate-x-1/2 hover:bg-neutral-700 xl:z-50 transition-transform  bg-neutral-800  xl:bg-gradient-to-r xl:from-purple-600 xl:to-purple-600 xl:via-blue-600 xl:animate-gradient-x xl:bg-cover xl:bg-center xl:shadow-lg xl:duration-300 overflow-hidden xl:hover:from-purple-500 xl:hover:to-purple-500 xl:hover:via-blue-500",
  };

  return (
    <>
      <div className="bg-neutral-900 xl:bg-neutral-800">
        <div className="mx-auto xl:container xl:py-20">
          <div
            id="card_stack"
            className="scroll-hide flex snap-x gap-2 overflow-x-auto p-2 md:gap-4 md:p-4 xl:grid xl:grid-cols-2 xl:py-20"
          >
            {/* CARD 1 */}
            <div className="snap-center">
              <CardStackCard
                card_class={cardClass.card1}
                title={"Asset Tracking & Inventory Management"}
                msg={
                  "Our asset tracking and inventory management solutions are ready to help you optimize your supply chain, reduce costs, and improve customer satisfaction. With our systems, you'll be able to track your assets from end-to-end, ensuring accuracy and transparency throughout your business."
                }
                img={asset_tracking}
              />
            </div>

            <div className="snap-center">
              {/* CARD 2 */}
              <CardStackCard
                card_class={cardClass.card2}
                title={"Video Surveillance"}
                msg={
                  "Custom tailored video surveillance solutions designed to meet the specific needs of your business. Whether you're looking to protect a retail store, warehouse, office, or any other type of commercial property, we have a solution that will work for you."
                }
                img={police}
              />
            </div>

            <div className="z-40 snap-center">
              {/* CARD 3 */}
              <CardStackCard
                card_class={cardClass.rainbow}
                title={"Rugged Computing"}
                msg={
                  "Our rugged computing solutions are able to withstand even the toughest environments. Whether you're working in construction, manufacturing, military, or any other challenging industry, we have a solution that will meet your needs. Our rugged computers are built to withstand extreme temperatures, shock, vibration, and other harsh conditions, making them ideal for use in the field or on the go."
                }
                img={fire}
              />
            </div>

            <div className="hidden xl:flex">
              {/* CARD HIDDEN */}
              <CardStackCard
                card_class={(cardClass.hidden, "hidden")}
                title={""}
                msg={""}
                img={""}
              />
            </div>

            <div className="snap-center">
              {/* CARD 4 */}
              <CardStackCard
                card_class={cardClass.card4}
                title={"Wearable Technology"}
                msg={
                  "Wearable technology solutions designed to meet the unique needs of any application. With features like real-time notifications, voice assistants, and hands-free operation, our industrial wearable technology helps you stay connected, productive, and safe on the job. Our solutions are perfect for a wide range of industries, including manufacturing, construction, military, and more."
                }
                img={wearable_computing}
              />
            </div>

            <div className="snap-center">
              {/* CARD 5 */}
              <CardStackCard
                card_class={cardClass.card5}
                title={"RFID & Barcode Scanning"}
                msg={
                  "With features like real-time data capture, hands-free operation, and long battery life, our rugged RFID and barcode scanning solutions help you stay productive and efficient on the job. Whether you need a handheld scanner for inventory management or a fixed scanner for tracking assets, we have a solution that will meet your needs."
                }
                img={barcode_scanning}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
