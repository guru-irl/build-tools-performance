import React from 'react';
const LABEL_14819 = 'component_14819';
export function Component14819({ value = 14819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14819, 'data-value': derived.doubled }, children);
}
export default Component14819;
