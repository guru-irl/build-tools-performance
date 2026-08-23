import React from 'react';
const LABEL_32234 = 'component_32234';
export function Component32234({ value = 32234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32234, 'data-value': derived.doubled }, children);
}
export default Component32234;
