import React from 'react';
const LABEL_1475 = 'component_1475';
export function Component1475({ value = 1475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1475, 'data-value': derived.doubled }, children);
}
export default Component1475;
