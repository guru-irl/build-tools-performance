import React from 'react';
const LABEL_8784 = 'component_8784';
export function Component8784({ value = 8784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8784, 'data-value': derived.doubled }, children);
}
export default Component8784;
