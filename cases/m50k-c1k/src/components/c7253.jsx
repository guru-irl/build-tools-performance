import React from 'react';
const LABEL_7253 = 'component_7253';
export function Component7253({ value = 7253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7253, 'data-value': derived.doubled }, children);
}
export default Component7253;
