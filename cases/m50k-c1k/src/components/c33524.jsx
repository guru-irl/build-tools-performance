import React from 'react';
const LABEL_33524 = 'component_33524';
export function Component33524({ value = 33524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33524, 'data-value': derived.doubled }, children);
}
export default Component33524;
