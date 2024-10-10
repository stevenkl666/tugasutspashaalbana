import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gambar1 from "../img/k.jpg";
import gambar2 from "../img/n.jpg";
import "../style/Home.css";
function Home() {
  const [post, setPost] = useState({
    name: "",
  });
  const [data, setData] = useState();

  async function getUser() {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function getProduk() {
    try {
      const response = await axios.get("http://localhost:3000/produk");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    if (!post.name) {
      alert("Isi form data dengan lengkap");
      return;
    }

    createItem(post)
      .then((res) => {
        console.log(res);
        if (post) {
          alert("Table successfully created, please refresh the page!");
        }
        closeModal();
        return res.data;
      })
      .catch((error) => {
        console.error("Error :", error);
        alert(
          "An error occurred while creating Table. Please try again later."
        );
      });
  };

  const handle = (e) => {
    const newPost = { ...post };
    newPost[e.target.id] = e.target.value;
    setPost(newPost);
  };
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <section id="home">
          <div
            className="wrapper"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", // Memastikan elemen mengambil tinggi penuh viewport
            }}
          >
            <section
              className="home"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                padding: "2rem",
              }}
            >
              <div
                className="home-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h1
                  style={{
                    fontSize: "2.5rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  Welcome to Vape Store Jodi
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#666",
                    marginBottom: "2rem",
                  }}
                >
                  Discover the best vaping experience with our premium products
                </p>
                <a
                  href="#products"
                  className="cta-button"
                  style={{
                    padding: "0.8rem 1.5rem",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                    fontSize: "1.1rem",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Shop Now
                </a>
              </div>
            </section>
          </div>
        </section>
      </div>
      <section
        id="produk"
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          className="wrapper"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              color: "#333",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Our Products
          </h2>
          <div
            className="product-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Product Item 1 */}
            <div
              className="product-item"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "1rem",
                textAlign: "center",
                maxWidth: "300px", // Menjaga ukuran card tetap proporsional
                margin: "1rem auto", // Menjaga card berada di tengah
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px", // Atur tinggi yang konsisten
                  overflow: "hidden", // Untuk memastikan gambar tidak melampaui card
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={gambar1}
                  alt="Product 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                Product 1
              </h3>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                Description of Product 1
              </p>
              <button
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>

            {/* Product Item 2 */}
            <div
              className="product-item"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "1rem",
                textAlign: "center",
                maxWidth: "300px",
                margin: "1rem auto",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={gambar2}
                  alt="Product 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                Product 2
              </h3>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                Description of Product 2
              </p>
              <button
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>

            {/* Add more product items as needed */}
          </div>
        </div>
      </section>
      <section
        id="contact"
        style={{
          padding: "4rem 0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "2rem",
              color: "#333",
            }}
          >
            Contact Us
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1 1 300px",
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#444",
                }}
              >
                Get in Touch
              </h3>
              <p
                style={{
                  color: "#666",
                  marginBottom: "1rem",
                }}
              >
                Have questions? We're here to help!
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Email:</strong> info@vapestorejodi.com
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Phone:</strong> +62 123 456 7890
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Address:</strong> 123 Vape Street, Jakarta, Indonesia
                </li>
              </ul>
            </div>
            <div
              style={{
                flex: "1 1 300px",
              }}
            >
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    marginBottom: "1rem",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    marginBottom: "1rem",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  style={{
                    marginBottom: "1rem",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "0.75rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tentang kami"
        style={{
          padding: "4rem 0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "2.5rem",
              color: "#333",
            }}
          >
            Tentang Kami
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#666",
                textAlign: "center",
                maxWidth: "800px",
              }}
            >
              Vape Store Jodi adalah toko vape terpercaya yang menyediakan
              berbagai produk vaping berkualitas tinggi. Kami berkomitmen untuk
              memberikan pengalaman berbelanja yang terbaik bagi para pelanggan
              kami, dengan fokus pada kualitas produk, layanan pelanggan yang
              unggul, dan harga yang kompetitif.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "250px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#4CAF50",
                    marginBottom: "1rem",
                  }}
                >
                  Visi
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                  }}
                >
                  Menjadi toko vape terdepan yang menyediakan produk berkualitas
                  dan inovatif untuk komunitas vaping.
                </p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "250px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#4CAF50",
                    marginBottom: "1rem",
                  }}
                >
                  Misi
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                  }}
                >
                  Memberikan layanan terbaik, edukasi yang tepat, dan produk
                  berkualitas untuk memenuhi kebutuhan pelanggan kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
