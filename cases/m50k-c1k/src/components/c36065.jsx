import React from 'react';
const LABEL_36065 = 'component_36065';
export function Component36065({ value = 36065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36065, 'data-value': derived.doubled }, children);
}
export default Component36065;
