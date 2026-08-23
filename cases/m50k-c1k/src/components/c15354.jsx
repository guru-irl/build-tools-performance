import React from 'react';
const LABEL_15354 = 'component_15354';
export function Component15354({ value = 15354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15354, 'data-value': derived.doubled }, children);
}
export default Component15354;
