import React, { useState } from "react"

export default function Contact() {
    const [contactForm, setContactForm] = useState({
        vezeteknev: "",
        keresztnev: "",
        email: "",
        rendeles_azon: "",
        uzenet: "",
        feltetel: false
    })

    const onChangeHandler = (event) => {
        const value = event.target.type === "checkbox" ? event.target.isChecked : event.target.value
        setContactForm({
            ...contactForm,
            [event.target.name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        //TODO Submit form to server
    }


    return (
        <div className="page-body">
            <div className="breadcomb">
                <div className="breadcomb-top">Főoldal</div>
                <div className="breadcomb-bottom lighter">Kapcsolat</div>
            </div>
            <div className="divider"></div>
            <p>További kérdése van, részleges tájékoztatásra van szűksége? Írjon nekünk, keresse munkatársainkat!</p>
            <form className="contact-form-container" onSubmit={submitHandler}>
                <div className="form-data contact">
                    <div className="wrapper">
                        <div className="input-data">
                            <input
                                type="text"
                                name="vezeteknev"
                                value={contactForm.vezeteknev}
                                onChange={onChangeHandler}
                                required
                            ></input>
                            <div className="underline">
                            </div>
                            <label>Vezetéknév</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input
                                type="text"
                                name="keresztnev"
                                value={contactForm.keresztnev}
                                onChange={onChangeHandler}
                                required
                            ></input>
                            <div className="underline">
                            </div>
                            <label>Keresztnév</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input
                                type="email"
                                name="email"
                                value={contactForm.email}
                                onChange={onChangeHandler}
                                required
                            ></input>
                            <div className="underline">
                            </div>
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input
                                type="text"
                                name="rendeles_azon"
                                value={contactForm.rendeles_azon}
                                onChange={onChangeHandler}
                            ></input>
                            <div className="underline">
                            </div>
                            <label>Rendelés azonosító</label>
                        </div>
                    </div>
                    <div className="wrapper textarea">
                        <div className="input-data textarea">
                            <textarea
                                type="text"
                                name="uzenet"
                                rows="4"
                                value={contactForm.uzenet}
                                onChange={onChangeHandler}
                                required
                            ></textarea >
                            <div className="underline">
                            </div>
                            <label>Üzenet</label>
                        </div>
                    </div>

                </div>
                <div className="form-data-button">
                    <label className="adatv_checkbox"><input name="adatvedelmi_nyilatkozat" type="checkbox" value={contactForm.feltetel}></input>Elfogadom az <a href="#">Adatvédelmi Nyilatkozat</a>ot.</label>
                    <button className="beni-button">Küldés</button>
                </div>
            </form>
        </div>
    )
}