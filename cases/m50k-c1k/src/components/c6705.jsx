import React from 'react';
const LABEL_6705 = 'component_6705';
export function Component6705({ value = 6705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6705, 'data-value': derived.doubled }, children);
}
export default Component6705;
