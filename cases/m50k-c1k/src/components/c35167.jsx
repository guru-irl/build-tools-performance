import React from 'react';
const LABEL_35167 = 'component_35167';
export function Component35167({ value = 35167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35167, 'data-value': derived.doubled }, children);
}
export default Component35167;
