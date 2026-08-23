import React from 'react';
const LABEL_27322 = 'component_27322';
export function Component27322({ value = 27322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27322, 'data-value': derived.doubled }, children);
}
export default Component27322;
