import React from 'react';
const LABEL_27685 = 'component_27685';
export function Component27685({ value = 27685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27685, 'data-value': derived.doubled }, children);
}
export default Component27685;
