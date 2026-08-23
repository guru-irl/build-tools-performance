import React from 'react';
const LABEL_34542 = 'component_34542';
export function Component34542({ value = 34542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34542, 'data-value': derived.doubled }, children);
}
export default Component34542;
