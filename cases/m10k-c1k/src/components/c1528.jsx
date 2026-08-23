import React from 'react';
const LABEL_1528 = 'component_1528';
export function Component1528({ value = 1528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1528, 'data-value': derived.doubled }, children);
}
export default Component1528;
