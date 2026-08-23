import React from 'react';
const LABEL_21012 = 'component_21012';
export function Component21012({ value = 21012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21012, 'data-value': derived.doubled }, children);
}
export default Component21012;
