import React from 'react';
const LABEL_33705 = 'component_33705';
export function Component33705({ value = 33705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33705, 'data-value': derived.doubled }, children);
}
export default Component33705;
