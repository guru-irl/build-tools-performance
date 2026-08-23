import React from 'react';
const LABEL_11481 = 'component_11481';
export function Component11481({ value = 11481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11481, 'data-value': derived.doubled }, children);
}
export default Component11481;
