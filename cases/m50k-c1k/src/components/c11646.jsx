import React from 'react';
const LABEL_11646 = 'component_11646';
export function Component11646({ value = 11646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11646, 'data-value': derived.doubled }, children);
}
export default Component11646;
