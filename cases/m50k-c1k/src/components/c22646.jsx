import React from 'react';
const LABEL_22646 = 'component_22646';
export function Component22646({ value = 22646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22646, 'data-value': derived.doubled }, children);
}
export default Component22646;
