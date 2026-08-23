import React from 'react';
const LABEL_40476 = 'component_40476';
export function Component40476({ value = 40476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40476, 'data-value': derived.doubled }, children);
}
export default Component40476;
