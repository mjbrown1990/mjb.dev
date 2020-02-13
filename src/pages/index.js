import React from "react";
import "../styles/styles.scss";

export default () => (
    <div className="maintenance">
        <div className="maintenance__message">
            <h1>Maintenance!</h1>
            <p>This website is being refreshed.</p>
            <a href="mailto:hello@mjb.dev" class="btn btn--cta">
                Email Me
            </a>
        </div>
    </div>
);
