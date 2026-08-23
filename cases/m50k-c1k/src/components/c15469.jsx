import React from 'react';
const LABEL_15469 = 'component_15469';
export function Component15469({ value = 15469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15469, 'data-value': derived.doubled }, children);
}
export default Component15469;
