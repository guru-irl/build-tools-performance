import React from 'react';
const LABEL_27314 = 'component_27314';
export function Component27314({ value = 27314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27314, 'data-value': derived.doubled }, children);
}
export default Component27314;
