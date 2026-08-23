import React from 'react';
const LABEL_27015 = 'component_27015';
export function Component27015({ value = 27015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27015, 'data-value': derived.doubled }, children);
}
export default Component27015;
