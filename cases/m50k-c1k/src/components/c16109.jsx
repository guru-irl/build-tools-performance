import React from 'react';
const LABEL_16109 = 'component_16109';
export function Component16109({ value = 16109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16109, 'data-value': derived.doubled }, children);
}
export default Component16109;
