import React from 'react';
const LABEL_16852 = 'component_16852';
export function Component16852({ value = 16852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16852, 'data-value': derived.doubled }, children);
}
export default Component16852;
