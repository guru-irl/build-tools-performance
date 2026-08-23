import React from 'react';
const LABEL_45784 = 'component_45784';
export function Component45784({ value = 45784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45784, 'data-value': derived.doubled }, children);
}
export default Component45784;
