import React from 'react';
const LABEL_4784 = 'component_4784';
export function Component4784({ value = 4784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4784, 'data-value': derived.doubled }, children);
}
export default Component4784;
