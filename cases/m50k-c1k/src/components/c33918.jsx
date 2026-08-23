import React from 'react';
const LABEL_33918 = 'component_33918';
export function Component33918({ value = 33918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33918, 'data-value': derived.doubled }, children);
}
export default Component33918;
