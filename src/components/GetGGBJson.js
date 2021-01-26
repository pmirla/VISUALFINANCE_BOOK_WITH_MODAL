import React from "react";
import useFetchData from "./UseFetchData";
import GeogebraComponent from "./GeogebraComponent";

const GetGGBJson = ({ jsonUrl, ggbParameters, appId }) => {
  const [{ data, isLoading, isError }] = useFetchData({
    initialFetchUrl: jsonUrl
  });

  if (!isLoading)
    if (typeof data.res !== "undefined") {
      var ggbBase64 = data.res;
      var updatedParameters = {
        ...ggbParameters,
        ggbBase64
      };
    }
  return (
    <>
      {isError && <p>Something went wrong...</p>}
      {isLoading ? (
        <p>Loading Applet</p>
      ) : (
        <>
          <GeogebraComponent
            count={0}
            id={appId}
            newParameters={updatedParameters}
          />
        </>
      )}
    </>
  );
};

export default GetGGBJson;
