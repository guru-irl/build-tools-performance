import React from 'react';
const LABEL_25271 = 'component_25271';
export function Component25271({ value = 25271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25271, 'data-value': derived.doubled }, children);
}
export default Component25271;
