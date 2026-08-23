import React from 'react';
const LABEL_27294 = 'component_27294';
export function Component27294({ value = 27294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27294, 'data-value': derived.doubled }, children);
}
export default Component27294;
