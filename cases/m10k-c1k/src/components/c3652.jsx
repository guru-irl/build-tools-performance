import React from 'react';
const LABEL_3652 = 'component_3652';
export function Component3652({ value = 3652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3652, 'data-value': derived.doubled }, children);
}
export default Component3652;
