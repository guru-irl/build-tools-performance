import React from 'react';
const LABEL_27237 = 'component_27237';
export function Component27237({ value = 27237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27237, 'data-value': derived.doubled }, children);
}
export default Component27237;
