import React from 'react';
const LABEL_10476 = 'component_10476';
export function Component10476({ value = 10476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10476, 'data-value': derived.doubled }, children);
}
export default Component10476;
