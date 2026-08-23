import React from 'react';
const LABEL_13562 = 'component_13562';
export function Component13562({ value = 13562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13562, 'data-value': derived.doubled }, children);
}
export default Component13562;
