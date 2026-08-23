import React from 'react';
const LABEL_31539 = 'component_31539';
export function Component31539({ value = 31539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31539, 'data-value': derived.doubled }, children);
}
export default Component31539;
