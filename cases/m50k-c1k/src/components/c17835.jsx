import React from 'react';
const LABEL_17835 = 'component_17835';
export function Component17835({ value = 17835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17835, 'data-value': derived.doubled }, children);
}
export default Component17835;
