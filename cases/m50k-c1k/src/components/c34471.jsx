import React from 'react';
const LABEL_34471 = 'component_34471';
export function Component34471({ value = 34471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34471, 'data-value': derived.doubled }, children);
}
export default Component34471;
