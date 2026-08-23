import React from 'react';
const LABEL_23482 = 'component_23482';
export function Component23482({ value = 23482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23482, 'data-value': derived.doubled }, children);
}
export default Component23482;
