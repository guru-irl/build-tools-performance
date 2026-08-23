import React from 'react';
const LABEL_36909 = 'component_36909';
export function Component36909({ value = 36909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36909, 'data-value': derived.doubled }, children);
}
export default Component36909;
