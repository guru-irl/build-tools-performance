import React from 'react';
const LABEL_23491 = 'component_23491';
export function Component23491({ value = 23491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23491, 'data-value': derived.doubled }, children);
}
export default Component23491;
