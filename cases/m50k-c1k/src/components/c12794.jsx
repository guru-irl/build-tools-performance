import React from 'react';
const LABEL_12794 = 'component_12794';
export function Component12794({ value = 12794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12794, 'data-value': derived.doubled }, children);
}
export default Component12794;
