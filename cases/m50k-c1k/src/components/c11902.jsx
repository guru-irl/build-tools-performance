import React from 'react';
const LABEL_11902 = 'component_11902';
export function Component11902({ value = 11902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11902, 'data-value': derived.doubled }, children);
}
export default Component11902;
