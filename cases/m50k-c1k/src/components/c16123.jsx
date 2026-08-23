import React from 'react';
const LABEL_16123 = 'component_16123';
export function Component16123({ value = 16123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16123, 'data-value': derived.doubled }, children);
}
export default Component16123;
