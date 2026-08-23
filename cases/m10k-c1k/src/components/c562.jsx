import React from 'react';
const LABEL_562 = 'component_562';
export function Component562({ value = 562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_562, 'data-value': derived.doubled }, children);
}
export default Component562;
