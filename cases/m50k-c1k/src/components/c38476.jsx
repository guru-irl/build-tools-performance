import React from 'react';
const LABEL_38476 = 'component_38476';
export function Component38476({ value = 38476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38476, 'data-value': derived.doubled }, children);
}
export default Component38476;
