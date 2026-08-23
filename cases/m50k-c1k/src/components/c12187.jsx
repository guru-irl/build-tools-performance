import React from 'react';
const LABEL_12187 = 'component_12187';
export function Component12187({ value = 12187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12187, 'data-value': derived.doubled }, children);
}
export default Component12187;
