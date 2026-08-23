import React from 'react';
const LABEL_40167 = 'component_40167';
export function Component40167({ value = 40167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40167, 'data-value': derived.doubled }, children);
}
export default Component40167;
