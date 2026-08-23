import React from 'react';
const LABEL_35474 = 'component_35474';
export function Component35474({ value = 35474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35474, 'data-value': derived.doubled }, children);
}
export default Component35474;
