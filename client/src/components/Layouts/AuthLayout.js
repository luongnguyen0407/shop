import ErrorFallback from "components/common/ErrorFallback";
import React, { useEffect } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AuthLayout = ({ children }) => {
  const { curentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (curentUser.accessToken) {
      navigate(-1);
    }
  }, [navigate, curentUser]);
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-auth_bg">
      <div className="w-3/4 grid grid-cols-2 h-[450px] 2xl:h-[550px] 2xl:w-2/4 overflow-hidden rounded-3xl ">
        <div>
          <img
            className="block object-cover w-full h-full"
            src="/auth.jpg"
            alt=""
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default withErrorBoundary(AuthLayout, {
  FallbackComponent: ErrorFallback,
});
