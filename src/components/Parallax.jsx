import React from "react";
import CitySelector from "./CitySelector";

const Parallax = ({ children }) => {
  return (
    <div>{children}
      <header className="header">
        <h1 className="title-text"> Immo Coin</h1>
        <img src="/bg.png" className="header-img" alt="header" />
        
      </header>

      <article className="main-text">

        <br></br><br></br><br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi,
        perferendis nemo beatae, debitis veritatis voluptas iure ipsum facilis
        dolor ea, exercitationem libero tempore a culpa minima. Consequatur
        saepe ipsam, illo porro maiores, maxime cum accusantium rem dolorem
        incidunt est iste dolore veritatis nihil itaque impedit quasi.
        Consectetur rem dolores accusamus vitae cupiditate non asperiores
        temporibus illum saepe, dolor tempore maiores pariatur, ipsa animi
        consequatur tempora explicabo numquam rerum doloremque nisi iste sed
        delectus ipsum deleniti. Accusantium incidunt qui numquam omnis deserunt
        perferendis explicabo illo aperiam a repellendus delectus quasi nemo
        libero itaque blanditiis deleniti velit molestias, enim dolores et
        voluptatibus minus saepe! Quas voluptate distinctio nobis maiores?
        Asperiores aliquid provident quia explicabo fugit veniam quis ut, magni
        reprehenderit molestiae ducimus dolorum voluptatum iure corporis?
        Nostrum numquam ut alias voluptates suscipit incidunt dignissimos eius
        fuga inventore? Itaque nisi assumenda ullam omnis culpa ex, qui harum
        quo. Magni quisquam neque minus! <br></br><br></br><br></br>
        <CitySelector />
      </article>
    </div>
  );
};

export default Parallax;
