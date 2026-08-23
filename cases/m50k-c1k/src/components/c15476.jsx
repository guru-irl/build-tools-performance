import React from 'react';
const LABEL_15476 = 'component_15476';
export function Component15476({ value = 15476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15476, 'data-value': derived.doubled }, children);
}
export default Component15476;
