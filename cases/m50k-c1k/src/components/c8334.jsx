import React from 'react';
const LABEL_8334 = 'component_8334';
export function Component8334({ value = 8334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8334, 'data-value': derived.doubled }, children);
}
export default Component8334;
