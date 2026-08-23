import React from 'react';
const LABEL_25529 = 'component_25529';
export function Component25529({ value = 25529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25529, 'data-value': derived.doubled }, children);
}
export default Component25529;
