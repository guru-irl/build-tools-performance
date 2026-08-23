import React from 'react';
const LABEL_33102 = 'component_33102';
export function Component33102({ value = 33102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33102, 'data-value': derived.doubled }, children);
}
export default Component33102;
