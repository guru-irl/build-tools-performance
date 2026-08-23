import React from 'react';
const LABEL_25000 = 'component_25000';
export function Component25000({ value = 25000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25000, 'data-value': derived.doubled }, children);
}
export default Component25000;
