import React from 'react';
const LABEL_1650 = 'component_1650';
export function Component1650({ value = 1650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1650, 'data-value': derived.doubled }, children);
}
export default Component1650;
