import React from 'react';
const LABEL_8193 = 'component_8193';
export function Component8193({ value = 8193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8193, 'data-value': derived.doubled }, children);
}
export default Component8193;
