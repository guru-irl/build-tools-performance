import React from 'react';
const LABEL_35668 = 'component_35668';
export function Component35668({ value = 35668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35668, 'data-value': derived.doubled }, children);
}
export default Component35668;
