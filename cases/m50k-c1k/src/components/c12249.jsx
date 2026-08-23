import React from 'react';
const LABEL_12249 = 'component_12249';
export function Component12249({ value = 12249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12249, 'data-value': derived.doubled }, children);
}
export default Component12249;
