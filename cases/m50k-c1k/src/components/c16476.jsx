import React from 'react';
const LABEL_16476 = 'component_16476';
export function Component16476({ value = 16476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16476, 'data-value': derived.doubled }, children);
}
export default Component16476;
