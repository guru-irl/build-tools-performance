import React from 'react';
const LABEL_16216 = 'component_16216';
export function Component16216({ value = 16216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16216, 'data-value': derived.doubled }, children);
}
export default Component16216;
