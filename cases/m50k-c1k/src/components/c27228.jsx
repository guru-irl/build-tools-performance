import React from 'react';
const LABEL_27228 = 'component_27228';
export function Component27228({ value = 27228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27228, 'data-value': derived.doubled }, children);
}
export default Component27228;
