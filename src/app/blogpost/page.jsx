"use client";

const BlogPost = () => {
  return (
    <div className="h-[calc(100vh-6rem)] w-100vw overflow-scroll ">
      <div className="h-full px-4 md:px-20 lg:px-40">
        <div className="flex flex-col gap-1 mt-10 mb-4 sm:mb-0 sm:gap-0 justify-center items-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Dr. Faheem Uddin
          </h1>
          <h3 className="text-lg md:text-xl">
            Senior Journalist and Associate Editor
          </h3>
          <div
            className="flex flex-col justify-center items-center w-full max-w-lg md:max-w-xl lg:max-w-3xl "
            style={{ height: "650px", width: "800px" }}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src="/award.jpeg"
                alt=""
                className="h-full w-full rounded-md"
              />
            </div>
            <p>
              Faheem Uddin was felicitated with a lifetime achievement award by
              former Home Minister Mahmood Ali and IPS A.K. Khan.
            </p>
          </div>
        </div>

        <div className="">
          <p className="text-2xl pt-8 pb-8">
            Dr. Faheem Uddin is a distinguished scholar and journalist, whose
            life and career have been marked by an unwavering dedication to
            truth and excellence. With a recent Ph.D. in Urdu Literature,
            focusing on the rich and complex history of Telangana, he has
            significantly contributed to our understanding of the region through
            his comprehensive research and published works. His latest book on
            Telangana's history has garnered critical acclaim and stands as a
            testament to his scholarly prowess.
          </p>
          <p className="text-2xl pt-8 pb-8">
            In addition to his academic achievements, Dr. Faheem Uddin serves as
            the Associate Editor of the esteemed Rahnuma-E-Deccan Daily
            Newspaper. In this role, he not only oversees the editorial content
            but also brings his insightful perspectives to the forefront of
            public discourse. His expertise is further recognized through his
            work as a translator in the State Legislative Assembly, where his
            linguistic skills and deep understanding of legislative processes
            are invaluable. Known for his exceptional calligraphy and remarkable
            handwriting, his work is often seen as a blend of art and
            literature.
          </p>
          <p className="text-2xl pt-8 pb-8">
            Beyond his professional accolades, Dr. Faheem Uddin is celebrated
            for his integrity and courage as a journalist. He is committed to
            upholding the truth and exposing falsehoods, earning him a
            reputation as a fearless advocate for justice. His early years were
            marked by a passion for cricket, where he had the privilege of
            playing alongside cricket legends such as Sachin Tendulkar and
            Mohammad Azharuddin. His profound knowledge of Urdu literature,
            Indian politics, and the history of Telangana, combined with his
            lifelong dedication to his craft, culminated in him receiving a
            prestigious lifetime achievement award. This honor is a reflection
            of his enduring impact and his remarkable journey as a scholar,
            journalist, and advocate for truth.
          </p>
        </div>
        <div>
          <p className="italic">Written by Mustaeen</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
