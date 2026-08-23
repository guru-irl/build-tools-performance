import React from 'react';
const LABEL_25926 = 'component_25926';
export function Component25926({ value = 25926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25926, 'data-value': derived.doubled }, children);
}
export default Component25926;
