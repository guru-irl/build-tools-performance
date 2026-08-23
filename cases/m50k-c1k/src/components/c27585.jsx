import React from 'react';
const LABEL_27585 = 'component_27585';
export function Component27585({ value = 27585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27585, 'data-value': derived.doubled }, children);
}
export default Component27585;
