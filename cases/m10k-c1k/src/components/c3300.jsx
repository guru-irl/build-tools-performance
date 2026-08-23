import React from 'react';
const LABEL_3300 = 'component_3300';
export function Component3300({ value = 3300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3300, 'data-value': derived.doubled }, children);
}
export default Component3300;
