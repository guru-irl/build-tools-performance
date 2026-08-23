import React from 'react';
const LABEL_27374 = 'component_27374';
export function Component27374({ value = 27374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27374, 'data-value': derived.doubled }, children);
}
export default Component27374;
