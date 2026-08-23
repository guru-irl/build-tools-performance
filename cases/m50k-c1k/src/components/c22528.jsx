import React from 'react';
const LABEL_22528 = 'component_22528';
export function Component22528({ value = 22528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22528, 'data-value': derived.doubled }, children);
}
export default Component22528;
