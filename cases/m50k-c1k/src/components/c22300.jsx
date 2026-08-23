import React from 'react';
const LABEL_22300 = 'component_22300';
export function Component22300({ value = 22300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22300, 'data-value': derived.doubled }, children);
}
export default Component22300;
