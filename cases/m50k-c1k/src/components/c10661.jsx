import React from 'react';
const LABEL_10661 = 'component_10661';
export function Component10661({ value = 10661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10661, 'data-value': derived.doubled }, children);
}
export default Component10661;
