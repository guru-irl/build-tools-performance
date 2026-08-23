import React from 'react';
const LABEL_36152 = 'component_36152';
export function Component36152({ value = 36152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36152, 'data-value': derived.doubled }, children);
}
export default Component36152;
