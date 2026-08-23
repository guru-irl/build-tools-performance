import React from 'react';
const LABEL_3811 = 'component_3811';
export function Component3811({ value = 3811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3811, 'data-value': derived.doubled }, children);
}
export default Component3811;
