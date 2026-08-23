import React from 'react';
const LABEL_8476 = 'component_8476';
export function Component8476({ value = 8476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8476, 'data-value': derived.doubled }, children);
}
export default Component8476;
