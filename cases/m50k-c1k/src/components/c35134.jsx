import React from 'react';
const LABEL_35134 = 'component_35134';
export function Component35134({ value = 35134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35134, 'data-value': derived.doubled }, children);
}
export default Component35134;
