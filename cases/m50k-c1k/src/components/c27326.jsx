import React from 'react';
const LABEL_27326 = 'component_27326';
export function Component27326({ value = 27326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27326, 'data-value': derived.doubled }, children);
}
export default Component27326;
