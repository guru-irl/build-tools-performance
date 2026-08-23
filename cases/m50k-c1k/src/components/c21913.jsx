import React from 'react';
const LABEL_21913 = 'component_21913';
export function Component21913({ value = 21913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21913, 'data-value': derived.doubled }, children);
}
export default Component21913;
