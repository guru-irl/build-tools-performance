import React from 'react';
const LABEL_16823 = 'component_16823';
export function Component16823({ value = 16823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16823, 'data-value': derived.doubled }, children);
}
export default Component16823;
