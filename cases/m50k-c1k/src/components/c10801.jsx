import React from 'react';
const LABEL_10801 = 'component_10801';
export function Component10801({ value = 10801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10801, 'data-value': derived.doubled }, children);
}
export default Component10801;
