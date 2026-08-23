import React from 'react';
const LABEL_27913 = 'component_27913';
export function Component27913({ value = 27913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27913, 'data-value': derived.doubled }, children);
}
export default Component27913;
