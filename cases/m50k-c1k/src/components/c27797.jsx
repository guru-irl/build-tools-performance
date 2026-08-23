import React from 'react';
const LABEL_27797 = 'component_27797';
export function Component27797({ value = 27797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27797, 'data-value': derived.doubled }, children);
}
export default Component27797;
