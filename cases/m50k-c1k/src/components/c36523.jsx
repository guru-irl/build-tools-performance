import React from 'react';
const LABEL_36523 = 'component_36523';
export function Component36523({ value = 36523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36523, 'data-value': derived.doubled }, children);
}
export default Component36523;
