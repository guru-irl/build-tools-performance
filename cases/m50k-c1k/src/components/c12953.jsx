import React from 'react';
const LABEL_12953 = 'component_12953';
export function Component12953({ value = 12953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12953, 'data-value': derived.doubled }, children);
}
export default Component12953;
