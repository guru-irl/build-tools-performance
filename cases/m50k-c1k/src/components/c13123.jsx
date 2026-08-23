import React from 'react';
const LABEL_13123 = 'component_13123';
export function Component13123({ value = 13123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13123, 'data-value': derived.doubled }, children);
}
export default Component13123;
