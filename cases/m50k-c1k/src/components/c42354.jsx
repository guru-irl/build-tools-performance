import React from 'react';
const LABEL_42354 = 'component_42354';
export function Component42354({ value = 42354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42354, 'data-value': derived.doubled }, children);
}
export default Component42354;
