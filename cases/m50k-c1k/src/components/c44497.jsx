import React from 'react';
const LABEL_44497 = 'component_44497';
export function Component44497({ value = 44497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44497, 'data-value': derived.doubled }, children);
}
export default Component44497;
