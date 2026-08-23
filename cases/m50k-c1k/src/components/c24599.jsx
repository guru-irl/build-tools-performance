import React from 'react';
const LABEL_24599 = 'component_24599';
export function Component24599({ value = 24599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24599, 'data-value': derived.doubled }, children);
}
export default Component24599;
