import React from 'react';
const LABEL_23476 = 'component_23476';
export function Component23476({ value = 23476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23476, 'data-value': derived.doubled }, children);
}
export default Component23476;
