import React from 'react';
const LABEL_9617 = 'component_9617';
export function Component9617({ value = 9617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9617, 'data-value': derived.doubled }, children);
}
export default Component9617;
