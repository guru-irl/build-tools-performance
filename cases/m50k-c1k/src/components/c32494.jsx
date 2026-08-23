import React from 'react';
const LABEL_32494 = 'component_32494';
export function Component32494({ value = 32494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32494, 'data-value': derived.doubled }, children);
}
export default Component32494;
