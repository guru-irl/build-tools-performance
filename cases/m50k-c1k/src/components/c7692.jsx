import React from 'react';
const LABEL_7692 = 'component_7692';
export function Component7692({ value = 7692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7692, 'data-value': derived.doubled }, children);
}
export default Component7692;
