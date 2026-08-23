import React from 'react';
const LABEL_3778 = 'component_3778';
export function Component3778({ value = 3778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3778, 'data-value': derived.doubled }, children);
}
export default Component3778;
