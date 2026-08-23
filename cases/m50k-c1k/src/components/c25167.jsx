import React from 'react';
const LABEL_25167 = 'component_25167';
export function Component25167({ value = 25167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25167, 'data-value': derived.doubled }, children);
}
export default Component25167;
