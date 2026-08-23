import React from 'react';
const LABEL_22919 = 'component_22919';
export function Component22919({ value = 22919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22919, 'data-value': derived.doubled }, children);
}
export default Component22919;
