import React from 'react';
const LABEL_15758 = 'component_15758';
export function Component15758({ value = 15758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15758, 'data-value': derived.doubled }, children);
}
export default Component15758;
