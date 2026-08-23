import React from 'react';
const LABEL_22647 = 'component_22647';
export function Component22647({ value = 22647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22647, 'data-value': derived.doubled }, children);
}
export default Component22647;
