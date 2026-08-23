import React from 'react';
const LABEL_22464 = 'component_22464';
export function Component22464({ value = 22464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22464, 'data-value': derived.doubled }, children);
}
export default Component22464;
