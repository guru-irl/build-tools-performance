import React from 'react';
const LABEL_14835 = 'component_14835';
export function Component14835({ value = 14835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14835, 'data-value': derived.doubled }, children);
}
export default Component14835;
