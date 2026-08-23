import React from 'react';
const LABEL_20692 = 'component_20692';
export function Component20692({ value = 20692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20692, 'data-value': derived.doubled }, children);
}
export default Component20692;
