import React from 'react';
const LABEL_32012 = 'component_32012';
export function Component32012({ value = 32012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32012, 'data-value': derived.doubled }, children);
}
export default Component32012;
