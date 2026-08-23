import React from 'react';
const LABEL_16372 = 'component_16372';
export function Component16372({ value = 16372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16372, 'data-value': derived.doubled }, children);
}
export default Component16372;
