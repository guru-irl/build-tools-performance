import React from 'react';
const LABEL_3583 = 'component_3583';
export function Component3583({ value = 3583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3583, 'data-value': derived.doubled }, children);
}
export default Component3583;
