import React from 'react';
const LABEL_37123 = 'component_37123';
export function Component37123({ value = 37123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37123, 'data-value': derived.doubled }, children);
}
export default Component37123;
