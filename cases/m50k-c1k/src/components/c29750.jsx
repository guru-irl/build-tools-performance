import React from 'react';
const LABEL_29750 = 'component_29750';
export function Component29750({ value = 29750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29750, 'data-value': derived.doubled }, children);
}
export default Component29750;
