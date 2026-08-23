import React from 'react';
const LABEL_33203 = 'component_33203';
export function Component33203({ value = 33203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33203, 'data-value': derived.doubled }, children);
}
export default Component33203;
