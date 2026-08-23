import React from 'react';
const LABEL_23743 = 'component_23743';
export function Component23743({ value = 23743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23743, 'data-value': derived.doubled }, children);
}
export default Component23743;
