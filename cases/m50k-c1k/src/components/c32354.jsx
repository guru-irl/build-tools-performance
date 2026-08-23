import React from 'react';
const LABEL_32354 = 'component_32354';
export function Component32354({ value = 32354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32354, 'data-value': derived.doubled }, children);
}
export default Component32354;
