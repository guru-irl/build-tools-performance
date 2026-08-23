import React from 'react';
const LABEL_22350 = 'component_22350';
export function Component22350({ value = 22350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22350, 'data-value': derived.doubled }, children);
}
export default Component22350;
