import React from 'react';
const LABEL_39692 = 'component_39692';
export function Component39692({ value = 39692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39692, 'data-value': derived.doubled }, children);
}
export default Component39692;
