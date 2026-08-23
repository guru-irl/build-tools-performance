import React from 'react';
const LABEL_33482 = 'component_33482';
export function Component33482({ value = 33482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33482, 'data-value': derived.doubled }, children);
}
export default Component33482;
