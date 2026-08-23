import React from 'react';
const LABEL_41081 = 'component_41081';
export function Component41081({ value = 41081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41081, 'data-value': derived.doubled }, children);
}
export default Component41081;
