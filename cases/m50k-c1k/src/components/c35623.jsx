import React from 'react';
const LABEL_35623 = 'component_35623';
export function Component35623({ value = 35623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35623, 'data-value': derived.doubled }, children);
}
export default Component35623;
