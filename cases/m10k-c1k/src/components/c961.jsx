import React from 'react';
const LABEL_961 = 'component_961';
export function Component961({ value = 961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_961, 'data-value': derived.doubled }, children);
}
export default Component961;
