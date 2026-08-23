import React from 'react';
const LABEL_24469 = 'component_24469';
export function Component24469({ value = 24469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24469, 'data-value': derived.doubled }, children);
}
export default Component24469;
