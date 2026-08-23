import React from 'react';
const LABEL_15597 = 'component_15597';
export function Component15597({ value = 15597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15597, 'data-value': derived.doubled }, children);
}
export default Component15597;
