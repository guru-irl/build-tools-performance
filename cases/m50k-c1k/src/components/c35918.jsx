import React from 'react';
const LABEL_35918 = 'component_35918';
export function Component35918({ value = 35918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35918, 'data-value': derived.doubled }, children);
}
export default Component35918;
