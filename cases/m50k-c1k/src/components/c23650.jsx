import React from 'react';
const LABEL_23650 = 'component_23650';
export function Component23650({ value = 23650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23650, 'data-value': derived.doubled }, children);
}
export default Component23650;
