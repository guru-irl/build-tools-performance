import React from 'react';
const LABEL_37885 = 'component_37885';
export function Component37885({ value = 37885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37885, 'data-value': derived.doubled }, children);
}
export default Component37885;
