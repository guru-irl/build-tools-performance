import React from 'react';
const LABEL_16801 = 'component_16801';
export function Component16801({ value = 16801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16801, 'data-value': derived.doubled }, children);
}
export default Component16801;
