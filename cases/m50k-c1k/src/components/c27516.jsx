import React from 'react';
const LABEL_27516 = 'component_27516';
export function Component27516({ value = 27516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27516, 'data-value': derived.doubled }, children);
}
export default Component27516;
