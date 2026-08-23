import React from 'react';
const LABEL_6434 = 'component_6434';
export function Component6434({ value = 6434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6434, 'data-value': derived.doubled }, children);
}
export default Component6434;
