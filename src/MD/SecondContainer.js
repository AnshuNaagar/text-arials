import React, { useState } from "react";
import "./SecondContainer.css";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
export default function SecondContainer(props) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fill-rule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <section className="container-First_container my-5" id="first-container">
        <div className="container">
          <h1>For a developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            temporibus, ratione odio sit, corrupti est nihil, quasi eum possimus
            voluptatem assumenda fuga error. Sint perspiciatis doloremque
            quaerat doloribus vitae expedita. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eligendi dolor doloremque vero
            molestias totam eveniet consequuntur. Sit veritatis consequatur,
            nesciunt possimus quas mollitia ut tempora. Ea, reprehenderit. Sunt,
            sed at. Facere quas repellendus officiis, earum inventore,
            dignissimos magnam, explicabo optio doloremque saepe provident
            dolorum obcaecati. Recusandae suscipit sapiente, voluptate
            repellendus doloribus tenetur eaque quae, voluptates dignissimos
            veniam necessitatibus accusamus sit? Dicta placeat quisquam fugiat
            nihil itaque dolorem exercitationem repellendus impedit autem,
            recusandae fugit laboriosam, quibusdam saepe, voluptatum quo odio et
            dolorum voluptatem? Perspiciatis tempora tempore, consequatur ab
            asperiores non obcaecati? Consequatur nihil quod officiis at hic,
            quam culpa quia fugiat a dicta quibusdam sint ullam deserunt in
            reprehenderit sed quaerat et blanditiis alias dignissimos. Porro
            iusto at amet quas ad. Eius mollitia velit impedit, libero, iusto
            repellendus expedita iste qui, pariatur soluta corporis similique!
            Incidunt, quod distinctio hic consequuntur magni quaerat excepturi
            laborum. Illum nihil, illo voluptates eaque aspernatur quaerat!
            <br />
            <h3 className="my-5">Basic DEV forum Under Development</h3>
          </p>
          <Button onClick={handleClick} varinat="contained" id="look-btn">
            Start to read someting else..
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Sorry, we are currently in development"
            action={action}
          />
        </div>
      </section>
      <div className="container" id="footer">
        <div className="container" id="footer">
          <p>Under development</p>
          <p>Copyright under 1917 article . All rights reserved</p>
          <p className="disabled">Builded by anshu</p>
        </div>
      </div>
    </>
  );
}
