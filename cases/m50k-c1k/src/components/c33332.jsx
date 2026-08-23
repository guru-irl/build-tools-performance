import React from 'react';
const LABEL_33332 = 'component_33332';
export function Component33332({ value = 33332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33332, 'data-value': derived.doubled }, children);
}
export default Component33332;
