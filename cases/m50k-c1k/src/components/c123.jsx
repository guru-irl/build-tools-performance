import React from 'react';
const LABEL_123 = 'component_123';
export function Component123({ value = 123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_123, 'data-value': derived.doubled }, children);
}
export default Component123;
