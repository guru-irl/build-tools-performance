import React from 'react';
const LABEL_9873 = 'component_9873';
export function Component9873({ value = 9873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9873, 'data-value': derived.doubled }, children);
}
export default Component9873;
