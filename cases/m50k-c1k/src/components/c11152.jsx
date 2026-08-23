import React from 'react';
const LABEL_11152 = 'component_11152';
export function Component11152({ value = 11152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11152, 'data-value': derived.doubled }, children);
}
export default Component11152;
