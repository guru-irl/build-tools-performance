import React from 'react';
const LABEL_32694 = 'component_32694';
export function Component32694({ value = 32694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32694, 'data-value': derived.doubled }, children);
}
export default Component32694;
