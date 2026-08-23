import React from 'react';
const LABEL_14678 = 'component_14678';
export function Component14678({ value = 14678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14678, 'data-value': derived.doubled }, children);
}
export default Component14678;
