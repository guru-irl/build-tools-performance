import React from 'react';
const LABEL_25236 = 'component_25236';
export function Component25236({ value = 25236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25236, 'data-value': derived.doubled }, children);
}
export default Component25236;
