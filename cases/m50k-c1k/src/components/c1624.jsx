import React from 'react';
const LABEL_1624 = 'component_1624';
export function Component1624({ value = 1624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1624, 'data-value': derived.doubled }, children);
}
export default Component1624;
