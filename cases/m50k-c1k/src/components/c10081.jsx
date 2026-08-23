import React from 'react';
const LABEL_10081 = 'component_10081';
export function Component10081({ value = 10081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10081, 'data-value': derived.doubled }, children);
}
export default Component10081;
