import React from 'react';
const LABEL_27369 = 'component_27369';
export function Component27369({ value = 27369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27369, 'data-value': derived.doubled }, children);
}
export default Component27369;
