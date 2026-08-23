import React from 'react';
const LABEL_36649 = 'component_36649';
export function Component36649({ value = 36649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36649, 'data-value': derived.doubled }, children);
}
export default Component36649;
