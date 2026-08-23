import React from 'react';
const LABEL_1284 = 'component_1284';
export function Component1284({ value = 1284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1284, 'data-value': derived.doubled }, children);
}
export default Component1284;
