import React from 'react';
const LABEL_27762 = 'component_27762';
export function Component27762({ value = 27762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27762, 'data-value': derived.doubled }, children);
}
export default Component27762;
