import React from 'react';
const LABEL_27029 = 'component_27029';
export function Component27029({ value = 27029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27029, 'data-value': derived.doubled }, children);
}
export default Component27029;
