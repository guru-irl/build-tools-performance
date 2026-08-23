import React from 'react';
const LABEL_35476 = 'component_35476';
export function Component35476({ value = 35476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35476, 'data-value': derived.doubled }, children);
}
export default Component35476;
