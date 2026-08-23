import React from 'react';
const LABEL_9506 = 'component_9506';
export function Component9506({ value = 9506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9506, 'data-value': derived.doubled }, children);
}
export default Component9506;
