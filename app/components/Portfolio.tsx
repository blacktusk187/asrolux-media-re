"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const portfolioItems = [
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1741205493/ns8g5xgcopizawnzhood.webp",
    alt: "Elevate 1",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1741205493/cu8cluuugvhkznt9p1iz.webp",
    alt: "Elevate 2",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1741205494/fthz2sds5fhgzak8nzpx.webp",
    alt: "Elevate 3",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739370445/mgpxuy9xsmxpmnylglu7.jpg",
    alt: "7524 Pebble Creek Dr 1",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739454464/hw8qqkuegw5renjrhapv.jpg",
    alt: "7524 Pebble Creek Dr 2",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739454600/vxag4pzlfpimlvgmedyx.jpg",
    alt: "7524 Pebble Creek Dr 3",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739370018/rsog8xzxgwzb965xkseg.jpg",
    alt: "2240 Nordic Drive",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739458042/wf6a3opn81hdmkebg0ly.jpg",
    alt: "8031 Nicklaus North Blvd",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739234517/br9rwifiv5tmrihqlsuq.jpg",
    alt: "The Cabin at Sweetwater Lane",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739739308/ia3ncv6tffpvkmp6mdrv.jpg",
    alt: "7524 Pebble Creek Dr 4",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739459012/nmr8vfkyvtbjfs03rpos.jpg",
    alt: "2240 Nordic Drive",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739458889/a3ipnxeh6voulvhydprh.jpg",
    alt: "The Cabin at Sweetwater Lane",
  },
]

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
      <section id="portfolio" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-normal text-center mb-12 font-lexend">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
                <div
                    key={index}
                    className="relative h-64 overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => {
                      setPhotoIndex(index)
                      setLightboxOpen(true)
                    }}
                >
                  <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
            ))}
          </div>
        </div>
        {lightboxOpen && (
            <Lightbox
                mainSrc={portfolioItems[photoIndex].src}
                nextSrc={portfolioItems[(photoIndex + 1) % portfolioItems.length].src}
                prevSrc={portfolioItems[(photoIndex + portfolioItems.length - 1) % portfolioItems.length].src}
                onCloseRequest={() => setLightboxOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + portfolioItems.length - 1) % portfolioItems.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % portfolioItems.length)}
                imageTitle={portfolioItems[photoIndex].alt}
                imageCaption={portfolioItems[photoIndex].alt}
            />
        )}
      </section>
  )
}

