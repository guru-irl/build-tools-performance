import React from 'react';
const LABEL_35590 = 'component_35590';
export function Component35590({ value = 35590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35590, 'data-value': derived.doubled }, children);
}
export default Component35590;
