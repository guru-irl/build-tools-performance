import React from 'react';
const LABEL_28830 = 'component_28830';
export function Component28830({ value = 28830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28830, 'data-value': derived.doubled }, children);
}
export default Component28830;
