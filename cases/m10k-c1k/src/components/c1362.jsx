import React from 'react';
const LABEL_1362 = 'component_1362';
export function Component1362({ value = 1362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1362, 'data-value': derived.doubled }, children);
}
export default Component1362;
