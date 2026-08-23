import React from 'react';
const LABEL_22801 = 'component_22801';
export function Component22801({ value = 22801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22801, 'data-value': derived.doubled }, children);
}
export default Component22801;
