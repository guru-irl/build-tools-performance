import React from 'react';
const LABEL_12915 = 'component_12915';
export function Component12915({ value = 12915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12915, 'data-value': derived.doubled }, children);
}
export default Component12915;
