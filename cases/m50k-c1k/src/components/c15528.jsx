import React from 'react';
const LABEL_15528 = 'component_15528';
export function Component15528({ value = 15528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15528, 'data-value': derived.doubled }, children);
}
export default Component15528;
