import React from "react";

const packageInfo = require("../package.json");

export function VersionInfo() {
  return (
    <>
    Current library version: {packageInfo.version}
    </>
    )
  }

export function SpacingSet({spaces}){

    const groupBy = keys => array =>
      array.reduce((objectsByKeyValue, obj) => {
        const value = keys.map(key => obj[key]).join('-');
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
      }, {});    

    const getSizes = (arr) => {
        return arr.reduce((res, obj) => {
        const size = obj[0].split('space')[1];
        if (res.indexOf(size) === -1 ) res.push(size);
        return res;
      }, []);
    }

    const spaceSizes = getSizes(Object.entries(spaces));
    
    console.log(spaceSizes);

    return (
      <div>{spaceSizes.map(size => <SpacingBox key={size} size={size} spaces={spaces[`space${size}`]} spaceVar={`spacingSpace${size}`} />)}</div>
    )
}

const SpacingBoxStyled = styled.div`
  margin-bottom: 2em;
`;

const SpacingUnitHolder = styled.div`
  width: 50px;
  display: inline-block;
`;

const SpacingUnit = styled.div`
  width: ${({size}) => size};
  height: ${({size}) => size};
  display: inline-block;
  background-color: ${colors.secondary200};
  border: 1px solid red;
`;

export function SpacingBox({spaces, spaceVar}) {
  return(
    <SpacingBoxStyled>
      <SpacingUnitHolder>
        <SpacingUnit size={`${spaces.top}px`}/>
      </SpacingUnitHolder>
      <code>Variables: {Object.entries(spaces).map(item => `${spaceVar}.$item[0]`).join()}</code>
    </SpacingBoxStyled>
  )
}