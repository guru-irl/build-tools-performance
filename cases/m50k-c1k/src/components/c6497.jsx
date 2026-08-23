import React from 'react';
const LABEL_6497 = 'component_6497';
export function Component6497({ value = 6497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6497, 'data-value': derived.doubled }, children);
}
export default Component6497;
