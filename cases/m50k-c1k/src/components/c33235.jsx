import React from 'react';
const LABEL_33235 = 'component_33235';
export function Component33235({ value = 33235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33235, 'data-value': derived.doubled }, children);
}
export default Component33235;
