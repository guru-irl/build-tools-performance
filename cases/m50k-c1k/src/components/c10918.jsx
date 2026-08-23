import React from 'react';
const LABEL_10918 = 'component_10918';
export function Component10918({ value = 10918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10918, 'data-value': derived.doubled }, children);
}
export default Component10918;
