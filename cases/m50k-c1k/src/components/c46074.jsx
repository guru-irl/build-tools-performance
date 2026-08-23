import React from 'react';
const LABEL_46074 = 'component_46074';
export function Component46074({ value = 46074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46074, 'data-value': derived.doubled }, children);
}
export default Component46074;
