import React from 'react';
const LABEL_23784 = 'component_23784';
export function Component23784({ value = 23784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23784, 'data-value': derived.doubled }, children);
}
export default Component23784;
