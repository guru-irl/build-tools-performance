import React from 'react';
const LABEL_27416 = 'component_27416';
export function Component27416({ value = 27416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27416, 'data-value': derived.doubled }, children);
}
export default Component27416;
