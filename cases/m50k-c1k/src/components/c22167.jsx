import React from 'react';
const LABEL_22167 = 'component_22167';
export function Component22167({ value = 22167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22167, 'data-value': derived.doubled }, children);
}
export default Component22167;
