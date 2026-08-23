import React from 'react';
const LABEL_20396 = 'component_20396';
export function Component20396({ value = 20396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20396, 'data-value': derived.doubled }, children);
}
export default Component20396;
