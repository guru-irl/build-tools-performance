import React from 'react';
const LABEL_27037 = 'component_27037';
export function Component27037({ value = 27037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27037, 'data-value': derived.doubled }, children);
}
export default Component27037;
