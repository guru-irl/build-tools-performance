import React from 'react';
const LABEL_33128 = 'component_33128';
export function Component33128({ value = 33128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33128, 'data-value': derived.doubled }, children);
}
export default Component33128;
