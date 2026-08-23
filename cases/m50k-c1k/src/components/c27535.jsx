import React from 'react';
const LABEL_27535 = 'component_27535';
export function Component27535({ value = 27535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27535, 'data-value': derived.doubled }, children);
}
export default Component27535;
