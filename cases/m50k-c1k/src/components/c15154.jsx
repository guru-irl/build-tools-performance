import React from 'react';
const LABEL_15154 = 'component_15154';
export function Component15154({ value = 15154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15154, 'data-value': derived.doubled }, children);
}
export default Component15154;
