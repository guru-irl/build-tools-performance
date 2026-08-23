import React from 'react';
const LABEL_27329 = 'component_27329';
export function Component27329({ value = 27329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27329, 'data-value': derived.doubled }, children);
}
export default Component27329;
