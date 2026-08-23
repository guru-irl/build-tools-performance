import React from 'react';
const LABEL_36912 = 'component_36912';
export function Component36912({ value = 36912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36912, 'data-value': derived.doubled }, children);
}
export default Component36912;
