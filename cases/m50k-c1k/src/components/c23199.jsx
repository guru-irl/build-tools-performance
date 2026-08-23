import React from 'react';
const LABEL_23199 = 'component_23199';
export function Component23199({ value = 23199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23199, 'data-value': derived.doubled }, children);
}
export default Component23199;
