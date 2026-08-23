import React from 'react';
const LABEL_39626 = 'component_39626';
export function Component39626({ value = 39626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39626, 'data-value': derived.doubled }, children);
}
export default Component39626;
