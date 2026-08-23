import React from 'react';
const LABEL_11732 = 'component_11732';
export function Component11732({ value = 11732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11732, 'data-value': derived.doubled }, children);
}
export default Component11732;
