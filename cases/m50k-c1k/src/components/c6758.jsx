import React from 'react';
const LABEL_6758 = 'component_6758';
export function Component6758({ value = 6758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6758, 'data-value': derived.doubled }, children);
}
export default Component6758;
