import React from 'react';
const LABEL_10758 = 'component_10758';
export function Component10758({ value = 10758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10758, 'data-value': derived.doubled }, children);
}
export default Component10758;
