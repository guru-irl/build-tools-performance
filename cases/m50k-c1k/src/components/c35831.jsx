import React from 'react';
const LABEL_35831 = 'component_35831';
export function Component35831({ value = 35831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35831, 'data-value': derived.doubled }, children);
}
export default Component35831;
