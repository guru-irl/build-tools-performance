import React from 'react';
const LABEL_34434 = 'component_34434';
export function Component34434({ value = 34434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34434, 'data-value': derived.doubled }, children);
}
export default Component34434;
