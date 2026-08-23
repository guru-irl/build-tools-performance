import React from 'react';
const LABEL_24784 = 'component_24784';
export function Component24784({ value = 24784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24784, 'data-value': derived.doubled }, children);
}
export default Component24784;
