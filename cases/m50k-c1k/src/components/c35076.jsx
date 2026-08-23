import React from 'react';
const LABEL_35076 = 'component_35076';
export function Component35076({ value = 35076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35076, 'data-value': derived.doubled }, children);
}
export default Component35076;
