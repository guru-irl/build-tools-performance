import React from 'react';
const LABEL_35012 = 'component_35012';
export function Component35012({ value = 35012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35012, 'data-value': derived.doubled }, children);
}
export default Component35012;
