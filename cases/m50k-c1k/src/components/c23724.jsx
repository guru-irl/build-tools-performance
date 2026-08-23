import React from 'react';
const LABEL_23724 = 'component_23724';
export function Component23724({ value = 23724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23724, 'data-value': derived.doubled }, children);
}
export default Component23724;
