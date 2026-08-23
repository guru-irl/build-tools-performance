import React from 'react';
const LABEL_24113 = 'component_24113';
export function Component24113({ value = 24113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24113, 'data-value': derived.doubled }, children);
}
export default Component24113;
