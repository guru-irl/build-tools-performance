import React from 'react';
const LABEL_6012 = 'component_6012';
export function Component6012({ value = 6012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6012, 'data-value': derived.doubled }, children);
}
export default Component6012;
