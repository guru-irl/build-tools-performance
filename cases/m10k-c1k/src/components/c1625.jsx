import React from 'react';
const LABEL_1625 = 'component_1625';
export function Component1625({ value = 1625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1625, 'data-value': derived.doubled }, children);
}
export default Component1625;
