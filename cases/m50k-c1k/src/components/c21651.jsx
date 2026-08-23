import React from 'react';
const LABEL_21651 = 'component_21651';
export function Component21651({ value = 21651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21651, 'data-value': derived.doubled }, children);
}
export default Component21651;
