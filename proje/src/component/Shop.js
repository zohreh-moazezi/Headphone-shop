import React from "react";

const Shop = ({ productItems, handleAddProduct }) => {
  var PARTICLE_NUM = 500;
  var PARTICLE_BASE_RADIUS = 0.5;
  var FL = 500;
  var DEFAULT_SPEED = 2;

  var canvas;
  var canvasWidth, canvasHeight;
  var context;
  var centerX, centerY;
  var mouseX, mouseY;
  var speed = DEFAULT_SPEED;
  var particles = [];

  window.addEventListener(
    "load",
    function () {
      canvas = document.getElementById("c");

      var resize = function () {
        canvasWidth = canvas.width = window.innerWidth;
        canvasHeight = canvas.height = window.innerHeight;
        centerX = canvasWidth * 0.5;
        centerY = canvasHeight * 0.5;
        context = canvas.getContext("2d");
        context.fillStyle = "rgb(255, 255, 255)";
      };

      document.addEventListener("resize", resize);
      resize();

      mouseX = centerX;
      mouseY = centerY;

      for (var i = 0, p; i < PARTICLE_NUM; i++) {
        particles[i] = randomizeParticle(new Particle());
        particles[i].z -= 500 * Math.random();
      }

      setInterval(loop, 1000 / 60);
    },
    false
  );

  function loop() {
    context.save();
    context.fillStyle = "rgb(0, 0, 0)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.restore();

    var p;
    var cx, cy;
    var rx, ry;
    var f, x, y, r;
    var pf, px, py, pr;
    var a, a1, a2;

    var halfPi = Math.PI * 0.5;
    var atan2 = Math.atan2;
    var cos = Math.cos;
    var sin = Math.sin;

    context.beginPath();
    for (var i = 0; i < PARTICLE_NUM; i++) {
      p = particles[i];

      p.pastZ = p.z;
      p.z -= speed;

      if (p.z <= 0) {
        randomizeParticle(p);
        continue;
      }

      cx = centerX - (mouseX - centerX) * 1.25;
      cy = centerY - (mouseY - centerY) * 1.25;

      rx = p.x - cx;
      ry = p.y - cy;

      f = FL / p.z;
      x = cx + rx * f;
      y = cy + ry * f;
      r = PARTICLE_BASE_RADIUS * f;

      pf = FL / p.pastZ;
      px = cx + rx * pf;
      py = cy + ry * pf;
      pr = PARTICLE_BASE_RADIUS * pf;

      a = atan2(py - y, px - x);
      a1 = a + halfPi;
      a2 = a - halfPi;

      context.moveTo(px + pr * cos(a1), py + pr * sin(a1));
      context.arc(px, py, pr, a1, a2, true);
      context.lineTo(x + r * cos(a2), y + r * sin(a2));
      context.arc(x, y, r, a2, a1, true);
      context.closePath();
    }
    context.fill();
  }

  function randomizeParticle(p) {
    p.x = Math.random() * canvasWidth;
    p.y = Math.random() * canvasHeight;
    p.z = Math.random() * 1500 + 500;
    return p;
  }

  /**
   * Particle
   */
  function Particle(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.pastZ = 0;
  }

  return (
    <div className="shop" id="shop">
      <canvas id="c"></canvas>
      {productItems.map((productItem) => (
        <div className="cards" key={productItem.id} data-aos="flip-down">
          <div className="content">
            <div>
              <img src={productItem.thumb} alt="1" className="image_box" />
            </div>
            <div className="details">
              <h4 className="name">{productItem.product_name}</h4>
              <p className="description">{productItem.description}</p>
              <p className="price">
                {productItem.price}
                <span>{productItem.currency}</span>
              </p>
            </div>
          </div>

          <button
            className="btn"
            onClick={() => {
              handleAddProduct(productItem);
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
