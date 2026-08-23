import React from 'react';
const LABEL_42476 = 'component_42476';
export function Component42476({ value = 42476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42476, 'data-value': derived.doubled }, children);
}
export default Component42476;
