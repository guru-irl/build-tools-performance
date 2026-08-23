import React from 'react';
const LABEL_6243 = 'component_6243';
export function Component6243({ value = 6243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6243, 'data-value': derived.doubled }, children);
}
export default Component6243;
