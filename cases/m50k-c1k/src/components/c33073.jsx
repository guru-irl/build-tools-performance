import React from 'react';
const LABEL_33073 = 'component_33073';
export function Component33073({ value = 33073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33073, 'data-value': derived.doubled }, children);
}
export default Component33073;
