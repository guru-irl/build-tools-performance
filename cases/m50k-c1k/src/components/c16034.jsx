import React from 'react';
const LABEL_16034 = 'component_16034';
export function Component16034({ value = 16034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16034, 'data-value': derived.doubled }, children);
}
export default Component16034;
