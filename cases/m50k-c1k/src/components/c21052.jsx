import React from 'react';
const LABEL_21052 = 'component_21052';
export function Component21052({ value = 21052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21052, 'data-value': derived.doubled }, children);
}
export default Component21052;
