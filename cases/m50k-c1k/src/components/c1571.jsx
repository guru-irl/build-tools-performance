import React from 'react';
const LABEL_1571 = 'component_1571';
export function Component1571({ value = 1571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1571, 'data-value': derived.doubled }, children);
}
export default Component1571;
