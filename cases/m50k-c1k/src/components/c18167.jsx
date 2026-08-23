import React from 'react';
const LABEL_18167 = 'component_18167';
export function Component18167({ value = 18167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18167, 'data-value': derived.doubled }, children);
}
export default Component18167;
