import React from 'react';
const LABEL_40692 = 'component_40692';
export function Component40692({ value = 40692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40692, 'data-value': derived.doubled }, children);
}
export default Component40692;
