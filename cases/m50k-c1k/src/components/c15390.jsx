import React from 'react';
const LABEL_15390 = 'component_15390';
export function Component15390({ value = 15390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15390, 'data-value': derived.doubled }, children);
}
export default Component15390;
