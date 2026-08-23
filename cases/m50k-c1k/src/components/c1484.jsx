import React from 'react';
const LABEL_1484 = 'component_1484';
export function Component1484({ value = 1484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1484, 'data-value': derived.doubled }, children);
}
export default Component1484;
