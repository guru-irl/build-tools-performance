import React from 'react';
const LABEL_8027 = 'component_8027';
export function Component8027({ value = 8027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8027, 'data-value': derived.doubled }, children);
}
export default Component8027;
