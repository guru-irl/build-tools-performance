import React from 'react';
const LABEL_33063 = 'component_33063';
export function Component33063({ value = 33063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33063, 'data-value': derived.doubled }, children);
}
export default Component33063;
