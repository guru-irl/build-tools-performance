import React from 'react';
const LABEL_25182 = 'component_25182';
export function Component25182({ value = 25182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25182, 'data-value': derived.doubled }, children);
}
export default Component25182;
