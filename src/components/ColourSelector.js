import React from 'react';

const ColourSelector = (props) => {
  const { config,  chn_bck } = props
  const { background } = config;

  //console.log(config.label);
  return (
    <button className={config.classname} onClick={() =>  chn_bck(background)}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
