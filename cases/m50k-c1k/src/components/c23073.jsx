import React from 'react';
const LABEL_23073 = 'component_23073';
export function Component23073({ value = 23073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23073, 'data-value': derived.doubled }, children);
}
export default Component23073;
