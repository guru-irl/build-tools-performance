import React from 'react';
const LABEL_21434 = 'component_21434';
export function Component21434({ value = 21434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21434, 'data-value': derived.doubled }, children);
}
export default Component21434;
