import React from 'react';
const LABEL_22002 = 'component_22002';
export function Component22002({ value = 22002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22002, 'data-value': derived.doubled }, children);
}
export default Component22002;
