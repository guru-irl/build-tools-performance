import React from 'react';
const LABEL_16847 = 'component_16847';
export function Component16847({ value = 16847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16847, 'data-value': derived.doubled }, children);
}
export default Component16847;
