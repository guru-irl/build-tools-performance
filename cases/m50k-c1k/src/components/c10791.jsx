import React from 'react';
const LABEL_10791 = 'component_10791';
export function Component10791({ value = 10791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10791, 'data-value': derived.doubled }, children);
}
export default Component10791;
