import React from 'react';
const LABEL_23289 = 'component_23289';
export function Component23289({ value = 23289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23289, 'data-value': derived.doubled }, children);
}
export default Component23289;
