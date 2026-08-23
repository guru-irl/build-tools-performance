import React from 'react';
const LABEL_10343 = 'component_10343';
export function Component10343({ value = 10343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10343, 'data-value': derived.doubled }, children);
}
export default Component10343;
