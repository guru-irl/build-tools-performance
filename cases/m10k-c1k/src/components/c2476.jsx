import React from 'react';
const LABEL_2476 = 'component_2476';
export function Component2476({ value = 2476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2476, 'data-value': derived.doubled }, children);
}
export default Component2476;
