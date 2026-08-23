import React from 'react';
const LABEL_22004 = 'component_22004';
export function Component22004({ value = 22004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22004, 'data-value': derived.doubled }, children);
}
export default Component22004;
