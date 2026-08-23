import React from 'react';
const LABEL_1378 = 'component_1378';
export function Component1378({ value = 1378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1378, 'data-value': derived.doubled }, children);
}
export default Component1378;
