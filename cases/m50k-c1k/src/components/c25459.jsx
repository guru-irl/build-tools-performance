import React from 'react';
const LABEL_25459 = 'component_25459';
export function Component25459({ value = 25459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25459, 'data-value': derived.doubled }, children);
}
export default Component25459;
