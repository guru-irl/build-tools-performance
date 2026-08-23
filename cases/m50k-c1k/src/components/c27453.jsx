import React from 'react';
const LABEL_27453 = 'component_27453';
export function Component27453({ value = 27453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27453, 'data-value': derived.doubled }, children);
}
export default Component27453;
