import React from 'react';
const LABEL_32599 = 'component_32599';
export function Component32599({ value = 32599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32599, 'data-value': derived.doubled }, children);
}
export default Component32599;
