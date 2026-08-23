import React from 'react';
const LABEL_9673 = 'component_9673';
export function Component9673({ value = 9673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9673, 'data-value': derived.doubled }, children);
}
export default Component9673;
