import React from 'react';
const LABEL_38562 = 'component_38562';
export function Component38562({ value = 38562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38562, 'data-value': derived.doubled }, children);
}
export default Component38562;
