import React from 'react';
const LABEL_33162 = 'component_33162';
export function Component33162({ value = 33162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33162, 'data-value': derived.doubled }, children);
}
export default Component33162;
