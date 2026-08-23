import React from 'react';
const LABEL_15380 = 'component_15380';
export function Component15380({ value = 15380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15380, 'data-value': derived.doubled }, children);
}
export default Component15380;
