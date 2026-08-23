import React from 'react';
const LABEL_13692 = 'component_13692';
export function Component13692({ value = 13692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13692, 'data-value': derived.doubled }, children);
}
export default Component13692;
