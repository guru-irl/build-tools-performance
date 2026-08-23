import React from 'react';
const LABEL_35562 = 'component_35562';
export function Component35562({ value = 35562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35562, 'data-value': derived.doubled }, children);
}
export default Component35562;
