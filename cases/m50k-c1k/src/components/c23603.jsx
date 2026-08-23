import React from 'react';
const LABEL_23603 = 'component_23603';
export function Component23603({ value = 23603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23603, 'data-value': derived.doubled }, children);
}
export default Component23603;
