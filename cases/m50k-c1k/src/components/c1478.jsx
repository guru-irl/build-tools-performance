import React from 'react';
const LABEL_1478 = 'component_1478';
export function Component1478({ value = 1478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1478, 'data-value': derived.doubled }, children);
}
export default Component1478;
