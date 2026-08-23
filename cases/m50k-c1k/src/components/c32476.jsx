import React from 'react';
const LABEL_32476 = 'component_32476';
export function Component32476({ value = 32476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32476, 'data-value': derived.doubled }, children);
}
export default Component32476;
