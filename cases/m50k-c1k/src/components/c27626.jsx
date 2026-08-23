import React from 'react';
const LABEL_27626 = 'component_27626';
export function Component27626({ value = 27626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27626, 'data-value': derived.doubled }, children);
}
export default Component27626;
