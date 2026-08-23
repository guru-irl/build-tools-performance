import React from 'react';
const LABEL_1434 = 'component_1434';
export function Component1434({ value = 1434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1434, 'data-value': derived.doubled }, children);
}
export default Component1434;
