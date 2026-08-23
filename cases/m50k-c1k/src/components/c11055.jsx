import React from 'react';
const LABEL_11055 = 'component_11055';
export function Component11055({ value = 11055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11055, 'data-value': derived.doubled }, children);
}
export default Component11055;
