import React from "react";
import "./Apidocs.css";
import Button from "@mui/material/Button";
import CodeMirror from "codemirror";

const Apidocs = (props) => {
  return (
    <>
      <section className="container d-flex" id="firstContainerUper">
        <div className="container">
          <h2>
            <code>API</code> docs
          </h2>
          <p>
            <figcaption>&#8212;</figcaption>Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nemo consectetur odio quae maiores
            laborum at consequuntur hic facere velit sint officia et, reiciendis
            adipisci similique nostrum suscipit atque itaque eveniet? Nobis
            autem, optio, quia ab Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum impedit facere, assumenda cum ex pariatur
            corporis. Consectetur eum illo magni aut quam amet fuga error sequi
            dolorum eos, in iure. Molestias voluptate neque nihil dolore dolorem
            cumque autem ea cum maiores nisi vel corporis labore id possimus,
            nulla, nemo quod aspernatur aliquam nam, quibusdam a voluptatibus
            eos culpa? Nulla, culpa! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Odio, earum. Rem corrupti hic soluta quidem alias,
            aperiam provident exercitationem quam sed autem quo praesentium?
            Labore itaque commodi autem eos voluptate? Iure necessitatibus harum
            deserunt, reprehenderit numquam culpa quod unde nobis laboriosam
            expedita autem molestias quos veniam ducimus deleniti molestiae
            incidunt aliquam et reiciendis perspiciatis. Nobis aut animi in quos
            accusamus. Tempore magnam sequi similique voluptatibus eligendi,
            explicabo consequuntur harum nisi laboriosam molestiae fugiat
            aliquam porro libero rerum aspernatur, non, error officia labore
            mollitia dignissimos ea. Officiis, sit? Unde, maxime minima?
            assumenda ullam beatae inventore voluptatem iste illo doloremque ex
            tenetur soluta voluptates itaque earum blanditiis possimus sit
            fugit? Minus quod optio animi dolore aspernatur deleniti?
          </p>
          <div className="container" id="codeContainer">
            <Button color="secondary" id="animated-button">
              Visit on github to get code
            </Button>
            <div className="container" id="code-container"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Apidocs;
