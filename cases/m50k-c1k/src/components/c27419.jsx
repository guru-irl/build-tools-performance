import React from 'react';
const LABEL_27419 = 'component_27419';
export function Component27419({ value = 27419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27419, 'data-value': derived.doubled }, children);
}
export default Component27419;
