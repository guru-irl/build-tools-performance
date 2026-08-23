import React from 'react';
const LABEL_32823 = 'component_32823';
export function Component32823({ value = 32823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32823, 'data-value': derived.doubled }, children);
}
export default Component32823;
