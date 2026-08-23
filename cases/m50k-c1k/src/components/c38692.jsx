import React from 'react';
const LABEL_38692 = 'component_38692';
export function Component38692({ value = 38692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38692, 'data-value': derived.doubled }, children);
}
export default Component38692;
