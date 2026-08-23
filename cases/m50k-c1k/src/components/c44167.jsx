import React from 'react';
const LABEL_44167 = 'component_44167';
export function Component44167({ value = 44167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44167, 'data-value': derived.doubled }, children);
}
export default Component44167;
