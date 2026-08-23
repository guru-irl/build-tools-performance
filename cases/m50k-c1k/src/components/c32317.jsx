import React from 'react';
const LABEL_32317 = 'component_32317';
export function Component32317({ value = 32317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32317, 'data-value': derived.doubled }, children);
}
export default Component32317;
