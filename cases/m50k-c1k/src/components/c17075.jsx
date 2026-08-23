import React from 'react';
const LABEL_17075 = 'component_17075';
export function Component17075({ value = 17075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17075, 'data-value': derived.doubled }, children);
}
export default Component17075;
