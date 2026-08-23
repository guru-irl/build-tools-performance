import React from 'react';
const LABEL_24101 = 'component_24101';
export function Component24101({ value = 24101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24101, 'data-value': derived.doubled }, children);
}
export default Component24101;
