import React from 'react';
const LABEL_12629 = 'component_12629';
export function Component12629({ value = 12629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12629, 'data-value': derived.doubled }, children);
}
export default Component12629;
