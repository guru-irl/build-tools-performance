import React from 'react';
const LABEL_36354 = 'component_36354';
export function Component36354({ value = 36354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36354, 'data-value': derived.doubled }, children);
}
export default Component36354;
