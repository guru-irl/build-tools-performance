import React from 'react';
const LABEL_38459 = 'component_38459';
export function Component38459({ value = 38459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38459, 'data-value': derived.doubled }, children);
}
export default Component38459;
