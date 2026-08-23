import React from 'react';
const LABEL_35917 = 'component_35917';
export function Component35917({ value = 35917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35917, 'data-value': derived.doubled }, children);
}
export default Component35917;
