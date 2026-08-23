import React from 'react';
const LABEL_6208 = 'component_6208';
export function Component6208({ value = 6208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6208, 'data-value': derived.doubled }, children);
}
export default Component6208;
