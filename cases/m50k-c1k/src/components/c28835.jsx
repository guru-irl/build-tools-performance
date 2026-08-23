import React from 'react';
const LABEL_28835 = 'component_28835';
export function Component28835({ value = 28835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28835, 'data-value': derived.doubled }, children);
}
export default Component28835;
