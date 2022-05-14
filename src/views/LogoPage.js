import "../styles/logo.css";
import Header from "../components/Header";
import barber from "../categories/barbar";
import software from "../categories/software";
import beauty from "../categories/beauty";
import fitness from "../categories/fitness";
import photography from "../categories/photography";
import pet from "../categories/pet";
import { useState } from "react";
const LogoPage = () => {
  const categories = {
    barber,
    Software: software,
    Beauty: beauty,
    Fitness: fitness,
    Photography: photography,
    Pet: pet,
  };
  const [category, setCategory] = useState(null);
  const [name, setName] = useState(null);
  const [step, setStep] = useState({ step: 1, final: 0 });
  const [reset,setReset] = useState(false);

  function handleReset()
  {
      setCategory(null);
      setName(null);
      setStep({ step: 1, final: 0 });;
      setReset(false)
  }
  function handleCategory(e) {
    const value = e.target.value;
    if (category === value) setCategory(null);
    else setCategory(value);
  }

  function handleInput(e) {
    const value = e.target.value;
    if (value.length <= 15) {
      if (value !== "") setName(value);
      else setName(null);
    }
  }

  function updateStep() {
    if (category && !name && step.step === 1) setStep({ ...step, step: step.step + 1 });
    if (category && name && step.step === 2) 
    {
        setStep({ ...step, final: 1 });
        setReset(true);
    }
  }

  return (
    <div className="logo-main">
      <Header />

      {step.step === 1 && (
        <div className="select-category">
          <div className="content">
            <div className="content-data">
              <h2 className="heading">Pick your category</h2>
              <h2 className="title">
                Knowing your industry will help us pick symbols, colors, and
                more.
              </h2>
            </div>
            <div className="logo-btn">
              <button
                className={category ? "btn-submit" : "btn-submit disable"}
                onClick={updateStep}
              >
                Continue
              </button>
            </div>
          </div>

          {/* category-list */}

          <div className="category-list">
            <div className="list">
              <button
                className={category === "barber" ? "active" : ""}
                onClick={handleCategory}
                value="barber"
              >
                Salon
              </button>
              <button
                className={category === "Beauty" ? "active" : ""}
                onClick={handleCategory}
                value="Beauty"
              >
                Beauty
              </button>
              <button
                className={category === "Fitness" ? "active" : ""}
                onClick={handleCategory}
                value="Fitness"
              >
                Fitness
              </button>
              <button
                className={category === "Photography" ? "active" : ""}
                onClick={handleCategory}
                value="Photography"
              >
                photography
              </button>
              <button
                className={category === "Pet" ? "active" : ""}
                onClick={handleCategory}
                value="Pet"
              >
                Pet
              </button>
              <button
                className={category === "Software" ? "active" : ""}
                onClick={handleCategory}
                value="Software"
              >
                Software
              </button>
            </div>
          </div>
          {/* end category-list */}
        </div>
      )}
      {step.step === 2 && (
        <div className="select-name">
          <div className="content">
            <div className="content-data">
              <h2 className="heading">Enter your company name</h2>
              <h2 className="title">You can always change these later.</h2>
            </div>
            <div className="logo-btn">
                
            <button
                className="btn-submit" style={{visibility: reset?'visible':'hidden'}} onClick={handleReset}
              >
                Reset
              </button>

              <button
                className={name ? "btn-submit" : "btn-submit disable"}
                onClick={updateStep}
              >
                Continue
              </button>
            </div>
          </div>
          <div className="input-type">
            <input
              type="text"
              placeholder="Enter Company name"
              onChange={handleInput}
              defaultValue={name}
              maxLength="15"
            />
          </div>
        </div>
      )}

      {step.final === 1 && (
        <div className="logo-list">
          <div className="card-layout">
            {categories[category].map((data) => {
              return (
                <div
                  className="card"
                  style={{
                    backgroundImage: data.background,
                  }}
                  key={data.id}
                >
                  <div className="card-in" style={{ flexDirection: data.s }}>
                    <img src={data.icon} alt="img" />
                    <h1
                      style={{
                        fontFamily: data.style,
                        fontSize: data.size,
                        color: data.color,
                        textAlign: "center",
                        textTransform: "uppercase",
                      }}
                    >
                      {name}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoPage;
