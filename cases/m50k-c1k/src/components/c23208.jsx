import React from 'react';
const LABEL_23208 = 'component_23208';
export function Component23208({ value = 23208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23208, 'data-value': derived.doubled }, children);
}
export default Component23208;
