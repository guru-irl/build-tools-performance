import React from 'react';
const LABEL_21829 = 'component_21829';
export function Component21829({ value = 21829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21829, 'data-value': derived.doubled }, children);
}
export default Component21829;
