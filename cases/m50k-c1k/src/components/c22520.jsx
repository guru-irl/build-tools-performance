import React from 'react';
const LABEL_22520 = 'component_22520';
export function Component22520({ value = 22520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22520, 'data-value': derived.doubled }, children);
}
export default Component22520;
