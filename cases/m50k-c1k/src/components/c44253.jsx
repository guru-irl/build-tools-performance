import React from 'react';
const LABEL_44253 = 'component_44253';
export function Component44253({ value = 44253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44253, 'data-value': derived.doubled }, children);
}
export default Component44253;
