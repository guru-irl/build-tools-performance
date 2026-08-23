import React from 'react';
const LABEL_11167 = 'component_11167';
export function Component11167({ value = 11167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11167, 'data-value': derived.doubled }, children);
}
export default Component11167;
