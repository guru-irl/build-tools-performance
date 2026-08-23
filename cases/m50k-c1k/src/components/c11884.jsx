import React from 'react';
const LABEL_11884 = 'component_11884';
export function Component11884({ value = 11884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11884, 'data-value': derived.doubled }, children);
}
export default Component11884;
