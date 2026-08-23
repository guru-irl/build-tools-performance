import React from 'react';
const LABEL_16830 = 'component_16830';
export function Component16830({ value = 16830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16830, 'data-value': derived.doubled }, children);
}
export default Component16830;
