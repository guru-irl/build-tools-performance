import React from 'react';
const LABEL_12115 = 'component_12115';
export function Component12115({ value = 12115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12115, 'data-value': derived.doubled }, children);
}
export default Component12115;
