import React from 'react';
const LABEL_14268 = 'component_14268';
export function Component14268({ value = 14268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14268, 'data-value': derived.doubled }, children);
}
export default Component14268;
