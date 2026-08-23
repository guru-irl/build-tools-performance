import React from 'react';
const LABEL_25631 = 'component_25631';
export function Component25631({ value = 25631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25631, 'data-value': derived.doubled }, children);
}
export default Component25631;
