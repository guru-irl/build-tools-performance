import React from 'react';
const LABEL_27070 = 'component_27070';
export function Component27070({ value = 27070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27070, 'data-value': derived.doubled }, children);
}
export default Component27070;
