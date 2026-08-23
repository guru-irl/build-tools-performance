import React from 'react';
const LABEL_12172 = 'component_12172';
export function Component12172({ value = 12172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12172, 'data-value': derived.doubled }, children);
}
export default Component12172;
