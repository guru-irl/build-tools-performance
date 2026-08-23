import React from 'react';
const LABEL_15163 = 'component_15163';
export function Component15163({ value = 15163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15163, 'data-value': derived.doubled }, children);
}
export default Component15163;
