import React from 'react';
const LABEL_14152 = 'component_14152';
export function Component14152({ value = 14152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14152, 'data-value': derived.doubled }, children);
}
export default Component14152;
