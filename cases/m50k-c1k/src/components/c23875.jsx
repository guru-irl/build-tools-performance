import React from 'react';
const LABEL_23875 = 'component_23875';
export function Component23875({ value = 23875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23875, 'data-value': derived.doubled }, children);
}
export default Component23875;
