import React from 'react';
const LABEL_15252 = 'component_15252';
export function Component15252({ value = 15252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15252, 'data-value': derived.doubled }, children);
}
export default Component15252;
