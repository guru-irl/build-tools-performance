import React from 'react';
const LABEL_9163 = 'component_9163';
export function Component9163({ value = 9163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9163, 'data-value': derived.doubled }, children);
}
export default Component9163;
