import React from 'react';
const LABEL_15289 = 'component_15289';
export function Component15289({ value = 15289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15289, 'data-value': derived.doubled }, children);
}
export default Component15289;
