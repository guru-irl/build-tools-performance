import React from 'react';
const LABEL_13705 = 'component_13705';
export function Component13705({ value = 13705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13705, 'data-value': derived.doubled }, children);
}
export default Component13705;
