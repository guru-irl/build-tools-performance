import React from 'react';
const LABEL_14187 = 'component_14187';
export function Component14187({ value = 14187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14187, 'data-value': derived.doubled }, children);
}
export default Component14187;
