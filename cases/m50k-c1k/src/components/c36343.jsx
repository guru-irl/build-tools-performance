import React from 'react';
const LABEL_36343 = 'component_36343';
export function Component36343({ value = 36343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36343, 'data-value': derived.doubled }, children);
}
export default Component36343;
