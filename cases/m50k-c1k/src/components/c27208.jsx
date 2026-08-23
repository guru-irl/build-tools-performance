import React from 'react';
const LABEL_27208 = 'component_27208';
export function Component27208({ value = 27208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27208, 'data-value': derived.doubled }, children);
}
export default Component27208;
