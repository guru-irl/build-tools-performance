import React from 'react';
const LABEL_25128 = 'component_25128';
export function Component25128({ value = 25128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25128, 'data-value': derived.doubled }, children);
}
export default Component25128;
