import React from 'react';
const LABEL_6875 = 'component_6875';
export function Component6875({ value = 6875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6875, 'data-value': derived.doubled }, children);
}
export default Component6875;
