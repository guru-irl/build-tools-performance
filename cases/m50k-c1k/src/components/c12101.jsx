import React from 'react';
const LABEL_12101 = 'component_12101';
export function Component12101({ value = 12101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12101, 'data-value': derived.doubled }, children);
}
export default Component12101;
