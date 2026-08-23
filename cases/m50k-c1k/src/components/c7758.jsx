import React from 'react';
const LABEL_7758 = 'component_7758';
export function Component7758({ value = 7758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7758, 'data-value': derived.doubled }, children);
}
export default Component7758;
