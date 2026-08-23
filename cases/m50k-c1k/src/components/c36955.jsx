import React from 'react';
const LABEL_36955 = 'component_36955';
export function Component36955({ value = 36955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36955, 'data-value': derived.doubled }, children);
}
export default Component36955;
