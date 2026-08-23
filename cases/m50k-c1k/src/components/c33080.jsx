import React from 'react';
const LABEL_33080 = 'component_33080';
export function Component33080({ value = 33080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33080, 'data-value': derived.doubled }, children);
}
export default Component33080;
