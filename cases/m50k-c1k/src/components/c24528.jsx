import React from 'react';
const LABEL_24528 = 'component_24528';
export function Component24528({ value = 24528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24528, 'data-value': derived.doubled }, children);
}
export default Component24528;
