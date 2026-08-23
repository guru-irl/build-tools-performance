import React from 'react';
const LABEL_32162 = 'component_32162';
export function Component32162({ value = 32162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32162, 'data-value': derived.doubled }, children);
}
export default Component32162;
