import React from 'react';
const LABEL_33057 = 'component_33057';
export function Component33057({ value = 33057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33057, 'data-value': derived.doubled }, children);
}
export default Component33057;
