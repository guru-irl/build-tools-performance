import React from 'react';
const LABEL_12692 = 'component_12692';
export function Component12692({ value = 12692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12692, 'data-value': derived.doubled }, children);
}
export default Component12692;
