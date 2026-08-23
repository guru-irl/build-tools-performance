import React from 'react';
const LABEL_34641 = 'component_34641';
export function Component34641({ value = 34641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34641, 'data-value': derived.doubled }, children);
}
export default Component34641;
