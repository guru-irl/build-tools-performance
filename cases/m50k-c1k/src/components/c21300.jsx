import React from 'react';
const LABEL_21300 = 'component_21300';
export function Component21300({ value = 21300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21300, 'data-value': derived.doubled }, children);
}
export default Component21300;
