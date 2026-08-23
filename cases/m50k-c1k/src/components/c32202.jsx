import React from 'react';
const LABEL_32202 = 'component_32202';
export function Component32202({ value = 32202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32202, 'data-value': derived.doubled }, children);
}
export default Component32202;
