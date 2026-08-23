import React from 'react';
const LABEL_27893 = 'component_27893';
export function Component27893({ value = 27893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27893, 'data-value': derived.doubled }, children);
}
export default Component27893;
