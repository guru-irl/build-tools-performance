import React from 'react';
const LABEL_3835 = 'component_3835';
export function Component3835({ value = 3835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3835, 'data-value': derived.doubled }, children);
}
export default Component3835;
