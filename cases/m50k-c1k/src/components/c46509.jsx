import React from 'react';
const LABEL_46509 = 'component_46509';
export function Component46509({ value = 46509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46509, 'data-value': derived.doubled }, children);
}
export default Component46509;
