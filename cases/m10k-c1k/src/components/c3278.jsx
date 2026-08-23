import React from 'react';
const LABEL_3278 = 'component_3278';
export function Component3278({ value = 3278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3278, 'data-value': derived.doubled }, children);
}
export default Component3278;
