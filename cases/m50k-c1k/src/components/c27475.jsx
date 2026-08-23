import React from 'react';
const LABEL_27475 = 'component_27475';
export function Component27475({ value = 27475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27475, 'data-value': derived.doubled }, children);
}
export default Component27475;
