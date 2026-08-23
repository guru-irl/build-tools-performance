import React from 'react';
const LABEL_13784 = 'component_13784';
export function Component13784({ value = 13784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13784, 'data-value': derived.doubled }, children);
}
export default Component13784;
