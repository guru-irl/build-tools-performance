import React from 'react';
const LABEL_27299 = 'component_27299';
export function Component27299({ value = 27299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27299, 'data-value': derived.doubled }, children);
}
export default Component27299;
