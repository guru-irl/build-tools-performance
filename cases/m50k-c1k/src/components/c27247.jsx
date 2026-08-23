import React from 'react';
const LABEL_27247 = 'component_27247';
export function Component27247({ value = 27247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27247, 'data-value': derived.doubled }, children);
}
export default Component27247;
