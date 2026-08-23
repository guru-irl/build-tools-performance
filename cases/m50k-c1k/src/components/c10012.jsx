import React from 'react';
const LABEL_10012 = 'component_10012';
export function Component10012({ value = 10012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10012, 'data-value': derived.doubled }, children);
}
export default Component10012;
