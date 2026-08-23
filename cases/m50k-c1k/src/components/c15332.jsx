import React from 'react';
const LABEL_15332 = 'component_15332';
export function Component15332({ value = 15332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15332, 'data-value': derived.doubled }, children);
}
export default Component15332;
