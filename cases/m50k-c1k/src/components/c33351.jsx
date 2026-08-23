import React from 'react';
const LABEL_33351 = 'component_33351';
export function Component33351({ value = 33351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33351, 'data-value': derived.doubled }, children);
}
export default Component33351;
