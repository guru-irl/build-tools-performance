import React from 'react';
const LABEL_36969 = 'component_36969';
export function Component36969({ value = 36969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36969, 'data-value': derived.doubled }, children);
}
export default Component36969;
