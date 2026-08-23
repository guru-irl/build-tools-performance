import React from 'react';
const LABEL_23354 = 'component_23354';
export function Component23354({ value = 23354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23354, 'data-value': derived.doubled }, children);
}
export default Component23354;
