import React from 'react';
const LABEL_1917 = 'component_1917';
export function Component1917({ value = 1917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1917, 'data-value': derived.doubled }, children);
}
export default Component1917;
