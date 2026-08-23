import React from 'react';
const LABEL_23234 = 'component_23234';
export function Component23234({ value = 23234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23234, 'data-value': derived.doubled }, children);
}
export default Component23234;
