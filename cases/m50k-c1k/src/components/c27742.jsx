import React from 'react';
const LABEL_27742 = 'component_27742';
export function Component27742({ value = 27742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27742, 'data-value': derived.doubled }, children);
}
export default Component27742;
