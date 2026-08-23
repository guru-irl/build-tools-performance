import React from 'react';
const LABEL_37268 = 'component_37268';
export function Component37268({ value = 37268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37268, 'data-value': derived.doubled }, children);
}
export default Component37268;
