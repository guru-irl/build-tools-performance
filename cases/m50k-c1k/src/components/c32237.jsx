import React from 'react';
const LABEL_32237 = 'component_32237';
export function Component32237({ value = 32237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32237, 'data-value': derived.doubled }, children);
}
export default Component32237;
