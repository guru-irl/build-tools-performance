import React from 'react';
const LABEL_25131 = 'component_25131';
export function Component25131({ value = 25131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25131, 'data-value': derived.doubled }, children);
}
export default Component25131;
