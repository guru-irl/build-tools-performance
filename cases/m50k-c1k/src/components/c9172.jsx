import React from 'react';
const LABEL_9172 = 'component_9172';
export function Component9172({ value = 9172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9172, 'data-value': derived.doubled }, children);
}
export default Component9172;
