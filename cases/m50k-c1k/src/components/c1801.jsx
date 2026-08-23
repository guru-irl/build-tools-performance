import React from 'react';
const LABEL_1801 = 'component_1801';
export function Component1801({ value = 1801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1801, 'data-value': derived.doubled }, children);
}
export default Component1801;
