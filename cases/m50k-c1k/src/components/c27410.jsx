import React from 'react';
const LABEL_27410 = 'component_27410';
export function Component27410({ value = 27410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27410, 'data-value': derived.doubled }, children);
}
export default Component27410;
