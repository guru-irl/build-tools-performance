import React from 'react';
const LABEL_7476 = 'component_7476';
export function Component7476({ value = 7476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7476, 'data-value': derived.doubled }, children);
}
export default Component7476;
