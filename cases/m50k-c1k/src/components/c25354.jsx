import React from 'react';
const LABEL_25354 = 'component_25354';
export function Component25354({ value = 25354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25354, 'data-value': derived.doubled }, children);
}
export default Component25354;
