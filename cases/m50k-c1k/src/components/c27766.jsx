import React from 'react';
const LABEL_27766 = 'component_27766';
export function Component27766({ value = 27766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27766, 'data-value': derived.doubled }, children);
}
export default Component27766;
