import React from 'react';
const LABEL_36622 = 'component_36622';
export function Component36622({ value = 36622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36622, 'data-value': derived.doubled }, children);
}
export default Component36622;
