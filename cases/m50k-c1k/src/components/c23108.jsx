import React from 'react';
const LABEL_23108 = 'component_23108';
export function Component23108({ value = 23108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23108, 'data-value': derived.doubled }, children);
}
export default Component23108;
