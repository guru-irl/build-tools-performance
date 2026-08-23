import React from 'react';
const LABEL_16133 = 'component_16133';
export function Component16133({ value = 16133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16133, 'data-value': derived.doubled }, children);
}
export default Component16133;
