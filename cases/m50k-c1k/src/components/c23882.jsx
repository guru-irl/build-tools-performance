import React from 'react';
const LABEL_23882 = 'component_23882';
export function Component23882({ value = 23882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23882, 'data-value': derived.doubled }, children);
}
export default Component23882;
