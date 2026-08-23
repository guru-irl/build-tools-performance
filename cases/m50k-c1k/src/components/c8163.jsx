import React from 'react';
const LABEL_8163 = 'component_8163';
export function Component8163({ value = 8163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8163, 'data-value': derived.doubled }, children);
}
export default Component8163;
