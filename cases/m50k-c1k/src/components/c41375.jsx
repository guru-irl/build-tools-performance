import React from 'react';
const LABEL_41375 = 'component_41375';
export function Component41375({ value = 41375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41375, 'data-value': derived.doubled }, children);
}
export default Component41375;
