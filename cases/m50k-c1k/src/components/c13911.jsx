import React from 'react';
const LABEL_13911 = 'component_13911';
export function Component13911({ value = 13911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13911, 'data-value': derived.doubled }, children);
}
export default Component13911;
