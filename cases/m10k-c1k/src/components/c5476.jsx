import React from 'react';
const LABEL_5476 = 'component_5476';
export function Component5476({ value = 5476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5476, 'data-value': derived.doubled }, children);
}
export default Component5476;
