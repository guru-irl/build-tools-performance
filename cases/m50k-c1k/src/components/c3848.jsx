import React from 'react';
const LABEL_3848 = 'component_3848';
export function Component3848({ value = 3848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3848, 'data-value': derived.doubled }, children);
}
export default Component3848;
