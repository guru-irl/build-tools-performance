import React from 'react';
const LABEL_35150 = 'component_35150';
export function Component35150({ value = 35150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35150, 'data-value': derived.doubled }, children);
}
export default Component35150;
