import React from 'react';
const LABEL_29326 = 'component_29326';
export function Component29326({ value = 29326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29326, 'data-value': derived.doubled }, children);
}
export default Component29326;
