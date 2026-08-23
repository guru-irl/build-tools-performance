import React from 'react';
const LABEL_27506 = 'component_27506';
export function Component27506({ value = 27506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27506, 'data-value': derived.doubled }, children);
}
export default Component27506;
