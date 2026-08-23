import React from 'react';
const LABEL_46208 = 'component_46208';
export function Component46208({ value = 46208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46208, 'data-value': derived.doubled }, children);
}
export default Component46208;
