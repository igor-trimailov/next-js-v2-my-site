"use client";

import { delay } from "@/lib/delay";
import HeaderLink from "./HeaderLink";
import Button from "./Button";

const Header = async () => {
    await delay(5000);

    return (
        <header>
            logo
            <div>
                <HeaderLink />
                <Button text={"testing a red button"} />
            </div>
        </header>
    );
};

export default Header;
