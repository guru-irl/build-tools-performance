import React from 'react';
const LABEL_27836 = 'component_27836';
export function Component27836({ value = 27836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27836, 'data-value': derived.doubled }, children);
}
export default Component27836;
