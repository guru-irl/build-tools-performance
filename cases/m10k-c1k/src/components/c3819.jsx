import React from 'react';
const LABEL_3819 = 'component_3819';
export function Component3819({ value = 3819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3819, 'data-value': derived.doubled }, children);
}
export default Component3819;
