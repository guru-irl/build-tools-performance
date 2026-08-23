import React from 'react';
const LABEL_16562 = 'component_16562';
export function Component16562({ value = 16562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16562, 'data-value': derived.doubled }, children);
}
export default Component16562;
