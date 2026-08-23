import React from 'react';
const LABEL_25483 = 'component_25483';
export function Component25483({ value = 25483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25483, 'data-value': derived.doubled }, children);
}
export default Component25483;
