//Ant Design
import { ConfigProvider } from "antd";
import { purple } from "@ant-design/colors";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";

//Contexts
import { ContextProvider } from "./context/global";
import { AuthProvider } from "./context/authContext";

//Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./util/ProtectedRoute";
import NavLayout from "./util/NavLayout";
import WithoutNavLayout from "./util/WithoutNavLayout";

//Pages
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import NewCustomerPage from "./pages/NewCustomerPage";

//Components

function App() {
  return (
    <>
      <AuthProvider>
        <ContextProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: purple[5],
                colorBgLayout: "#fff",
              },
            }}
          >
            <BrowserRouter>
              <Layout style={{ height: "100vh", overflowX: "hidden" }}>
                <Content>
                  <Routes>
                    <Route element={<WithoutNavLayout />}>
                      <Route path="/" element={<LoginPage />} />
                    </Route>
                    <Route element={<NavLayout />}>
                      <Route
                        path="/home"
                        element={
                          <ProtectedRoute>
                            <>
                              <HomePage />
                            </>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/customers/add"
                        element={
                          <ProtectedRoute>
                            <NewCustomerPage />
                          </ProtectedRoute>
                        }
                      />

                      <Route
                        path="/products"
                        element={
                          <ProtectedRoute>
                            <ProductsPage />
                          </ProtectedRoute>
                        }
                      />

                      {/* <Route path="/customers" element={<CustomersPage />} /> */}
                      {/*      <Route path="/" element={<Home />} />
            <Route path="/purchaseOrders" element={<PurchaseOrders />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/products" element={<Products />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="*" element={<Home />} /> */}
                    </Route>
                  </Routes>
                </Content>
              </Layout>
            </BrowserRouter>
          </ConfigProvider>
        </ContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
