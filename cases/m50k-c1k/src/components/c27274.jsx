import React from 'react';
const LABEL_27274 = 'component_27274';
export function Component27274({ value = 27274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27274, 'data-value': derived.doubled }, children);
}
export default Component27274;
