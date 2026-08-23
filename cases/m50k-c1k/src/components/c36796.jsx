import React from 'react';
const LABEL_36796 = 'component_36796';
export function Component36796({ value = 36796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36796, 'data-value': derived.doubled }, children);
}
export default Component36796;
