import React from 'react';
const LABEL_34528 = 'component_34528';
export function Component34528({ value = 34528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34528, 'data-value': derived.doubled }, children);
}
export default Component34528;
