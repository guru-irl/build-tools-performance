import React from 'react';
const LABEL_7123 = 'component_7123';
export function Component7123({ value = 7123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7123, 'data-value': derived.doubled }, children);
}
export default Component7123;
